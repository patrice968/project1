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



class Homescreen extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
       <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn0uQIyp8rEsqMYatm6_YJkc4o7NzbPEvfj9p_mCpeFQObvxkF&usqp=CAU'}}
 style={{ height: 300, width: 300, marginTop: -10, }}
 ></Image>
<Text style={styles.text}>
Find your Perfect Home
</Text>
        <TouchableHighlight
onPress={() => this.props.navigation.navigate('Home1')}
>
<View style={styles.touchableButton1}>
<Text style={styles.buttonText}>
GET STARTED
</Text>
</View>
</TouchableHighlight>

 </View>

 

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


  text: {
    
    fontSize: 25,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

   touchableButton1: {
        backgroundColor: 'blue',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
   
   
    },
   
    buttonText: {
     
        
        fontSize: 14,
        fontWeight:'bold',
    
    }
});


export default Homescreen;
