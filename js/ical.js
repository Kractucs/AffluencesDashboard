
jQuery.get('https://reservation.affluences.com/api/reservations/ical?resource_id=23218&days=0', function(data) {

    console.log(data)
    var jcalData = ICAL.parse(data);
    var vcalendar = new ICAL.Component(jcalData);
    var vevents = vcalendar.getAllSubcomponents('vevent');
    vevents.forEach(vevent => {
        var summary = vevent.getFirstPropertyValue('summary');
        var start_time = vevent.getFirstPropertyValue('dtstart')
        var end_time = vevent.getFirstPropertyValue('dtend')

        console.log('Summary: ' + summary + " -> From : " + start_time + " To :" + end_time);
    });
});