Function getLocalTime(inputDate){
 var date = convertUTCDateToLocalDate(new Date(inputDate));
 var date = new Date(date);
 month = date.getMonth()+1;
 current_date = date.getDate();
 hours = date.getHours();
 minutes = date.getMinutes();
 seconds = date.getSeconds();
 date = (month<10 ? "0" + month : month) + '-' + (current_date<10 ? "0" + current_date : current_date) + '-' +  date.getFullYear() + ' ' + (hours<10 ? "0" + hours : hours)+':' + (minutes<10 ? "0" + minutes : minutes)+':'+(seconds<10 ? "0" + seconds : seconds);
 return date;

}


function convertUTCDateTimeToLocalDateTime(date) {
        var newDate = new Date(date.getTime()+(date.getTimezoneOffset()*60*1000));
        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var extraHour = Math.round(minutes / 60)
        newDate.setHours(hours - offset+extraHour);

        return newDate;   
}
