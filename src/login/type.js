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



class Type extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
         <TouchableHighlight>
 <View style={styles.button1}>
                        <Text style={styles.buttonText}>
                            One Family House
                        </Text>
                    </View>
                </TouchableHighlight>
            
        <TouchableHighlight>
 <View style={styles.button2}>
                        <Text style={styles.buttonText}>
                            Two Family House
                        </Text>
                    </View>
                </TouchableHighlight>
            

<TouchableHighlight>
 <View style={styles.button3}>
                        <Text style={styles.buttonText}>
                            Condo
                        </Text>
                    </View>
                </TouchableHighlight>
            

<TouchableHighlight>
 <View style={styles.button4}>
                        <Text style={styles.buttonText}>
                            Apartment 
                        </Text>
                    </View>
                </TouchableHighlight>
            <TouchableHighlight
onPress={() => this.props.navigation.navigate('Image')}
>
<View style={styles.touchableButton1}>
<Text style={styles.buttonText}>
Continue
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
    backgroundColor: 'white',
    justifyContent: 'center',
  },
button1: {
        backgroundColor: 'green',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30,
         borderRadius: 10,
  }, 
  button2: {
        backgroundColor: 'green',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30,
         borderRadius: 10,
  }, 
  button3: {
        backgroundColor: 'green',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30,
         borderRadius: 10,
  },
  button4: {
        backgroundColor: 'green',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30,
         borderRadius: 10,
  }, 
  buttonText: {
     
        color: 'black',
        fontSize: 14,
        fontWeight:'bold',
  },
});


export default Type;
