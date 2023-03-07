import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

const Circle = ({ catagory }) => {
    let color = '#ffffff'
    if(catagory === 0) color = '#05ff00';
    else if(catagory === 1) color = '#ebff00';
    else if(catagory === 2) color = '#ff0000'

    return (
        <View style={{
            borderRadius: 10,
            backgroundColor: color,
            width: 15,
            height: 15,
            marginTop: 7,
            marginHorizontal: 10
        }} />
    );
}

const Check = ({ checked }) => {
    let shape = "check-box";
    if(checked === false) shape = "check-box-outline-blank";
    else if(checked === true) shape = "check-box";

    return (
        <MaterialIcons name={shape} size={42} color="white" style={{
            alignSelf: 'center',
        }} />
    )
}

function ListItem({ title, date, catagory, check, click }) {
    return(
        <View style={styles.container}>
            <Circle catagory={catagory}/>
            <View style={{flexDirection: 'column', alignSelf: 'center', justifyContent: 'center', width: 250}}>
                <Text style={{fontSize: 16, marginTop: 3}}>{title}</Text>
                <Text style={{fontSize: 16, marginVertical: 5}}>{date}</Text>
            </View>
            <Pressable onPress={() => click()}>
                <Check checked={check} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C1AEFC',
        margin: 15,
        marginBottom: 0,
        borderRadius: 10,
        flexDirection: 'row',
    }
});

export default ListItem;