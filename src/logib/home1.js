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

  

state = {
text: '',
zip:'',
radius:'',
};
render() {
return (

<View style={styles.container}>


<View style={styles.bar}>

<TextInput
style={styles.textInput}
onChangeText={(zip) =>
this.setState({zip})}
value={this.state.zip}
/>
<Text style={styles.title}>

ZIP Code





</Text>

</View>






<View style={styles.bar}>

<TextInput
style={styles.textInput}
onChangeText={(radius) =>
this.setState({radius})}
value={this.state.radius}
/>
<Text style={styles.title}>

Radius





</Text>

</View>







<TouchableHighlight
onPress={() => this.props.navigation.navigate('Home2')}
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
    alignItems: 'center',
  },
  bar: {
  flex: 1, 
  flexDirection: 'row', 
  alignItems: 'center', 
  justifyContent: 'center', 
  },
  
textInput: {
  width: 200,
  heigh: 30, 
  borderRadius:
  20, 
  borderWidth: 1, 
  color: 'black', 
  fontSize: 15, 
}, 



});


export default Home;
