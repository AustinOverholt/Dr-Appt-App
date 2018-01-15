import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormInput, FormLabel, Header, SearchBar, Card } from 'react-native-elements';
import Logo from '../components/Logo.js';
import userapi from '../utilities/UserApi.js';
import { users, appointments } from '../config/data.js';

// Doctor View
export default class Doctor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            appointments: appointments,
            users: users,
            apptAlert: [0],
        }
    }

    // api call
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
          //leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Dr Appt App', style: { color: '#fff' } }}
          //rightComponent={{ icon: 'home', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: 'gray', alignSelf: 'stretch', marginBottom: 50}}
        />

        {/* Welcome Text */}
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Welcome, Dr. {this.state.users[0].User.Name}</Text> 
        
        {/* Alert for new Appts (on click display new appts) */}
        <Card>
        <Text style={{marginBottom: 10}}>
            You have {this.state.apptAlert} new appointments
        </Text>
        <Button
            backgroundColor='black'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='View Details' />
        </Card>
        
        {/* Upcoming Appt Button (on click display upcoming appt menu) */}
        <Card
        title='Upcoming Appointments'
        >
        <Text style={{marginBottom: 10}}>
            Appointment Date: {this.state.appointments[1].Appointment.apptdate}
        </Text>
        <Button
            backgroundColor='black'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='View Details' />
        </Card>
        
        {/* Pending Appts (on click display pending appts) */}
        <Card
        title='Pending Appointments'
        >
        <Text style={{marginBottom: 10}}>
            Appointment Date: {this.state.appointments[2].Appointment.apptdate}
        </Text>
        <Button
            backgroundColor='black'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Accept Time' />
        </Card>
        
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
