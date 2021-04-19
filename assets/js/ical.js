 // #############
 // # Functions #
 // #############

/**
 * @author Thomas Boeglin
 * @description This function will create a calendar in the specified html room tag from the ressource_id provided
 *
 * @resource_id The ressource_id from the Affluences API
 * @room the id of the room tag in the HTML code
 */
function getReservations(resource_id,room){
    // Gathering informations from the afflences API using the ressource_id
    jQuery.get("https://reservation.affluences.com/api/reservations/ical?resource_id="+resource_id+"&days=0", function(data) {

        // Parsing data with the ical.js library
        var jcalData = ICAL.parse(data);
        var vcalendar = new ICAL.Component(jcalData);
        var name = vcalendar.getFirstPropertyValue("name");
        var vevents = vcalendar.getAllSubcomponents("vevent");
        var start_times = []
        var end_times = []
        vevents.forEach(vevent => {
            var start_time = vevent.getFirstPropertyValue("dtstart")
            var end_time = vevent.getFirstPropertyValue("dtend")

            start_time = Date.parse(start_time)
            end_time = Date.parse(end_time)
            start_times.push(start_time)
            end_times.push(end_time)
        });
        /*
        * From here, we get all the starts and ends of events and the name of the room
        * We can create our calendar
        */
        $("#".concat(room)).calendar(
            {
                view:"day",
                events_source: function(){
                    var events = []
                    start_times.forEach(time =>
                        events.push(
                        {
                            "title": "Réservé",
                            "class": "event-important",
                            "start": time, // Milliseconds
                            "end": end_times[start_times.indexOf(time)] // Milliseconds
                        })
                    )
                    return events}
            });
        /*
        * The calendar is now created we will rename the name of the room on top of the calendar
        */
        document.getElementById(room).getElementsByClassName("text-center")[0].textContent = name

    });
}

 // ############################
 // # Main program starts here #
 // ############################

/*
* We loop on all rooms and ids provided in the rooms.js file
*/
data.forEach(room => {
    getReservations(room["resource_id"],room["name"])
});
/*
* We initialize the hours "calendar", it will display on the left of the rooms
*/
var hours = $("#Hours").calendar(
    {
        view: "hour",
        events_source: function () { return []; }
    });
