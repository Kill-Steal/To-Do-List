import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { AccountContext } from "../store/account-context";

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const accountCtx = useContext(AccountContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Hey You Back</Text>
            </View>
            <View style={styles.profile}>
                <AntDesign name="user" size={64} color="#383D56" />
            </View>
            <View style={styles.inputContainer}>
                <View style={{marginLeft: 6, marginBottom: 4}}>
                    <Text style={{fontSize: 16, color: '#ffffff'}}>Email</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail} value={email} />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <View style={{marginLeft: 6, marginBottom: 4}}>
                    <Text style={{fontSize: 16, color: '#ffffff'}}>Password</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword} value={password} secureTextEntry />
                </View>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={() => {
                //----------------Login-----------------------
                const index = accountCtx.account.findIndex(
                    (account) => account.email === email
                )
                if(index !== -1){
                    const selectedAccount = accountCtx.account[index];
                    if(selectedAccount.password !== password)
                        Alert.alert("Your account doesn't exist.")
                    else {
                        setEmail('');
                        setPassword('');
                        navigation.navigate('Home', {
                            id: selectedAccount.id,
                            name: selectedAccount.name,
                            email: selectedAccount.email,
                            phone: selectedAccount.phone
                        })
                    }
                } else Alert.alert("Your account doesn't exist.")
                //--------------------------------------------
            }}>
                <Text style={{color: '#383d56', fontSize: 22}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Register')} >
                <Ionicons name="chevron-back" size={55} color="#ecf2ff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#383D56'
    },
    header: {
        marginTop: '15%',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 32,
        color: '#ffffff'
    },
    profile: {
        marginVertical: 20,
        marginHorizontal: 145,
        backgroundColor: '#ecf2ff',
        paddingVertical: 18,
        paddingHorizontal: 5,
        borderRadius: 50,
        alignItems: 'center'
    },
    inputContainer: {
        marginHorizontal: 50,
        marginBottom: 15
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#c1aefc',
        backgroundColor: '#e3dffd',
        borderRadius: 17,
        textAlign: 'left'
    },
    loginButton: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        backgroundColor: '#e3dffd',
        width: 140,
        height: 40,
        borderRadius: 17
    },
    backButton: {
        alignItems: 'center',
        marginTop: 28,
        marginHorizontal: 168,
    }
});

export default LoginScreen;