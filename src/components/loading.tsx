import { View, Text, Dimensions, ActivityIndicator } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'

const { width,height} = Dimensions.get('window')
const Loading = () => {
  return (
    
      <View style={{height,width, flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
        <ActivityIndicator size="large" color="#eab308" />
      </View>
    
  )
}
export default Loading