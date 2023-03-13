import React from "react";
import { View,Text, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons';

function Credit({navigation}){
    return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text style={{fontSize: 20}}>ดิษฐพงษ์ ศิริเลิศฐิติกร 6321650081</Text>
            <Text style={{fontSize: 20}}>รวิภัทร ชูทิพย์ 6321651711</Text>
            <Text style={{fontSize: 20}}>ศุภกร เป่าทุย 6321650498</Text>
            <Text style={{fontSize: 20}}>ธวัสชัย แซ่ลิ่ม 6321650471</Text>
            <TouchableOpacity style={{}} onPress={() => navigation.goBack()} >
                <Ionicons name="chevron-back" size={55} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Credit;