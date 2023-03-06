import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, FlatList, Button } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import ListItem from "../ListOutput/ListItem";
import { getTimeFormat } from "../Utility/date";

const ToDoList =[
    {
        id: 1,
        title: 'Play Game!!!',
        date: new Date('2023-03-06 20:30'),
        category: 0,
        check: true
    },
    {
        id: 2,
        title: 'Do Homework!',
        date: new Date('2023-03-06 23:00'),
        category: 2,
        check: false
    },
    {
        id: 3,
        title: 'Water The Plant',
        date: new Date('2023-03-06 14:00'),
        category: 1,
        check: true
    },
    {
        id: 4,
        title: 'Shopping',
        date: new Date('2023-03-07 13:00'),
        category: 1,
        check: true
    },
]

function HomeScreen({ navigation, route }){
    const [modalVisible, setModalVisible] = useState(false);

    const { name } = route.params;
    const { email } = route.params;
    const { phone } = route.params;

    const [showName, setShowName] = useState(name)
    const [showEmail, setShowEmail] = useState(email)
    const [showPhone, setShowPhone] = useState(phone)

    if(showName === '') setShowName('Ditthaphong Siriloetthitikon')
    if(showEmail === '') setShowEmail('ditthaphong.s@ku.th')
    if(showPhone === '') setShowPhone('0899988899')

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profile}>
                    <Text style={styles.name}>{showName}</Text>
                    <Pressable style={styles.profilePic} onPress={() => setModalVisible(true)} >
                        <FontAwesome5 name="user-alt" size={26} color="#c1aefc" />
                    </Pressable>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.searchBar}>
                        <MaterialIcons name="search" size={24} color="white" style={{marginRight: 6}} />
                    </View>
                    <MaterialCommunityIcons name="bell" size={28} color="#e3dffd" style={styles.bell} />
                    <View style={styles.dot}></View>
                </View>
            </View>

            <View style={{margin: 15}}>
                <View style={listStyles.date}>
                    <Text style={{fontSize: 20, color: 'white'}}>TODAY</Text>
                </View>
                <View style={listStyles.content}>
                    <FlatList
                        data={ToDoList}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ListItem title={item.title} date={getTimeFormat(item.date)} catagory={item.category} checked={item.check} />
                        )}
                    />
                    <View style={{marginBottom: 15}} />
                </View>
            </View>

            <Modal animationType="fade" transparent={true} visible={modalVisible} statusBarTranslucent={true}>
                <View style={modalStyles.background}>
                    <View style={modalStyles.container}>
                        <View style={modalStyles.profile}>
                            <View style={modalStyles.profileDetail}>
                                <Text style={{fontSize: 17, marginTop: 6}}>{showName}</Text>
                                <Text style={{fontSize: 15, marginTop: 6}}>{showEmail}</Text>
                                <Text style={{fontSize: 15, marginTop: 6}}>{showPhone}</Text>
                            </View>
                            <View style={modalStyles.profilePic}>
                                <FontAwesome5 name="user-alt" size={50} color="#2b1a61" />
                            </View>
                        </View>
                        <View>
                            <View style={modalStyles.line} />
                            <TouchableOpacity style={modalStyles.Button} onPress={() => {setModalVisible(false); navigation.navigate('Activity')}}>
                                <Ionicons name="newspaper" size={30} color="black" style={{alignSelf: 'center'}} />
                                <Text style={modalStyles.textButton}>Activity</Text>
                                <MaterialIcons name="arrow-forward-ios" size={28} color="black" style={{alignSelf: 'center', marginLeft: 190}} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={modalStyles.line} />
                            <TouchableOpacity style={modalStyles.Button}>
                                <FontAwesome5 name="palette" size={30} color="black" style={{alignSelf: 'center'}} />
                                <Text style={modalStyles.textButton}>Dark Theme</Text>
                                <MaterialIcons name="arrow-forward-ios" size={28} color="black" style={{alignSelf: 'center', marginLeft: 147}} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={modalStyles.line} />
                            <TouchableOpacity style={modalStyles.Button} onPress={() => {setModalVisible(false); navigation.navigate('Login')}}>
                                <Ionicons name="log-out" size={30} color="black" style={{alignSelf: 'center'}} />
                                <Text style={modalStyles.textButton}>Log Out</Text>
                                <MaterialIcons name="arrow-forward-ios" size={28} color="black" style={{alignSelf: 'center', marginLeft: 185}} />
                            </TouchableOpacity>
                        </View>
                        <View style={{marginLeft: 5}}>
                            <View style={modalStyles.line} />
                            <View style={modalStyles.Button}>
                                <FontAwesome name="mobile-phone" size={38} color="black" style={{alignSelf: 'center'}} />
                                <Text style={[modalStyles.textButton, {marginLeft: 24}]}>Version</Text>
                                <Text style={{alignSelf: 'center', marginLeft: 170, fontSize: 16, color: 'gray'}}>0.9.9</Text>
                            </View>
                        </View>
                    </View>
                    <Pressable style={{width: 400, height: 340}} onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
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
        width: 330,
        height: 30,
        backgroundColor: '#e3dffd',
        marginTop: 8,
        marginLeft: 14,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'flex-end'
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
});

const listStyles = StyleSheet.create({
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
    }
});

const modalStyles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.25)'
    },
    container: {
        backgroundColor: '#C1AEFC',
        width: 360,
        height: 390,
        borderRadius: 20,
        marginTop: 50
    },
    profile: {
        backgroundColor: '#E3DFFD',
        width: 330,
        height: 100,
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 22,
        borderRadius: 10,
        flexDirection: 'row'
    },
    profileDetail: {
        alignItems: 'flex-end',
        marginLeft: 14,
        marginTop: 5,
        width: 206,
    },
    profilePic: {
        backgroundColor: '#ecf2ff',
        width: 85,
        height: 85,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 18,
        borderRadius: 45
    },
    line: {
        height: 1,
        width: 360,
        backgroundColor: '#D9D9D9'
    },
    Button: {
        flexDirection: 'row',
        margin: 15,
        marginLeft: 17,
        marginBottom: 14
    },
    textButton: {
        fontSize: 20,
        marginLeft: 15,
        alignSelf: 'center'
    },
});

export default HomeScreen;