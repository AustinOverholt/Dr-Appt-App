import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from '../pages/Login.js';
import Doctor from '../pages/Doctor.js';
import Patient from '../pages/Patient.js';

export const Tabs = TabNavigator({
    Login: {
        screen: Login,
    },
    Doctor: {
        screen: Doctor,
        tabBarIcon: <Icon name="account-circle"/>,
    }, 
    Patient: {
        screen: Patient,
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    }
});