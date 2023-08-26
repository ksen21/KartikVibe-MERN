/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {UserContext} from './UserContext'

import {
 
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import StackNavigator from './StackNavigator';

function App() {


  return (
    <>
    <UserContext>
    <StackNavigator/>
    </UserContext>
    
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
