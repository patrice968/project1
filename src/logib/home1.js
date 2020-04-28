import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';



class Home extends React.Component {

  

  render() {
    return (

<View style={styles.container}>
      

       
        <View style={styles.touchableButton2}>
        <Text style={styles.buttonText}>
 Enter ZIP Code: 
 </Text>
 </View>

 View style={styles.touchableButton3}>
        <Text style={styles.buttonText}>
 Radius: 
 </Text>
 </View>

 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  
  touchableButton2: {
        backgroundColor: 'green',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
  }, 
  touchableButton3: {
        backgroundColor: 'green',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
  }, 
  buttonText: {
     
        color: 'black',
        fontSize: 14,
        fontWeight:'bold',
  },

});


export default Home;
