import React, {useState, useContext} from "react";
import { View, Text, StyleSheet, Modal, Pressable, TouchableWithoutFeedback, TextInput, TouchableOpacity } from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { getDateYearFormat, getTimeFormat } from "../Utility/date";
import { AccountContext } from "../store/account-context";

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function EditScreen({createModalVisible, setCreateModalVisible, id, title, oldDate, category}) {
    const accountCtx = useContext(AccountContext);

    const [activity, setActivity] = useState(title);
    const [selectedDate, setSelectedDate] = useState(getDateYearFormat(oldDate));
    const [newSelectedDate, setNewSelectedDate] = useState(oldDate);

    const [datePickerVisible, setDatePickerVisible] = useState(false);

    const dateString = getTimeFormat(oldDate);

    const [selectedTimeHours10, setSelectedTimeHours10] = useState(dateString[0]);
    const [selectedTimeMins10, setSelectedTimeMins10] = useState(dateString[1]);
    const [selectedTimeHours1, setSelectedTimeHours1] = useState(dateString[3]);
    const [selectedTimeMins1, setSelectedTimeMins1] = useState(dateString[4]);

    const [selectCircle, setSelectCircle] = useState(category);

    const selCir1 = () => {
        setSelectCircle(0);
    }

    const selCir2 = () => {
        setSelectCircle(1);
    }

    const selCir3 = () => {
        setSelectCircle(2);
    }

    const setHours = (is10, plus) => {
        //is10 == true: set10
        //is10 == false: set1
        //plus == true: +
        //plus == false: -
        if(is10){
            if(plus){
                if(selectedTimeHours10 >= 1 && selectedTimeHours1 >= 4){
                    setSelectedTimeHours10(2)
                    setSelectedTimeHours1(3)
                }
                else if(selectedTimeHours10 >= 2)
                    setSelectedTimeHours10(0)
                else
                    setSelectedTimeHours10(selectedTimeHours10+1)
            }
            else{
                if(selectedTimeHours10 <= 0 && selectedTimeHours1 >= 4){
                    setSelectedTimeHours10(2)
                    setSelectedTimeHours1(3)
                }
                else if(selectedTimeHours10 <= 0)
                    setSelectedTimeHours10(2)
                else
                    setSelectedTimeHours10(selectedTimeHours10-1)
            }
        }else{
            if(plus){
                if(selectedTimeHours10 == 2 && selectedTimeHours1 >= 3)
                    setSelectedTimeHours1(0)
                else if(selectedTimeHours1 >= 9)
                    setSelectedTimeHours1(0)
                else
                    setSelectedTimeHours1(selectedTimeHours1+1)
            } 
            else{
                if(selectedTimeHours1 <= 0 && selectedTimeHours10 >= 2){
                    setSelectedTimeHours1(3)
                }
                else if(selectedTimeHours1 <= 0)
                    setSelectedTimeHours1(9)
                else
                    setSelectedTimeHours1(selectedTimeHours1-1)
            }
        }
    }

    const setMins = (is10, plus) => {
        //is10 == true: set10
        //is10 == false: set1
        //plus == true: +
        //plus == false: -
        if(is10){
            if(plus){
                if(selectedTimeMins10 >= 5)
                    setSelectedTimeMins10(0)
                else
                    setSelectedTimeMins10(selectedTimeMins10+1)
            }
            else{
                if(selectedTimeMins10 <= 0)
                    setSelectedTimeMins10(5)
                else
                    setSelectedTimeMins10(selectedTimeMins10-1)
            }
        }else{
            if(plus){
                if(selectedTimeMins1 >= 9)
                    setSelectedTimeMins1(0)
                else
                    setSelectedTimeMins1(selectedTimeMins1+1)
            } 
            else{
                if(selectedTimeMins1 <= 0)
                    setSelectedTimeMins1(9)
                else
                    setSelectedTimeMins1(selectedTimeMins1-1)
            }
        }
    }

    const handleComfirm = (date) =>{
        setSelectedDate(getDateYearFormat(date));
        setNewSelectedDate(date);
        hideDatePicker();
    }

    const hideDatePicker = () =>{
        setDatePickerVisible(false);
    }

    const createHandle = () => {
        const date = new Date(
            newSelectedDate.getFullYear(),
            newSelectedDate.getMonth(),
            newSelectedDate.getDate(),
            parseInt(`${selectedTimeHours10}${selectedTimeHours1}`),
            parseInt(`${selectedTimeMins10}${selectedTimeMins1}`)
        )
        accountCtx.editList(id,{
            title: activity,
            date: date,
            category: selectCircle
        })
        setActivity(title);
        setSelectedDate(getDateYearFormat(date));
        setSelectedTimeHours10(selectedTimeHours10);
        setSelectedTimeHours1(selectedTimeHours1);
        setSelectedTimeMins10(selectedTimeMins10);
        setSelectedTimeMins1(selectedTimeMins1);
        setSelectCircle(selectCircle)
        setNewSelectedDate(date);
        setCreateModalVisible(false);
    }

    const cancelHandle = () => {
        setActivity(title);
        setSelectedDate(getDateYearFormat(oldDate));
        setSelectedTimeHours10(dateString[0]);
        setSelectedTimeHours1(dateString[1]);
        setSelectedTimeMins10(dateString[3]);
        setSelectedTimeMins1(dateString[4]);
        setSelectCircle(category)
        setNewSelectedDate(oldDate);
        setCreateModalVisible(false);
    }

    return (
        <Modal animationType='slide' transparent={false} visible={createModalVisible} statusBarTranslucent={true}>
            <Pressable style={styles.background} onPress={() => setCreateModalVisible(false)}>
                <TouchableWithoutFeedback>
                    <View style={styles.container}>
                        <TextInput style={styles.inputText} placeholder="ENTER YOUR ACTIVITY" onChangeText={setActivity} value={activity} />
                        <View style={styles.line}/>
                        {/*----------------------------------------Time------------------------------------------*/}
                        <View style={{alignItems: 'center'}}>
                            <View style={{flexDirection:'row', columnGap: 65, zIndex: 1}}>
                                <View style={{flexDirection: 'row', columnGap: 20}}>
                                    <Pressable onPress={() => setHours(true, true)}>
                                        <MaterialIcons name="keyboard-arrow-up" size={52} color="#E3DFFD" />
                                    </Pressable>
                                    <Pressable onPress={() => setHours(false, true)}>
                                        <MaterialIcons name="keyboard-arrow-up" size={52} color="#E3DFFD" />
                                    </Pressable>
                                </View>
                                <View style={{flexDirection: 'row', columnGap: 20}}>
                                    <Pressable onPress={() => setMins(true, true)}>
                                        <MaterialIcons name="keyboard-arrow-up" size={52} color="#E3DFFD" />
                                    </Pressable>
                                    <Pressable onPress={() => setMins(false, true)}>
                                        <MaterialIcons name="keyboard-arrow-up" size={52} color="#E3DFFD" />
                                    </Pressable>
                                </View>
                            </View>

                            <View style={{flexDirection:'row', columnGap: 70, position: 'absolute', marginTop: 20}}>
                                <View style={{flexDirection: 'row', columnGap: 28}}>
                                    <Text style={styles.clock}>{selectedTimeHours10}</Text>
                                    <Text style={styles.clock}>{selectedTimeHours1}</Text>
                                </View>
                                
                                <View style={{position: 'absolute', marginLeft: 145}}>
                                    <Text style={[styles.clock, {fontWeight: 'bold'}]}>:</Text>
                                </View>
                                
                                <View style={{flexDirection: 'row', columnGap: 28}}>
                                    <Text style={styles.clock}>{selectedTimeMins10}</Text>
                                    <Text style={styles.clock}>{selectedTimeMins1}</Text>
                                </View>
                            </View>

                            <View style={{flexDirection:'row', columnGap: 65, marginTop: 50}}>
                                <View style={{flexDirection: 'row', columnGap: 20}}>
                                    <MaterialIcons name="keyboard-arrow-down" size={52} color="#E3DFFD" onPress={() => setHours(true, false)} />
                                    <MaterialIcons name="keyboard-arrow-down" size={52} color="#E3DFFD" onPress={() => setHours(false, false)} />
                                </View>
                                <View style={{flexDirection: 'row', columnGap: 20}}>
                                    <MaterialIcons name="keyboard-arrow-down" size={52} color="#E3DFFD" onPress={() => setMins(true, false)} />
                                    <MaterialIcons name="keyboard-arrow-down" size={52} color="#E3DFFD" onPress={() => setMins(false, false)} />
                                </View>
                            </View>
                        </View>
                        {/*----------------------------------------Time------------------------------------------*/}
                        <TouchableOpacity onPress={() => setDatePickerVisible(true)} style={styles.dateButton}>
                            <Text style={{fontSize: 26}}>{selectedDate}</Text>
                        </TouchableOpacity>

                        <View style={styles.priority}>
                            <Text style={{fontSize: 20}}>PRIORTY</Text>
                            <View style={{flexDirection: 'row', columnGap: 10}}>
                                <Pressable onPress={() => selCir1()} style={selectCircle !== 0 ? 
                                    [styles.circle, {backgroundColor: '#05ff00'}]: [styles.circleBorder, {backgroundColor: '#05ff00'}]} />
                                <Pressable onPress={() => selCir2()} style={selectCircle !== 1 ? 
                                    [styles.circle, {backgroundColor: '#ebff00'}]: [styles.circleBorder, {backgroundColor: '#ebff00'}]} />
                                <Pressable onPress={() => selCir3()} style={selectCircle !== 2 ? 
                                    [styles.circle, {backgroundColor: '#ff0000'}]: [styles.circleBorder, {backgroundColor: '#ff0000'}]} />
                            </View>
                        </View>

                        <TouchableOpacity style={{marginBottom: 15}} onPress={() => {
                            accountCtx.deleteList(id)
                            setCreateModalVisible(false);
                        }}>
                            <Ionicons name="trash-bin" size={40} color="black" />
                        </TouchableOpacity>

                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={[styles.exitButton, {borderBottomLeftRadius: 20}]} onPress={() => cancelHandle()}>
                                <Text style={{fontSize: 25}}>CANCEL</Text>
                            </TouchableOpacity>
                            <View style={{width: 2, height: 80}}></View>
                            <TouchableOpacity style={[styles.exitButton, {borderBottomRightRadius: 20}]} onPress={() => {
                                createHandle();
                            }}>
                                <Text style={{fontSize: 25}}>CREATE</Text>
                            </TouchableOpacity>
                        </View>


                        {/*-----------------------------Time Modal-------------------------------*/}
                        <DateTimePickerModal
                            isVisible={datePickerVisible}
                            mode='date'
                            onConfirm={handleComfirm}
                            onCancel={hideDatePicker}
                        />
                        {/*-----------------------------Time Modal-------------------------------*/}
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
    },
    line: {
        width: '100%',
        height: 2,
        backgroundColor: '#D9D9D9',
        marginTop: 15,
        marginBottom: 5,
    },
    clock: {
        fontSize: 80,
        color: '#E3DFFD'
    },
    dateButton: {
        backgroundColor: '#E3DFFD',
        marginTop: 15,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    priority: {
        backgroundColor: '#E3DFFD',
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: 190,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 5,
        marginBottom: 20
    },
    circle: {
        borderRadius: 10,
        width: 18,
        height: 18,
    },
    circleBorder: {
        borderRadius: 10,
        width: 18,
        height: 18,
        borderWidth: 2,
        borderColor: '#000000'
    },
    exitButton: {
        backgroundColor: '#E3DFFD',
        alignItems: 'center',
        justifyContent: 'center',
        width: 190,
        height: 80,
    }
});

export default EditScreen;