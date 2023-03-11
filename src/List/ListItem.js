import React, {useContext} from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { AccountContext } from "../store/account-context";

const Circle = ({ catagory }) => {
    let color = '#ffffff'
    if(catagory === 0) color = '#05ff00';
    else if(catagory === 1) color = '#ebff00';
    else if(catagory === 2) color = '#ff0000';

    return (
        <View style={{
            borderRadius: 10,
            backgroundColor: color,
            width: 15,
            height: 15,
        }} />
    );
}

const Check = ({ checked }) => {
    let shape = "check-box";
    if(checked === false) shape = "check-box-outline-blank";
    else if(checked === true) shape = "check-box";

    return (
        <MaterialIcons name={shape} size={42} color="white" style={{
            marginTop: 5
        }} />
    )
}

function ListItem({ title, date, catagory, check, id, expand }) {
    const accountCtx = useContext(AccountContext);

    return(
        <View>
            {expand&&(
                <View style={styles.container}>
                    <View style={{marginTop: 7, marginHorizontal: 10}}>
                        <Circle catagory={catagory}/>
                    </View>
                    <View style={{flexDirection: 'column', alignSelf: 'center', justifyContent: 'center', width: 250}}>
                        <Text style={{fontSize: 16, marginTop: 3}}>{title}</Text>
                        <Text style={{fontSize: 16, marginVertical: 5}}>{date}</Text>
                    </View>
                    <Pressable onPress={() => accountCtx.checkedList(id)}>
                        <Check checked={check} />
                    </Pressable>
                </View>
            )}

            {!expand&&(
                <View style={{marginLeft: 7}}>
                    <Circle catagory={catagory} />
                </View>
            )}
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