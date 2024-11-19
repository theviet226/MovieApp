import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AccountScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>AccountScreen</Text>
      <Button title='login' onPress={() => navigation.navigate('Login')}/>
    </View>
  )
}

export default AccountScreen