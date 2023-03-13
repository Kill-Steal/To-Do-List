import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, FlatList, Button } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import ListDate from "../List/ListDate";
import SettingScreen from "./SettingScreen";
import { AccountContext } from "../store/account-context";
import CreateScreen from "./CreateScreen";

function HomeScreen({ navigation, route }){
    const accountCtx = useContext(AccountContext);

    const [modalVisible, setModalVisible] = useState(false);
    const [createModalVisible, setCreateModalVisible] = useState(false);

    const { id } = route.params;
    // const id = 1;
    
    const index = accountCtx.account.findIndex(
        (account) => account.id === id
    )

    const name = accountCtx.account[index].name;
    const email = accountCtx.account[index].email;
    const phone = accountCtx.account[index].phone;

    // console.log(accountCtx.account);

    // const [showName, setShowName] = useState(name)
    // const [showEmail, setShowEmail] = useState(email)
    // const [showPhone, setShowPhone] = useState(phone)

    // if(showName === '') setShowName('Ditthaphong Siriloetthitikon')
    // if(showEmail === '') setShowEmail('ditthaphong.s@ku.th')
    // if(showPhone === '') setShowPhone('0899988899')
    // console.log(`ID: ${id}`)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome name="sticky-note" size={60} color="#e3dffd" style={{position: 'absolute', marginTop: 45, marginLeft: 30}} />
                <View style={styles.profile}>
                    <Text style={styles.name}>{name}</Text>
                    <Pressable style={styles.profilePic} onPress={() => setModalVisible(true)} >
                        <FontAwesome5 name="user-alt" size={26} color="#c1aefc" />
                    </Pressable>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.searchBar}>
                        {/* <MaterialIcons name="search" size={24} color="white" style={{marginRight: 6}} /> */}
                        <Text style={{fontSize: 20}}>{`Today is ${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`}</Text>
                    </View>
                </View>
            </View>

            <ListDate isHome={true}/>

            <View style={styles.createButton}>
                <TouchableOpacity onPress={() => setCreateModalVisible(true)}>
                    <AntDesign name="pluscircle" size={50} color="#C1AEFC" /> 
                </TouchableOpacity>
            </View>

            <CreateScreen createModalVisible={createModalVisible} setCreateModalVisible={setCreateModalVisible}/>

            <SettingScreen
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                showName={name}
                showEmail={email}
                showPhone={phone}
                goLogin={() => navigation.navigate('Login')}
                goProfile={() => {
                    setModalVisible(false);
                    navigation.navigate('Profile',{
                        id: id,
                        // name: name,
                        // email: email,
                        // phone: phone,
                    });
                }}
                goActivity={() => navigation.navigate('Activity',{
                    id: id,
                })}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#383D56',
    },
    header: {
        backgroundColor: '#c1aefc',
        height: '20%',
        width: '100%',
    },
    profile: {
        backgroundColor: '#e3dffd',
        width: 270,
        height: 65,
        alignSelf: 'flex-end',
        marginTop: 43,
        marginRight: 15,
        borderRadius: 10,
        flexDirection: 'row',
    },
    name: {
        marginLeft: 8,
        marginTop: 10,
        fontSize: 15,
        width: 185,
    },
    profilePic: {
        backgroundColor: '#ecf2ff',
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 18,
        marginBottom: 7,
        borderRadius: 25
    },
    searchBar: {
        width: 365,
        height: 30,
        backgroundColor: '#e3dffd',
        marginTop: 8,
        marginLeft: 14,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bell: {
        alignSelf: 'flex-end',
        marginLeft: 11,
        marginBottom: 3,
        transform: [{rotate: '45deg'}]
    },
    dot: {
        width: 11,
        height: 11,
        backgroundColor: '#ff0000',
        position: 'absolute',
        borderRadius: 5,
        marginLeft: 370,
        marginTop: 25,
        borderWidth: 1
    },
    createButton: {
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 710,
        marginRight: '5%',
        justifyContent: 'flex-end',
        maxHeight: 50,
    },
});

export default HomeScreen;