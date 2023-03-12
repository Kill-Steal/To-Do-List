import React, {useState, useContext} from "react";
import { View,Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { AccountContext } from "../store/account-context";

function ProfileScreen({navigation, route}) {
    const accountCtx = useContext(AccountContext);

    const {id} = route.params;
    const index = accountCtx.account.findIndex(
        (account) => account.id === id
    )
    // const {name} = route.params;
    // const {email} = route.params;
    // const {phone} = route.params;

    const name = accountCtx.account[index].name;
    const email = accountCtx.account[index].email;
    const phone = accountCtx.account[index].phone;
    const password = accountCtx.account[index].password;

    const [inputValues, setInputValues] = useState({
        name: name,
        email: email,
        phone: phone,
        password: password,
    });

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
                <Ionicons name="chevron-back" size={50} color="#383d56" onPress={() => navigation.goBack()} style={{
                    marginBottom: 5,
                    marginLeft: 5
                }}/>
                <Text style={{ fontSize: 36, marginLeft: 15, marginBottom: 10 }}>Profile</Text>
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
                    <TextInput value={password} style={styles.inputField} 
                        onChangeText={inputChangeHandlder.bind(this, 'password')}
                        secureTextEntry
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {
                const index = accountCtx.account.findIndex(
                    (account) => account.id === id
                )
                // const oldPassword = accountCtx.account[index].password
                // if(password === '') {setPassword(`${oldPassword}`); console.log(`Changed Password: ${password}`);}
                accountCtx.updateAccount(id,{
                    email: inputValues.email,
                    name: inputValues.name,
                    phone: inputValues.phone,
                    password: inputValues.password,
                });
                navigation.navigate('Home',{
                    id: id,
                });
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