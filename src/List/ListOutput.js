import React, {useContext} from "react";
import { View,Text, StyleSheet, FlatList } from "react-native";

import ListItem from "./ListItem";
import { getTimeFormat } from "../Utility/date";

import { AccountContext } from "../store/account-context";

function ListOutput() {
    const accountCtx = useContext(AccountContext)

    return (
        <View style={{margin: 15}}>
            <View style={listStyles.date}>
                <Text style={{fontSize: 20, color: 'white'}}>TODAY</Text>
            </View>
            <View style={listStyles.content}>
                <FlatList
                    data={accountCtx.toDoList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ListItem title={item.title} date={getTimeFormat(item.date)} catagory={item.category} check={item.check} id={item.id}/>
                    )}
                />
                <View style={{marginBottom: 15}} />
            </View>
        </View>
    );
}

const listStyles = StyleSheet.create({
    date: {
        width: 95,
        height: 35,
        backgroundColor: '#1f8a70',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 20
    },
    content: {
        width: 365,
        backgroundColor: '#E3DFFD',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
    }
});

export default ListOutput;