import React from 'react';

import Main from './components/Main';
import Contacts from './components/Contacts';
import FullInfo from './components/FullInfo';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MapOffline from './components/MapOffline'
// import 'react-native-gesture-handler'

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={
                    {
                        title:'главная',
                        headerStyle: {  height:40},
                        headerTitleStyle: {fontWeight: 'light'}
                    }
                
                }
            />
         <Stack.Screen
                name="Contacts"
                component={Contacts}
                options={{title:'Контакты'}}
            />
        <Stack.Screen
                name="FullInfo"
                component={FullInfo}
                options={{title:'FullInfoFullInfo Information'}}
            />
        <Stack.Screen
                name="MapOffline"
                component={MapOffline}
                options={{title:'Map'}}
            />
        
        </Stack.Navigator>
    </NavigationContainer>;
}

