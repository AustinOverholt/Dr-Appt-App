import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormInput, FormLabel, Header, SearchBar } from 'react-native-elements';
import Logo from '../components/Logo.js';
import userapi from '../utilities/UserApi.js';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [ 
                    
                        {
                            "id": "1",
                            "Name": "Bob Smith",
                            "Age": "45",
                            "Address": "123 Main St",
                            "Role": "0",
                            "created": "2018-01-13 16:40:33",
                            "modified": null
                        },
                    
                       {
                            "id": "2",
                            "Name": "John Doe",
                            "Age": "29",
                            "Address": "456 Park Ave",
                            "Role": "1",
                            "created": "2018-01-13 16:41:39",
                            "modified": null
                        },
                    
                        {
                            "id": "3",
                            "Name": "Jane Doe",
                            "Age": "32",
                            "Address": "789 Broadway",
                            "Role": "1",
                            "created": "2018-01-13 16:41:39",
                            "modified": null
                        },
                
                    
                        {
                            "id": "6",
                            "Name": "John Smith",
                            "Age": "50",
                            "Address": "555 West St",
                            "Role": "1",
                            "created": "2018-01-13 17:29:42",
                            "modified": "2018-01-13 17:29:42"
                        }
                    
                    ]
        }
        
    }

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
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Dr Appt App', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          outerContainerStyles={{ backgroundColor: 'gray', alignSelf: 'stretch'}}
        />
        
        {/* Dr Search Bar */}
        <SearchBar
        //onChangeText={someMethod}
        //onClearText={someMethod}
        placeholder='Search For Doctor Here...'
        containerStyle={{alignSelf: 'stretch', marginBottom:100}} />
        
        {/* Welcome Text */}
        <Text>Welcome, {this.state.users[0].name}</Text>
        
        {/* Request Appt Button (on click display appt menu) */}
        <Button
          buttonStyle={{backgroundColor: 'black', borderRadius: 25, width: 300, margin: 15}}
          small
          textStyle={{textAlign: 'center'}}
          title={`Request Appointment`}
          onPress={() => alert("Req Appt pressed")}  
        />
        
        {/* Past Appts (on click display past appts) */}
        <Button
          buttonStyle={{backgroundColor: 'black', borderRadius: 25, width: 300, margin: 15}}
          small
          textStyle={{textAlign: 'center'}}
          title={`Past Appointments`}
          onPress={() => alert("Past Appts pressed")} 
        />
        
        {/* About Me (Get Call For Patient, Go to page for details) */}
        <Button
          buttonStyle={{backgroundColor: 'black', borderRadius: 25, width: 300, margin: 15}}
          small
          textStyle={{textAlign: 'center'}}
          title={`About Me`}
          onPress={() => alert("About pressed")} 
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