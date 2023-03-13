//first
import React, {useState, useContext} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { AccountContext } from "../store/account-context";
import ListOutput from "./ListOutput";
import { ListFilter } from "./ListFilter";

import { getFullDate, getDateFormat, removeSameDate } from "../Utility/date";

function ListDate({isHome, darkMode}) {
    const accountCtx = useContext(AccountContext);

    const sortedToDoList = accountCtx.toDoList.sort((p1, p2) => (p1.date < p2.date) ? -1 : (p1.date > p2.date) ? 1 : 0);    

    dateList = removeSameDate(sortedToDoList);

    const filterList = ListFilter(dateList, 0, isHome);

    return (
        <FlatList
            data={filterList}
            keyExtractor={(item) => item}
            renderItem={({item}) => (
                <ListOutput date={item} sortedData={sortedToDoList} isHome={isHome} darkMode={darkMode}/>
            )}
        />
    );

}

const styles = StyleSheet.create({});

export default ListDate;