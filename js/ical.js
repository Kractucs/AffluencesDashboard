function Get_reservations(resource_id,salle){
    jQuery.get('https://reservation.affluences.com/api/reservations/ical?resource_id='+resource_id+'&days=0', function(data) {

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
        $("#".concat(salle)).calendar(
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

        document.getElementById(salle).getElementsByClassName("text-center")[0].textContent = name

    });
}


Get_reservations(23218,"Salle1")
Get_reservations(23215,"Salle2")
Get_reservations(23216,"Salle3")
Get_reservations(23217,"Salle4")
Get_reservations(23214,"Salle5")
Get_reservations(23219,"Salle6")
Get_reservations(23220,"Salle7")
Get_reservations(23221,"Salle8")
Get_reservations(23222,"Salle9")
Get_reservations(23223,"Salle10")
var hours = $("#Hours").calendar(
    {
        view: 'hour',
        events_source: function () { return []; }
    });