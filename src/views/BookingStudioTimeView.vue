<script setup>
</script>
<template>
    <div class="pageTopMargin">
        <div class="calendarContainer">
            <button type="button" @click="goToToday">Go To Today</button>
            <div class="dateButtons">
                <button type="button" @click="getPrevWeek"><i class="fa-solid fa-arrow-left"></i></button>
                <button v-for="day of weekArray" type="button">{{ day }}</button>
                <button type="button" @click="getNextWeek"><i class="fa-solid fa-arrow-right"></i></button>
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
                .then((result) => {return JSON.parse(result)})
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

                weekDatesArray.push(`${month}/${day}/${year}`);
                currentDayIndex++;
            }

            this.weekArray = weekDatesArray;

            //console.dir(await this.getCalendarEvents(weekDatesArray));
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
}
</style>
