import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// Dummy data for to-do list
const todoList = [
  
  {
    task: 'Go to the gym',
    time: '6:00 AM',
    priority: 'high',
    completed: false,
  },
  {
    task: 'Buy groceries',
    time: '10:00 AM',
    priority: 'medium',
    completed: false,
  },
  {
    task: 'Finish homework',
    time: '2:00 PM',
    priority: 'low',
    completed: false,
  },
];

const Checkbox = ({ completed, onPress }) => {
  const [isChecked, setIsChecked] = useState(completed);
  const iconName = isChecked ? 'checksquare' : 'closesquareo';
  const iconColor = isChecked ? '#00FF00' : '#FF0000';
  return (
    <TouchableOpacity onPress={() => {
      setIsChecked(!isChecked);
      if (onPress) {
        onPress(!isChecked);
      }
    }}>
      <Icon name={iconName} size={20} color={iconColor} />
    </TouchableOpacity>
  );
};

export default function ActivityScreen() {
  const handlePress = () => {
    // Handle press event here
  };

  const handleTodoPress = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  };
  return (
    <View style={{ backgroundColor: '#383D56', flex: 1 }}>
      <View style={{ backgroundColor: '#C1AEFC', height: 50, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={handlePress}>
          <Icon name="bars" size={25} color="#FFFFFF" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
        <Text style={{ flex: 1, color: '#FFFFFF', textAlign: 'center', fontSize: 20 }}>Activate</Text>
      </View>
      <View style={{ backgroundColor: '#E3DFFD', padding: 10 }}>
        <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>tasks</Text>
        {todoList.map((todo, index) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }} key={index}>
            <Checkbox completed={todo.completed} onPress={(value) => {
              // Handle checkbox press event here
              todo.completed = value;
            }} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={{ color: '#000000', fontSize: 16 }}>{todo.task}</Text>
              <Text style={{ color: '#808080', fontSize: 12 }}>{todo.time}</Text>
            </View>
            {todo.priority === 'high' && (
              <View style={{ backgroundColor: 'red', paddingHorizontal: 9, paddingVertical: 1, borderRadius: 5 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}></Text>
              </View>
            )}
            {todo.priority === 'medium' && (
              <View style={{ backgroundColor: 'yellow', paddingHorizontal: 9, paddingVertical: 1, borderRadius: 5 }}>
                <Text style={{ color: '#000000', fontSize: 12 }}></Text>
              </View>
            )}
            {todo.priority === 'low' && (
              <View style={{ backgroundColor: '#05FF00', paddingHorizontal: 9, paddingVertical: 1, borderRadius: 5 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}></Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}