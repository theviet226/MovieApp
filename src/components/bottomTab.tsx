import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import SearchScreen from '../screens/searchScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import AccountScreen from '../screens/accountScreen';
import AppNavigation from '../navigation/appNavigation';



const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 5,
          backgroundColor: '#171717',
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#eab308',
        tabBarInactiveTintColor: '#7f8c8d',
      }}>
      <Tab.Screen
        name="Home"
        component={AppNavigation}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={'#fff'} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="search" size={24} color={'#fff'} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="user" size={24} color={'#fff'} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
