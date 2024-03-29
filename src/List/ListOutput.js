import React, {useState, useContext} from "react";
import { View,Text, StyleSheet, FlatList, Pressable } from "react-native";

import ListItem from "./ListItem";
import { getTimeFormat } from "../Utility/date";

import { AccountContext } from "../store/account-context";

import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListOutput({date}) {
    const accountCtx = useContext(AccountContext);

    const [expand, setExpand] = useState(false); //Don't forget set true

    // let expand = true; //Don't forget set true

    return (
        <View style={{margin: 15}}>
            <View style={listStyles.header}>
                {!expand&&(
                    <View style={listStyles.fold}>
                        <FlatList
                            horizontal
                            data={accountCtx.toDoList}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                    <ListItem catagory={item.category} expand={expand} />
                                </View>
                            )}
                        />
                        <Pressable onPress={() => setExpand(true)}>
                            <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={24} color="white" />
                        </Pressable>
                        <View style={{marginBottom: 15}} />
                    </View>
                )}

                <View style={listStyles.date}>
                    <Text style={{fontSize: 20, color: 'white'}}>{date}</Text>
                </View>

                {expand&&(
                    <Pressable style={listStyles.arrow} onPress={() => setExpand(false)}>
                        <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={26} color="white" />
                    </Pressable>
                )}
            </View>

            {expand&&(
                <View style={listStyles.content}>
                    <FlatList
                        data={accountCtx.toDoList}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ListItem title={item.title} date={getTimeFormat(item.date)} catagory={item.category} check={item.check} id={item.id} expand={expand}/>
                        )}
                    />
                    <View style={{marginBottom: 15}} />
                </View>
            )}
        </View>
    );
}

const listStyles = StyleSheet.create({
    header: {
        flexDirection: 'row'
    },
    arrow: {
        justifyContent: 'center',
        marginLeft: 240
    },
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
    },
    fold: {
        backgroundColor: '#645490',
        position: 'absolute',
        width: 270,
        height: 24,
        alignSelf: 'flex-end',
        marginLeft: 92,
        flexDirection: 'row',
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        paddingLeft: 2,
    }
});

export default ListOutput;