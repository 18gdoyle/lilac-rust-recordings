<script setup>
</script>
<template>
    <div class="pageTopMargin">
        <div class="calendarContainer">
            <div v-for="day of weekArray">
                <button type="button">{{ day }}</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            weekArray: []
        }
    },
    async mounted() {
        this.getCurrentWeek();
        
    },
    methods: {
        async getCalendarEvents(weekDatesArray) {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            const startDate = new Date(weekDatesArray[0]).toISOString();
            const endDate = new Date(weekDatesArray[weekDatesArray.length - 1]).toISOString();

            return await fetch("https://www.googleapis.com/calendar/v3/calendars/cbb1d97352021b378ad48b9577deebdd5c4cca30cdbf5bd008f1f5687d4e8cd1@group.calendar.google.com/events?key=AIzaSyD7R84ZcAaY1-CZeUqWk2JrVv8dqwlxfus&timeMin=" + startDate + "&timeMax=" + endDate, requestOptions)
                .then((response) => response.text())
                .then((result) => {return JSON.parse(result)})
                .catch((error) => console.error(error));
        },
        async getCurrentWeek() {
            let today = new Date();
            let currentDayIndex = -(today.getDay());
            const weekDatesArray = [];

            for (let i = 0; i < 7; i++) {
                let currentDate = new Date();
                currentDate.setDate(today.getDate() + currentDayIndex);

                let month = currentDate.getMonth() + 1;
                let day = currentDate.getDate();
                let year = currentDate.getFullYear();

                weekDatesArray.push(`${month}/${day}/${year}`);
                this.weekArray.push(`${month}/${day}/${year}`);
                currentDayIndex++;
            }
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
}
</style>
