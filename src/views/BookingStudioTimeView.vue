<script setup>
</script>
<template>
    <div class="pageTopMargin">
        <br />
        <div class="calendarContainer">
            <button class="dateButton" type="button" @click="goToToday">Go To Today</button>
            <br />
            <div class="dateButtons">
                <button class="dateButton" type="button" @click="getPrevWeek"><i
                        class="fa-solid fa-arrow-left"></i></button>
                <div v-for="day of weekArray" class="dateColumn">
                    <button class="dateButton" type="button">{{ day.displayDate }}</button>
                    <div>Times</div>
                </div>
                <button class="dateButton" type="button" @click="getNextWeek"><i
                        class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            weekArray: [],
            googleCalendarApiKey: import.meta.env.VITE_GOOGLE_CALENDAR_API,
            currentDate: new Date(),
        }
    },
    async mounted() {
        this.getWeek();
    },
    methods: {
        async getCalendarEvents(weekDatesArray) {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            const startDate = new Date(weekDatesArray[0]).toISOString();
            const endDate = new Date(weekDatesArray[weekDatesArray.length - 1]).toISOString();

            return await fetch("https://www.googleapis.com/calendar/v3/calendars/cbb1d97352021b378ad48b9577deebdd5c4cca30cdbf5bd008f1f5687d4e8cd1@group.calendar.google.com/events?key=" + this.googleCalendarApiKey + "&timeMin=" + startDate + "&timeMax=" + endDate, requestOptions)
                .then((response) => response.text())
                .then((result) => { return JSON.parse(result) })
                .catch((error) => console.error(error));
        },
        async getWeek() {
            let currentDayIndex = -(this.currentDate.getDay());
            const weekDatesArray = [];

            for (let i = 0; i < 7; i++) {
                let tempDate = new Date(this.currentDate);
                tempDate.setDate(this.currentDate.getDate() + currentDayIndex);

                let month = tempDate.getMonth() + 1;
                let day = tempDate.getDate();
                let year = tempDate.getFullYear();

                weekDatesArray.push({
                    displayDate: `${month}/${day}/${year}`,
                    objectDate: new Date(`${year}-${month}-${day}`).toISOString().split('T')[0],
                })
                currentDayIndex++;
            }

            //const calendarEvents = await this.getCalendarEvents(weekDatesArray);
            const calendarEvents = this.formatCalendarEvents({
                "kind": "calendar#events",
                "etag": "\"p33c8v85vqjqog0o\"",
                "summary": "Greg’s Music Calendar",
                "description": "",
                "updated": "2024-10-04T21:23:22.967Z",
                "timeZone": "America/New_York",
                "accessRole": "freeBusyReader",
                "defaultReminders": [],
                "nextSyncToken": "CNiPoL_U9YgDEAAYCiDR0OfEAijR0OfEAg==",
                "items": [
                    {
                        "kind": "calendar#event",
                        "etag": "\"3456154005934000\"",
                        "id": "2g03s1rkmdhekns0smb93bc1v2",
                        "status": "confirmed",
                        "htmlLink": "https://www.google.com/calendar/event?eid=MmcwM3MxcmttZGhla25zMHNtYjkzYmMxdjIgY2JiMWQ5NzM1MjAyMWIzNzhhZDQ4Yjk1NzdkZWViZGQ1YzRjY2EzMGNkYmY1YmQwMDhmMWY1Njg3ZDRlOGNkMUBn",
                        "updated": "2024-10-04T21:23:22.967Z",
                        "start": {
                            "date": "2024-10-04"
                        },
                        "end": {
                            "date": "2024-10-05"
                        },
                        "visibility": "private",
                        "iCalUID": "2g03s1rkmdhekns0smb93bc1v2@google.com"
                    }
                ]
            });

            for (let i = 0; i < weekDatesArray.length; i++) {
                weekDatesArray[i]['events'] = (calendarEvents[weekDatesArray[i]['objectDate']]);
            }

            console.dir(weekDatesArray);

            this.weekArray = weekDatesArray;
            console.dir(calendarEvents);
        },
        getPrevWeek() {
            this.currentDate.setDate(this.currentDate.getDate() - 7);
            this.getWeek()
        },
        getNextWeek() {
            this.currentDate.setDate(this.currentDate.getDate() + 7);
            this.getWeek()
        },
        goToToday() {
            this.currentDate = new Date();
            this.getWeek();
        },
        formatCalendarEvents(calendarEvents) {
            const events = {};
            for (const event of calendarEvents.items) {
                events[event.start.date] = true;
            }

            return events;
        }
    }
}
</script>

<style scoped>
.calendar {
    height: min(92vh, calc(100vh - 50px));
    width: 90%;
}

.calendarContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.dateButtons {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

.dateButton {
    font-size: large;
    padding: .5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    border-radius: 100vh;
    background-color: #ffffff26;
    backdrop-filter: blur(5px);
    text-align: center;
    color: #fff;
    transition: 0.3s;
    border: none;
    cursor: pointer;
}

.dateButton:hover {
    box-shadow: 0 0 15px 5px rgb(255, 255, 255, 0.5);
}

.dateColumn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
