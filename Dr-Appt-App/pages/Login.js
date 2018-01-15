import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormInput, FormLabel, Header, Icon } from 'react-native-elements';
import Logo from '../components/Logo.js'

// Login View
export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          //leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Dr Appt App', style: { color: '#fff' } }}
          //rightComponent={{ icon: 'home', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: 'gray', alignSelf: 'stretch', marginBottom: 100}}
        />
        <Icon
          name='heartbeat'
          type='font-awesome'
          size={50}
          containerStyle={{marginBottom: 50}} />
        <FormLabel
          containerStyle={{justifyContent: 'center'}}
        >UserName</FormLabel>
        <FormInput
          containerStyle={{width: 300,  justifyContent: 'center'}}
          inputStyle={{textAlign: 'center'}}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          containerStyle={{width: 300}}
          inputStyle={{textAlign: 'center'}}
        />
        <Button
          buttonStyle={{backgroundColor: 'black', borderRadius: 25, width: 200, marginTop: 50}}
          small
          textStyle={{textAlign: 'center'}}
          title={`Sign Up`}
          onPress={() => alert("Sign up pressed")}
        />
        <Button
          buttonStyle={{backgroundColor: 'black', borderRadius: 25, width: 200, marginTop: 10}}
          small
          textStyle={{textAlign: 'center'}}
          title={`Login`}
          onPress={() => alert("button pressed")} //Go to patient or dr page 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455a64',
    alignItems: 'center',
  },
});
