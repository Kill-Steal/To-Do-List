export function getFullDate(date){
    const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return currentDate;
}

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

    if(today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && today.getDate() === date.getDate()){
        return 'TODAY';
    }
    else{
        let day = 0;
        let month = getMonthName(date);

        if(date.getDate() < 10) day = `0${date.getDate()}`;
        else day = date.getDate();

        return `${day} ${month}`;
    }
}

export function getListCurrentDate(list, date) {
    // const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const currentDate = getFullDate(date);

    const listCurrentDate = [];
    
    for(i = 0; i < list.length; i++){
        // const listDate = new Date(list[i].date.getFullYear(), list[i].date.getMonth(), list[i].date.getDate());
        const listDate = getFullDate(list[i].date)
        if(listDate.getTime() === currentDate.getTime())
            listCurrentDate.push(list[i]);
    }

    return listCurrentDate;
}

//Get Month Short Name
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

export function removeSameDate(sortedToDoList) {
    const date = sortedToDoList;

    const newDateList = [];

    for(i = 0; i < date.length; i++){
        let notHave = true;
        const currentDate = getFullDate(date[i].date);
        for(j = 0; j < newDateList.length; j++) {
            if(currentDate.getTime() === newDateList[j].getTime()) notHave = false;
        }
        if(notHave === true) newDateList.push(currentDate);
    }
    return newDateList;
}

export function getDateMinusDays(date, days){
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}