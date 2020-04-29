import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Email from './src/login/email.js';
import File from './src/login/newfile.js';
import Home from './src/login/home1.js';
import Home2 from './src/login/home2.js';
import Type from './src/login/type.js';
import Image1 from './src/login/image.js';
import Image2 from './src/login/image2.js';


const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Email: {screen: Email},
  File: {screen: File},
  Home1:{screen: Home},
  Home2:{screen: Home2}, 
  Type:{screen: Type},
  Image:{screen: Image1},
  Image2:{screen: Image2},
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

