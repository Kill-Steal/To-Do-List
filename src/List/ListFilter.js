import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { getDateMinusDays, getFullDate } from "../Utility/date";

export function ListFilter(list, days){
    const filterDate = [];
    const showDate = getDateMinusDays(getFullDate(new Date()), days);

    for(i = 0; i < list.length; i++){
        let inRange = true;
        if(list[i].getTime() < showDate.getTime()){
            inRange = false;
        }
        if(inRange === true) filterDate.push(list[i]);
    }
    return filterDate;
}