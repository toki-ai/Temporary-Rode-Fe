export const formatUserName = (firstName, lastName) => {
    return [firstName, lastName].join(' ');
};

export const DateFormatS = (props) => {
    var date = new Date(props);
    var hour = date.getUTCHours();
    var minute = date.getUTCMinutes();
    var day = date.getUTCDate();
    var month = date.getUTCMonth() + 1;
    var year = date.getUTCFullYear();
    var second = date.getUTCSeconds();
    if (month < 10) month = '0' + month;
    if (day < 10) day = '0' + day;
    var newDate = day + '/' + month + '/' + year;
    return newDate;
};
