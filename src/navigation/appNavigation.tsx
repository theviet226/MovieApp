import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import MovieScreen from '../screens/movieScreen';
import PersonScreen from '../screens/personScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal', 
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
      <Stack.Screen name="Person" component={PersonScreen}/>
    </Stack.Navigator>
  );
};

export default AppNavigation;
