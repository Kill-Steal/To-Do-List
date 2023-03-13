import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons';

import ListDate from "../List/ListDate";

function ActivityScreen({navigation, route}) {
    const {id} = route.params;
    const {darkMode} = route.params;

    return (
        <View style={[darkMode ? {backgroundColor: '#383D56'} : {backgroundColor: '#E3DFFD'} , styles.container]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home', {
                    id: id,
                })} >
                    <Ionicons name="chevron-back" size={55} color="#ecf2ff" />
                </TouchableOpacity>
                <Text style={styles.headerText}>ACTIVITY</Text>
            </View>

            <ListDate isHome={false}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#c1aefc',
        height: '13%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    headerText: {
        color: '#ECF2FF',
        fontSize: 42,
        fontWeight: 'bold',
        marginLeft: '14%',
        marginBottom: 3
    }
});

export default ActivityScreen;