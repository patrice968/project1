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



class Home2 extends React.Component {

  

  render() {
    return (


      <View style={styles.container}>
         <TouchableHighlight>
 <View style={styles.button1}>
                        <Text style={styles.buttonText}>
                            100k-150k
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        <TouchableHighlight>
 <View style={styles.button2}>
                        <Text style={styles.buttonText}>
                            150k-300k
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

<TouchableHighlight>
 <View style={styles.button3}>
                        <Text style={styles.buttonText}>
                            300k-500k
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

<TouchableHighlight>
 <View style={styles.button4}>
                        <Text style={styles.buttonText}>
                            500k-800k
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>


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
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
  }, 
  button2: {
        backgroundColor: 'green',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
  }, 
  button3: {
        backgroundColor: 'green',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
  },
  button4: {
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


export default Home2;
