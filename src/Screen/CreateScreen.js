import React, {useState, useContext} from "react";
import { View, Text, StyleSheet, Modal, Pressable, TouchableWithoutFeedback, TextInput } from "react-native";

function CreateScreen({createModalVisible, setCreateModalVisible}) {
    const [activity, setActivity] = useState('');
    const [date, setDate] = useState('');

    return (
        <Modal animationType='slide' transparent={false} visible={createModalVisible} statusBarTranslucent={true}>
            <Pressable style={styles.background} onPress={() => setCreateModalVisible(false)}>
                <TouchableWithoutFeedback>
                    <View style={styles.container}>
                        <TextInput style={styles.inputText} placeholder="ENTER YOUR ACTIVITY" onChangeText={setActivity} value={activity} />
                        <View style={{
                            width: '100%',
                            height: 2,
                            backgroundColor: '#D9D9D9',
                            marginVertical: 15
                        }}/>
                    </View>
                </TouchableWithoutFeedback>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#383D56',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    container: {
        width: '98%',
        height: '70%',
        backgroundColor: '#C1AEFC',
        borderRadius: 20,
        alignItems: 'center',
        paddingTop: 17
    },
    inputText: {
        width: '90%',
        height: 60,
        backgroundColor: '#E3DFFD',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 20
    }
});

export default CreateScreen;