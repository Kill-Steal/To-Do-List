import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity, Pressable, TouchableWithoutFeedback } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

function SettingScreen({modalVisible, setModalVisible , showName, showEmail, showPhone, goLogin, goProfile}) {
    return (
        <Modal animationType="fade" transparent={true} visible={modalVisible} statusBarTranslucent={true}>
            <Pressable style={modalStyles.background} onPress={() => setModalVisible(false)}>
                <TouchableWithoutFeedback>
                    <View style={modalStyles.container}>
                        <View style={modalStyles.profile}>
                            <View style={modalStyles.profileDetail}>
                                <Text style={{fontSize: 17, marginTop: 6}}>{showName}</Text>
                                <Text style={{fontSize: 15, marginTop: 6}}>{showEmail}</Text>
                                <Text style={{fontSize: 15, marginTop: 6}}>{showPhone}</Text>
                            </View>
                            <Pressable style={{ position: 'absolute', marginLeft: 223, marginTop: 16}} onPress={() => {
                                goProfile();
                            }}>
                                <MaterialIcons name="edit" size={16} color="black" />
                            </Pressable>
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
                            <TouchableOpacity style={modalStyles.Button} onPress={() => {setModalVisible(false); goLogin();}}>
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
                </TouchableWithoutFeedback>
            </Pressable>
        </Modal>
    );
}

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

export default SettingScreen;