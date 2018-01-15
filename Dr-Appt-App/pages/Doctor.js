import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormInput, FormLabel, Header, SearchBar } from 'react-native-elements';
import Logo from '../components/Logo.js';
import userapi from '../utilities/UserApi.js';

export default class Doctor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            users: [ {
                "id": "1",
                "Name": "Bob Smith",
                "Age": "45",
                "Address": "123 Main St",
                "Role": "0",
                "created": "2018-01-13 16:40:33",
                "modified": null
            },],
        }
        
    }

    // componentWillMount() {
    //     userapi.getUsers().then((res) =>{
    //         this.setState({
    //             appointments: res.appointments,
    //         })
    //     })
    // }

  render() {
    return (
      <View style={styles.container}>
       <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Dr Appt App', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: 'gray', alignSelf: 'stretch', marginBottom: 100}}
        />

        {/* Welcome Text */}
        <Text>Welcome, Dr.</Text> 
        {/* Alert for new Appts (on click display new appts) */}
        <Button
          buttonStyle={{backgroundColor: 'black', borderRadius: 25, width: 300, margin: 15}}
          small
          textStyle={{textAlign: 'center'}}
          title={`Appointment Alert`}
          onPress={() => alert("You have one new appointment request")} 
        />
        
        {/* Upcoming Appt Button (on click display upcoming appt menu) */}
        <Button
          buttonStyle={{backgroundColor: 'black', borderRadius: 25, width: 300, margin: 15}}
          small
          textStyle={{textAlign: 'center'}}
          title={`Upcoming Appointment`}
          onPress={() => alert("Upcoming Appt pressed")}  
        />
        
        {/* Pending Appts (on click display pending appts) */}
        <Button
          buttonStyle={{backgroundColor: 'black', borderRadius: 25, width: 300, margin: 15}}
          small
          textStyle={{textAlign: 'center'}}
          title={`Pending Appointments`}
          onPress={() => alert("Pending Appts pressed")} 
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
