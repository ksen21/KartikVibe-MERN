









import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import FriendScreen from './Screens/FriendScreen';
import ChatScreen from './Screens/ChatScreen';
import ChatMessageScreen from './Screens/ChatMessageScreen';

const StackNavigator = () => {

    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />

        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />

        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Friends" component={FriendScreen}  />

        <Stack.Screen name="Chats" component={ChatScreen}  />
        <Stack.Screen name="Messages" component={ChatMessageScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})