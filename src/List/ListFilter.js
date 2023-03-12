import { getDateMinusDays, getFullDate } from "../Utility/date";

export function ListFilter(list, days, isHome){
    const today = getFullDate(new Date())
    const filterDate = [];

    if(isHome){
        for(i = 0; i < list.length; i++){
            let inRange = true;
            if(list[i].getTime() < today.getTime()){
                inRange = false;
            }
            if(inRange === true) filterDate.push(list[i]);
        }
    }else {
        for(i = 0; i < list.length; i++){
            let inRange = true;
            if(list[i].getTime() >= today.getTime()){
                inRange = false;
            }
            if(inRange === true) filterDate.push(list[i]);
        }
    }
    return filterDate;
}