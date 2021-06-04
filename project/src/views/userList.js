import React, { useContext } from 'react'
import { Alert } from 'react-native'
import {View, Text, FlatList, Button} from 'react-native'
import { ListItem, Icon} from 'react-native-elements'
import UsersContext from '../context/usersContext' 
//import users from '../data/users'

export default props => {
    
  const { state, dispatch } = useContext(UsersContext)
  

  function confirmUserDelection(user) {
      Alert.alert('Excluir usuário', 'Deseja excluir o usuário?',[
          {
              text: 'Sim',
              onPress() {
                  dispatch({
                      type: 'deleteUser',
                      payload :user,
                  })
              }
          },
          {
              text: 'Não'
          }
      ])
  }

  function getActions(user) {
    return(
        <>
            <Button 
                onPress={() => props.navigation.navigate('Form',user)}
                type="clear"
                icon={<Icon  name="edit" size={25} color="orange"/>}
            />
             <Button 
                onPress={() => confirmUserDelection(user)}
                type="clear"
                icon={<Icon  name="delete" size={25} color="red"/>}
            />
        </>
    )
  }


  function getUserItem({ item: user }) {
        return(
            <ListItem 
                    leftAvatar={{source :{ uri: user.avatarUrl }}}
                    key={user.id}
                    title={user.name}
                    subtitle={user.email}
                    bottomDivider
                    rightElement={getActions(user)}
                    onPress={() => props.navigation.navigate('Form', user)}
            />
         )  
    }

    return(
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}

