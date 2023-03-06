import React, { useContext, useState } from "react";
import { View, Text,StyleSheet, TextInput, TouchableOpacity  } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import { AccountContext } from "../store/account-context";


function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const accountCtx = useContext(AccountContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create Your Profile</Text>
            </View>
            <View style={styles.profile}>
                <AntDesign name="user" size={64} color="#383D56" />
            </View>

            <View style={styles.inputContainer}>
                <View style={{marginLeft: 6, marginBottom: 4}}>
                    <Text style={{fontSize: 16, color: '#ffffff'}}>Email</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail} inputMode="email" />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <View style={{marginLeft: 6, marginBottom: 4}}>
                    <Text style={{fontSize: 16, color: '#ffffff'}}>Password</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword} secureTextEntry />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <View style={{marginLeft: 6, marginBottom: 4}}>
                    <Text style={{fontSize: 16, color: '#ffffff'}}>Name</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Name' onChangeText={setName} />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <View style={{marginLeft: 6, marginBottom: 4}}>
                    <Text style={{fontSize: 16, color: '#ffffff'}}>Phone</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Phone' onChangeText={setPhone} inputMode="tel" />
                </View>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={() => {
                //--------------Register-------------------
                accountCtx.addAccount({
                    email: email,
                    password: password,
                    name: name,
                    phone: phone,
                });
                navigation.navigate('Home',{
                    email: email,
                    name: name,
                    phone: phone,
                });
                //-----------------------------------------
            }}>
                <Text style={{color: '#383d56', fontSize: 22}}>REGISTER</Text>
            </TouchableOpacity>
            
            <View style={styles.register}>
                <Text style={{color: 'white', fontSize: 16}}>Already have profile </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                    <Text style={{color: '#ffc700', fontSize: 16}}>Here</Text>
                </TouchableOpacity>
            </View>
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
        width: 160,
        height: 40,
        borderRadius: 17
    },
    register: {
        marginTop: 28,
        alignSelf: 'center',
        flexDirection: 'row',
    }
});

export default RegisterScreen;