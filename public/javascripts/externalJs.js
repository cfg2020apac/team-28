$(document).ready(function () {
    // checklogin()
    populateEventList();
    // logmain()
});

function populateEventList(){

    // Empty content string
    var eventlist='<table> <tr><th>EventName</th><th>Start Date</th><th>End Date</th><th>Min age</th><th>NGO</th><th>Descriptions</th></tr>';
// jQuery AJAX call for JSON

    $.getJSON('/maincontent',function(data) {
        $.each(data, function () {
            var startdate=new Date(this.startdate);
            var enddate=new Date(this.enddate);
                eventlist+='<tr><td >'+'<span data="'+this.eventname+'">'+startdate+'</span></td><td>'+enddate+'+</td><td>'+this.agemin+'</td><td>'+this.owner
                    +'</td><td>'+this.description+'</td><td>';
        });
        eventlist+='</table>'


    });
    $('#eventlist').html(eventlist);





};
