import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormInput, FormLabel, Header, SearchBar, Card } from 'react-native-elements';
import Logo from '../components/Logo.js';
import userapi from '../utilities/UserApi.js';
import {users, appointments} from '../config/data.js';
import DatePicker from 'react-native-datepicker';

// Patient View
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: users,
            appointments: appointments,
            date: "2018-01-15",
        }
    }

    // api call 
    // componentWillMount() {
    //     userapi.getUsers().then((res) =>{
    //         this.setState({
    //             users: res.users,

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
          outerContainerStyles={{ backgroundColor: 'gray', alignSelf: 'stretch'}}
        />
        
        {/* Dr Search Bar */}
        <SearchBar
        //onChangeText={someMethod}
        //onClearText={someMethod}
        placeholder='Search For Doctor Here...'
        containerStyle={{alignSelf: 'stretch'}} />
        
        {/* Welcome Text */}
        {/* <Text>Welcome, {this.state.users[1].User.Name}</Text> */}
        
        {/* Request Appt Button (on click display appt menu) */}
        <Card
        title='Request Appointment'
        containerStyle={{width: 250}}
        >
        <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2017-01-15"
        maxDate="2024-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
        />
        <Button
            backgroundColor='black'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10}}
            title='Request' />
        </Card>
        
        {/* Past Appts */}
        <Card
        title='Past Appointments'
        >
        <Text style={{marginBottom: 10}}>
            Appointment Date: {this.state.appointments[1].Appointment.apptdate}
        </Text>
        <Button
            backgroundColor='black'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='View Details' />
        </Card>
        
        {/* About Me (Get Call For Patient, Go to page for details) */}
        <Card
        title='My Details'
        >
        <Text style={{marginBottom: 10, width: 250}}> 
            Name: {this.state.users[1].User.Name} {"\n"}
            Age: {this.state.users[1].User.Age} {"\n"}
            Address: {this.state.users[1].User.Address}
            
        
        </Text>
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


// fetch('http://127.0.0.1:8080/users/2.json/', {
//     headers: {
//         'Content-Type':'application/json',
//     }
// });

// async function Get() {
//     try {
//       let response = await fetch(
//         'http://192.168.1.113:8080/users.json/'
//       );
//       let responseJson = await response.json();
//       console.log(responseJson);
//       return responseJson.users;
//     } catch (error) {
//       console.error(error);
//     }
//   }


//   function Get() {
//     return fetch('http://192.168.1.113:8080/users.json')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         users = responseJson.users;
//         console.debug(responseJson);
//         this.setState({
//             users : responseJson.users,
//         }); 
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// Get();