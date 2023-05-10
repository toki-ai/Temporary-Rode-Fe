const DateFormatS = (props) => {
    var date = new Date(props);
    var hour = date.getUTCHours();
    var minute = date.getUTCMinutes();
    var day = date.getUTCDate();
    var month = date.getUTCMonth() + 1;
    var year = date.getUTCFullYear();
    var second = date.getUTCSeconds();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    var newDate = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;
    return newDate;
};
export default DateFormatS;
