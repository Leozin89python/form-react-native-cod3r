import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Form from './src/views/userForm'
import List from './src/views/userList'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { UserProvider } from './src/context/usersContext'

const Stack = createStackNavigator()

export default function App() {
  return (
    <UserProvider>
          <NavigationContainer>
              <Stack.Navigator initialRouteName="List"
                              screenOptions={screenOptions}>
                <Stack.Screen name="List" component={List}
                                options={( { navigation } ) => {
                                    return {
                                      title: 'Lista de usuários',
                                      headerRight: () => (
                                        <Button 
                                          type="clear"
                                          icon={<Icon name="add"
                                                      size={25} 
                                                      color="white"
                                                      onPress={() => navigation.navigate('Form')} 
                                                      />}
                                        />
                                      ),
                                    }
                                }} />
                <Stack.Screen name="Form" component={Form}
                                options={{
                                  title:'Formulário de usuários',
                                }}/>
              </Stack.Navigator>
          </NavigationContainer>
    </UserProvider>
  )
}


const screenOptions = {
    headerStyle: {
      //marginTop: 40,
      backgroundColor: '#f4511e'
    }, 
    headerTintColor: '#feee',
    headerTitleStyle :{
      fontWeight: 'bold',
    }
}


