<script setup>
// import DayServices from "@/components/views/DayServices.vue";
</script>
<template>
    <div id="services-table-div">
        <table id="services-table">
            <tr>
                <td>Time</td>
                <td>Sunday</td>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
                <td>Saturday</td>
            </tr>
            <tr>
                <td>6.00 AM -<br> 7.00 AM</td>
                <td></td>
                <td title="Occurs At Moi University Main Altar">Morning Prayers</td>
                <td title="Occurs At Moi University Main Altar">Morning Prayers</td>
                <td title="Occurs At Moi University Main Altar">Morning Prayers</td>
                <td title="Occurs At Moi University Main Altar">Morning Prayers</td>
                <td title="Occurs At Moi University Main Altar">Morning Prayers</td>
                <td title="Occurs At Moi University Main Altar">Morning Prayers</td>
            </tr>
            <tr>
                <td>7.00 AM -<br> 9.00 AM</td>
                <td title="Occurs At Moi University Main Altar">Prayer Service</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>9.00 AM -<br> 12.00 NOON</td>
                <td title="Occurs At Moi University Main Altar">Worship Service</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>12.00 NOON -<br> 2.00 PM</td>
                <td title="Occurs At Moi University Main Altar">Main Service</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>1.00 PM -<br> 2.00 PM</td>
                <td></td>
                <td title="Occurs At Talai Stage">Lunch Hour</td>
                <td title="Occurs At Talai Stage">Lunch Hour</td>
                <td title="Occurs At Talai Stage">Lunch Hour</td>
                <td title="Occurs At Talai Stage">Lunch Hour</td>
                <td title="Occurs At Talai Stage">Lunch Hour</td>
                <td></td>
            </tr>
            <tr>
                <td>4.00 PM -<br> 6.00 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td title="Occurs At A Member's Home">Home Fellowship</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>6.00 PM -<br> 7.00 AM</td>
                <td></td>
                <td title="Occurs At Moi University Main Altar">Prayers</td>
                <td></td>
                <td title="Occurs At Moi University Main Altar">Prayers</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>7.00 PM -<br> 8.30 PM</td>
                <td></td>
                <td></td>
                <td title="Occurs At NCT8">Students Fellowship</td>
                <td></td>
                <td title="Occurs At Moi University Main Altar">Students Fellowship</td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>
    <div id="services-details">
        <DayServices :events="sundayEvents" day="Sunday"></DayServices>
        <DayServices :events="mondayEvents" day="Monday"></DayServices>
        <DayServices :events="tuesdayEvents" day="Tuesday"></DayServices>
        <DayServices :events="wednesdayEvents" day="Wednesday"></DayServices>
        <DayServices :events="thursdayEvents" day="Thursday"></DayServices>
        <DayServices :events="fridayEvents" day="Friday"></DayServices>
        <DayServices :events="saturdayEvents" day="Saturday"></DayServices>
    </div>
</template>

<script>
import DayServices from "@/components/views/DayServices.vue";
export default {
    name: "ServicesScreen",
    components: {
        DayServices
    },
    data() {
        return {
            sundayEvents: [
                {
                    time: "7.00 AM - 9.00AM",
                    details: "Prayers Service",
                    location: "Moi University Main Altar"
                },
                {
                    time: "9.00 AM - 12.00 NOON",
                    details: "Worship Service",
                    location: "Moi University Main Altar"
                },
                {
                    time: "12.00 NOON - 2.00PM",
                    details: "Teaching Service",
                    location: "Moi University Main Altar"
                }
            ],
            mondayEvents: [
                {
                    time: "6.00 AM - 7.00 AM",
                    details: "Morning Prayers",
                    location: "Moi University Main Altar"
                },
                {
                    time: "1:00 PM - 2.00 PM",
                    details: "Lunch Hour Service",
                    location: "Talai Stage"
                },
                {
                    time: "6:00 PM - 7.00 PM",
                    details: "Prayers",
                    location: "Moi University Main Altar"
                }
            ],
            tuesdayEvents: [
                {
                    time: "6.00 AM - 7.00 AM",
                    details: "Morning Prayers",
                    location: "Moi University Main Altar"
                },
                {
                    time: "1:00 PM - 2.00 PM",
                    details: "Lunch Hour Service",
                    location: "Talai Stage"
                },
                {
                    time: "7:00 PM - 8.30 PM",
                    details: "Students Fellowship",
                    location: "NCT8"
                }
            ],
            wednesdayEvents: [
                {
                    time: "6.00 AM - 7.00 AM",
                    details: "Morning Prayers",
                    location: "Moi University Main Altar"
                },
                {
                    time: "1:00 PM - 2.00 PM",
                    details: "Lunch Hour Service",
                    location: "Talai Stage"
                },
                {
                    time: "4:00 PM - 6.00 PM",
                    details: "Home stead Fellowship",
                    location: "Community Member House"
                },
                {
                    time: "6.00 AM - 7.00 AM",
                    details: "Prayers",
                    location: "Moi University Main Altar"
                }
            ],
            thursdayEvents: [
                {
                    time: "6.00 AM - 7.00 AM",
                    details: "Morning Prayers",
                    location: "Moi University Main Altar"
                },
                {
                    time: "1:00 PM - 2.00 PM",
                    details: "Lunch Hour Service",
                    location: "Talai Stage"
                },
                {
                    time: "7:00 PM - 8.30 PM",
                    details: "Students Fellowship",
                    location: "Moi University Main Altar"
                }
            ],
            fridayEvents: [
                {
                    time: "6.00 AM - 7.00 AM",
                    details: "Morning Prayers",
                    location: "Moi University Main Altar"
                },
                {
                    time: "1:00 PM - 2.00 PM",
                    details: "Lunch Hour Service",
                    location: "Talai Stage"
                }
            ],
            saturdayEvents: [
                {
                    time: "12.00 NOON - 17.00 PM",
                    details: "Crusade",
                    location: "To Be Determined Per Week"
                }
            ],
        };
    }
}
</script>

<style scoped>
#services-table-div {

}

#services-table {
    height: 100px;
    background: var(--color-background-nav);
    padding: 10px;
    margin: 10px;
    border-radius: 15px;
    empty-cells: hide;
}

#services-table td {
    padding: 5px;
    text-align: center;
    border: 1px solid var(--color-text);
    background: var(--color-background-nav);
    border-radius: 5px;
    transition: border-radius 0.25s ease-in-out, transform 0.25s ease-in-out, z-index 0.25s ease-in-out, border-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;
}

#services-table td:hover {
    cursor: pointer;
    transform: scale(1.2);
    z-index: 1;
    border-radius: 15px;
    box-shadow: 0 5px 5px var(--color-border-hover);
}

#services-table tr:first-child td{
    font-weight: bold;
    color: orange;
    border: 1px solid transparent;
}

#services-table tr:first-child td:hover{
    font-weight: bold;
    border: 1px solid var(--color-text);
    color: orange;
}

#services-table td:first-child {
    color: green;
    font-weight: bold;
}

#services-details {

}
</style>