import React, {useState, useContext} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { AccountContext } from "../store/account-context";
import ListOutput from "./ListOutput";

import { getDateFormat } from "../Utility/date";

function ListDate() {
    const accountCtx = useContext(AccountContext);

    const date = accountCtx.toDoList[0].date;
    console.log(date);

    return (
        <View>
            <ListOutput date={getDateFormat(date)}/>
        </View>
    );

}

const styles = StyleSheet.create({});

export default ListDate;