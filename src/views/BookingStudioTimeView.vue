<script setup>
</script>
<template>
    <div class="pageTopMargin">
        <br />
        <div class="calendarContainer">
            <div class="buttonRow">
                <div class="calendarNavButton jumpToButton">
                    Jump to:
                    <div>
                        <input type="date" @change="jumpToDate" :min="getActualDate()">
                    </div>
                </div>
            </div>
            <div v-if="loadingCalendar" class="loadingDiv">
                <div class="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    LOADING
                </div>
            </div>
            <div class="calendar">
                <div class="dayTimeCorner"></div>
                <div class="day" v-for="day of weekArray"><span class="dayOfWeek">{{ day.dayOfWeek }}</span><span
                        class="dateString">{{ day.displayDate }}</span></div>
                <template v-for="time of timeArray">
                    <div class="time">{{ time }}</div>
                    <template v-for="day of weekArray">
                        <div :class="(day['events'][time] || day['events']['allDay']) ? 'event' : 'empty'">
                            <p v-if="day['events'][time] || day['events']['allDay']">UNAVAILABLE</p>
                        </div>
                    </template>
                </template>
            </div>
        </div>
        <div class="mobileCalendarContainer">
            <div class="buttonRow">
                <div class="calendarNavButton jumpToButton">Jump to: <input type="date" @change="jumpToDate" :min="getActualDate()"></div>
            </div>
            <div v-if="loadingCalendar" class="loadingDiv">
                <div class="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    LOADING
                </div>
            </div>
            <div class="buttonRow">
                <button class="calendarDateButton" :class="{ 'selectedDate': selectedDay === day }"
                    v-for="day of weekArray" @click="selectDay(day)">
                    <span class="dayOfWeek">{{ day.dayOfWeekShort }}</span>
                    <span class="dateString">{{ day.displayDateShort }}</span>
                </button>
            </div>
            <div class="fullDateString">{{ selectedDay.fullDateString }}</div>
            <div class="calendar">
                <template v-for="time of timeArray">
                    <div class="time">{{ time }}</div>
                    <div :class="(selectedDay['events'][time] || selectedDay['events']['allDay']) ? 'event' : 'empty'">
                        <p v-if="selectedDay['events'][time] || selectedDay['events']['allDay']">UNAVAILABLE</p>
                        <p v-else>AVAILABLE</p>
                    </div>
                </template>
            </div>
        </div>
        <br />
    </div>
</template>

<script>
export default {
    data() {
        return {
            weekArray: [],
            googleCalendarApiKey: import.meta.env.VITE_GOOGLE_CALENDAR_API,
            currentDate: new Date(),
            timeArray: [
                "9:00 AM", "10:00 AM", "11:00 AM",
                "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
                "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"
            ],
            selectedDay: { 'events': {} },
            previouslyFetchedCalendarData: {},
            currentWeekIsShowing: true,
            loadingCalendar: true
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

            const startDate = new Date(weekDatesArray[0].objectDate).toISOString();
            const endDate = new Date(new Date(weekDatesArray[weekDatesArray.length - 1].objectDate).setUTCHours(23, 59, 0, 0)).toISOString();

            return await fetch("https://www.googleapis.com/calendar/v3/calendars/cbb1d97352021b378ad48b9577deebdd5c4cca30cdbf5bd008f1f5687d4e8cd1@group.calendar.google.com/events?key=" + this.googleCalendarApiKey + "&timeMin=" + startDate + "&timeMax=" + endDate, requestOptions)
                .then((response) => response.text())
                .then((result) => { return JSON.parse(result) })
                .catch((error) => console.error(error));
        },
        getActualDate() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');

            return `${year}-${month}-${day}`;
        },
        async getWeek() {
            this.loadingCalendar = true;
            let currentDayIndex = -(this.currentDate.getDay());
            let weekDatesArray = [];
            let theCurrentWeekIsSelected = false;

            for (let i = 0; i < 7; i++) {
                let tempDate = new Date(this.currentDate);
                tempDate.setDate(this.currentDate.getDate() + currentDayIndex);

                let month = tempDate.getMonth() + 1;
                let day = tempDate.getDate();
                let year = tempDate.getFullYear();
                let dayOfWeek = this.getDayOfWeek(tempDate);

                weekDatesArray.push({
                    dayOfWeek: dayOfWeek,
                    dayOfWeekShort: dayOfWeek.charAt(0),
                    displayDate: `${month}/${day}/${year}`,
                    displayDateShort: day,
                    objectDate: new Date(`${year}-${month}-${day}`).toISOString().split('T')[0],
                    events: {},
                    fullDateString: tempDate.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }),
                })

                if (currentDayIndex === 0) this.selectedDay = weekDatesArray[i];

                if (weekDatesArray[i].displayDate === new Date().toLocaleDateString()) theCurrentWeekIsSelected = true;

                currentDayIndex++;
            }

            this.currentWeekIsShowing = theCurrentWeekIsSelected;

            let calendarEvents;
            if (this.previouslyFetchedCalendarData[weekDatesArray[0].objectDate + weekDatesArray[weekDatesArray.length - 1].objectDate]) {
                calendarEvents = this.previouslyFetchedCalendarData[weekDatesArray[0].objectDate + weekDatesArray[weekDatesArray.length - 1].objectDate]
            } else {
                calendarEvents = await this.getCalendarEvents(weekDatesArray);
                this.previouslyFetchedCalendarData[weekDatesArray[0].objectDate + weekDatesArray[weekDatesArray.length - 1].objectDate] = calendarEvents;
            }

            const formattedCalendarEvents = this.formatCalendarEvents(calendarEvents);

            if (formattedCalendarEvents) {
                for (let i = 0; i < weekDatesArray.length; i++) {
                    if (formattedCalendarEvents[weekDatesArray[i]['objectDate']]) weekDatesArray[i]['events'] = (formattedCalendarEvents[weekDatesArray[i]['objectDate']]);
                }
            }

            this.weekArray = weekDatesArray;
            this.loadingCalendar = false;
        },
        getPrevWeek() {
            this.currentDate.setDate(this.currentDate.getDate() - 7);
            this.getWeek()
        },
        getNextWeek() {
            this.currentDate.setDate(this.currentDate.getDate() + 7);
            this.getWeek()
        },
        jumpToDate(dateEvent) {
            if (!dateEvent.target.value) return;
            this.currentDate = new Date(dateEvent.target.value.replaceAll('-', '/'));
            this.getWeek();
        },
        goToToday() {
            this.currentDate = new Date();
            this.getWeek();
        },
        formatCalendarEvents(calendarEvents) {
            const events = {};
            if (!calendarEvents) return null;
            for (const event of calendarEvents.items) {
                if (event.start.date) {
                    const dateRanges = this.getDateRangesWithTime(event.start.date, event.end.date, false);
                    for (const dateRange of dateRanges) {
                        const date = this.extractDate(dateRange.start);
                        if (!events[date]) events[date] = {};
                        const hoursBetween = this.getHoursBetween(dateRange.start, dateRange.end);
                        for (const time of hoursBetween) {
                            events[date][time] = true;
                        }
                    }
                } else if (event.start.dateTime) {
                    const dateRanges = this.getDateRangesWithTime(event.start.dateTime, event.end.dateTime, true);
                    for (const dateRange of dateRanges) {
                        const date = this.extractDate(dateRange.start);
                        if (!events[date]) events[date] = {};
                        const hoursBetween = this.getHoursBetween(dateRange.start, dateRange.end);
                        for (const time of hoursBetween) {
                            events[date][time] = true;
                        }
                    }
                }
            }

            return events;
        },
        isSameDateDifferentTime(startDate, endDate) {
            let start = new Date(startDate);
            let end = new Date(endDate);

            return start.getUTCFullYear() === end.getUTCFullYear() &&
                start.getUTCMonth() === end.getUTCMonth() &&
                start.getUTCDate() === end.getUTCDate() &&
                (
                    start.getUTCHours() !== end.getUTCHours() ||
                    start.getUTCMinutes() !== end.getUTCMinutes() ||
                    start.getUTCSeconds() !== end.getUTCSeconds()
                );
        },
        getDateRangesWithTime(startDate, endDate, offSetTimeZone) {
            let tzoffset = 0;
            if (offSetTimeZone) tzoffset = parseInt(startDate.split('T')[1].split('-')[1].split('-')[0]) * 60 * 60000;
            const dateRanges = [];

            if (this.isSameDateDifferentTime(startDate, endDate)) {
                dateRanges.push({
                    start: new Date(new Date(startDate) - tzoffset).toISOString(),
                    end: new Date(new Date(endDate) - tzoffset).toISOString()
                });
                return dateRanges;
            }

            let currentDate = new Date(new Date(startDate) - tzoffset);
            let endDateObj = new Date(new Date(endDate) - tzoffset);

            if (startDate) {
                dateRanges.push({
                    start: currentDate.toISOString(),
                    end: new Date(currentDate.setUTCHours(23, 59, 0, 0)).toISOString()
                });
            }

            currentDate.setDate(currentDate.getDate() + 1);
            currentDate.setUTCHours(0, 0, 0, 0);

            while (currentDate < new Date(endDate).setUTCHours(0, 0, 0, 0)) {
                dateRanges.push({
                    start: currentDate.toISOString(),
                    end: new Date(currentDate.setUTCHours(23, 59, 0, 0)).toISOString()
                });

                currentDate.setDate(currentDate.getDate() + 1);
                currentDate.setUTCHours(0, 0, 0, 0);
            }

            if (new Date(endDateObj.setUTCHours(0, 0, 0, 0)).toISOString() === endDateObj.toISOString()) return dateRanges;

            dateRanges.push({
                start: new Date(endDateObj.setUTCHours(0, 0, 0, 0)).toISOString(),
                end: endDateObj.toISOString()
            });

            return dateRanges;
        },
        extract24HourTime(dateTimeString) {
            const timePart = dateTimeString.split("T")[1].split("-")[0];
            const [hours, minutes] = timePart.split(":");
            return `${hours}:${minutes}`;
        },
        extractDate(dateTimeString) {
            const match = dateTimeString.match(/^(\d{4}-\d{2}-\d{2})/);
            return match ? match[1] : null;
        },
        getDayOfWeek(date) {
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return daysOfWeek[date.getDay()];
        },
        selectDay(dayObject) {
            this.selectedDay = dayObject;
        },
        getHoursBetween(startTime, endTime) {
            const start = parseInt(this.extract24HourTime(startTime).split(':')[0]);
            let end = parseInt(this.extract24HourTime(endTime).split(':')[0]);
            if (end === 0) end = 24;
            const result = [];
            for (let i = start; i <= end; i++) {
                if (i === 24) result.push(this.convertTo12Hour(0));
                else result.push(this.convertTo12Hour(i));
            }
            return result;
        },
        convertTo12Hour(hour24) {
            const period = hour24 >= 12 ? "PM" : "AM";
            const hour12 = hour24 % 12 || 12;
            return `${hour12}:00 ${period}`;
        }
    },
}
</script>

<style scoped>
.loadingDiv {
    text-align: center;
    font-size: large;
}

.lds-ring {
    /* change color here */
    color: rgba(144, 103, 154, 1);
}

.lds-ring,
.lds-ring div {
    box-sizing: border-box;
}

.lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid currentColor;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: currentColor transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
}

@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.mobileCalendarContainer {
    display: none;
}

.calendarContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.calendarNavButton {
    font-size: large;
    padding: .5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100vh;
    background-color: #ffffff26;
    backdrop-filter: blur(5px);
    text-align: center;
    color: #fff;
    transition: 0.3s;
    border: none;
    cursor: pointer;
    width: 15%;
}

.jumpToButton {
    flex-direction: column;
    cursor: auto;
}

.jumpToButton:hover {
    box-shadow: none !important;
}

.calendarNavButton.hidden {
    visibility: hidden;
}

.buttonRow {
    display: flex;
    width: 90%;
    justify-content: center;
    margin-bottom: 2%;
}

.calendarNavButton:hover {
    box-shadow: 0 0 15px 5px rgb(255, 255, 255, 0.5);
}

.dateColumn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px black solid
}

.calendar {
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    /* Time column + 7 days */
    grid-template-rows: auto repeat(10, 1fr);
    /* 10 time slots */
    width: 90%;
    border: #ffffff15 solid 1px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #ffffff15;
    backdrop-filter: blur(5px);
}

.calendar div {
    padding: 10px;
}

.time {
    text-align: center;
    font-size: large;
    border-top: #ffffff33 solid 1px;
}

.day {
    text-align: center;
    border-left: #ffffff33 solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.dayOfWeek {
    font-size: x-large;
}

.dateString {
    font-size: large;
    color: lightgray;
}

.event {
    background-color: rgba(144, 103, 154, 1);
    border-left: #ffffff33 solid 1px;
    text-align: center;
}

.empty {
    border-left: #ffffff33 solid 1px;
    border-top: #ffffff33 solid 1px;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    .jumpToButton {
        width: 100%;
        gap: 1vh;
    }

    .calendarContainer {
        display: none;
    }

    .calendarNavButton {
        display: flex;
        flex-direction: column;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 2%;
        padding-bottom: 2%;
    }

    .calendarDateButton {
        font-size: large;
        padding: 2%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 100vh;
        background-color: #ffffff26;
        backdrop-filter: blur(5px);
        text-align: center;
        color: #fff;
        transition: 0.3s;
        border: none;
        cursor: pointer;
        width: 15%;
        margin-left: 1%;
        margin-right: 1%;
    }

    .mobileCalendarContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .buttonRow {
        width: 95%
    }

    .calendar {
        grid-template-columns: auto repeat(1, 1fr);
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
    }

    .time {
        border-bottom: #ffffff33 solid 1px;
        border-top: none;
    }

    .empty {
        border-bottom: #ffffff33 solid 1px;
        border-top: none;
    }

    .calendarNavButton:hover {
        box-shadow: none;
    }

    .fullDateString {
        font-size: large;
        padding-bottom: 1%;
    }

    .selectedDate {
        background-color: rgba(144, 103, 154, 1);
    }
}
</style>
