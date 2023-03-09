import React, {useState} from "react";
import { View,Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons';

function ProfileScreen({route}) {
    const {id} = route.params;
    const {name} = route.params;
    const {email} = route.params;
    const {phone} = route.params;

    const [inputValues, setInputValues] = useState({
        name: name,
        email: email,
        phone: phone,
    });

    const [password, setPassword] = useState('');

    function inputChangeHandlder(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue,
            };
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="chevron-back" size={50} color="#383d56" />
                <Text style={{ fontSize: 36, marginLeft: 20, marginBottom: 10 }}>Profile</Text>
            </View>
            <View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>Name</Text>
                    <TextInput value={inputValues.name} style={styles.inputField} 
                        onChangeText={inputChangeHandlder.bind(this, 'name')}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>Email</Text>
                    <TextInput value={inputValues.email} style={styles.inputField} 
                        onChangeText={inputChangeHandlder.bind(this, 'email')}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>Phone</Text>
                    <TextInput value={inputValues.phone} style={styles.inputField} 
                        onChangeText={inputChangeHandlder.bind(this, 'phone')}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.inputText}>Password</Text>
                    <TextInput style={styles.inputField} 
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {

            }}>
                    <Text style={{color: '#383d56', fontSize: 22}}>Edit</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#383D56',
        alignItems: 'center'
    },
    header: {
        backgroundColor: '#c1aefc',
        height: '15%',
        width: '100%',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    input: {
        margin: 20,
        marginBottom: 10
    },
    inputText: {
        color: 'white',
        fontSize: 20
    },
    inputField: {
        backgroundColor: '#e3dffd',
        borderWidth: 1,
        borderColor: '#c1aefc',
        height: 40,
        width: 300,
        borderRadius: 12,
        paddingHorizontal: 10,
        textAlign: 'left'
    },
    button: {
        backgroundColor: '#e3dffd',
        alignItems: 'center',
        justifyContent: 'center',
        width: 125,
        height: 40,
        borderRadius: 17,
        marginTop: 40
    },
});

export default ProfileScreen;