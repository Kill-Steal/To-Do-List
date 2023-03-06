export function getTimeFormat(date){
    let hour = 0;
    let minute = 0;

    if(date.getHours() < 10)  hour = `0${date.getHours()}`;
    else hour = date.getHours();

    if(date.getMinutes() < 10) minute = `0${date.getMinutes()}`;
    else minute = date.getMinutes();

    return `${hour}:${minute}`;
}