
jQuery.get('https://reservation.affluences.com/api/reservations/ical?resource_id=23218&days=0', function(data) {

    var jcalData = ICAL.parse(data);
    var vcalendar = new ICAL.Component(jcalData);
    var name = vcalendar.getFirstPropertyValue('name');
    var vevents = vcalendar.getAllSubcomponents('vevent');
    var start_times = []
    var end_times = []
    vevents.forEach(vevent => {
        var start_time = vevent.getFirstPropertyValue('dtstart')
        var end_time = vevent.getFirstPropertyValue('dtend')
        start_time = Date.parse(start_time)
        end_time = Date.parse(end_time)
        start_times.push(start_time)
        end_times.push(end_time)
    });
    $("#Salle1").calendar(
        {
            view:"day",
            events_source: function(){
                events = []
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

    document.getElementById("Salle1").getElementsByClassName("text-center")[0].textContent = name

});



