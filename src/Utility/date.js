export function getTimeFormat(date){
    let hour = 0;
    let minute = 0;

    if(date.getHours() < 10) hour = `0${date.getHours()}`;
    else hour = date.getHours();

    if(date.getMinutes() < 10) minute = `0${date.getMinutes()}`;
    else minute = date.getMinutes();

    return `${hour}:${minute}`;
}

export function getDateFormat(date){
    const today = new Date();
    if(today === date){
        
    }

    let day = 0;
    let month = getMonthName(date);

    if(date.getDate() < 10) day = `0${date.getDate()}`;
    else day = date.getDate();

    return `${day} ${month}`;
}

const getMonthName = (date) => {
    switch(date.getMonth()) {
        case 0:
            return 'Jan'
        case 1:
            return 'Feb'
        case 2:
            return 'Mar'
        case 3:
            return 'Apr'
        case 4:
            return 'May'
        case 5:
            return 'Jun'
        case 6:
            return 'Jul'
        case 7:
            return 'Aug'
        case 8:
            return 'Sep'
        case 9:
            return 'Oct'
        case 10:
            return 'Nov'
        case 11:
            return 'Dec'
        default:
            return 'No_Month'
    }
}