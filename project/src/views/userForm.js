import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native'
import {View, Text, StyleSheet, Button} from 'react-native'
import UsersContext from '../context/usersContext'

export default ({route, navigation}) => {
    const[user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    return(
        <View style={style.form}>
            <Text>Name:</Text>
            <TextInput 
                style={style.input}
                onChangeText={name => setUser(...user, name)}
                placeholder=" Informe um nome"
                value={user.name}
            />
            
            <Text>Email:</Text>
            <TextInput 
                style={style.input}
                onChange={email => setUser(...user, email)}
                placeholder=" Informe um email"
                value={user.email}
            />

            <Text>URL do Avatar:</Text>
            <TextInput 
                style={style.input}
                onChange={avatarUrl => setUser(...user, avatarUrl)}
                placeholder=" Insira uma url para o avatar"
                value={user.avatarUrl}
            />
            <Button 
                title="Salvar" 
                onPress={() => {
                    dispatch({
                        type :user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form :{
        padding: 12,
    },
    input:{
        height:40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 12,
    }
})
