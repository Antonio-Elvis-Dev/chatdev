import {View, Text} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
// import NewPost from '../pages/NewPost';
// import PostUser from '../pages/PostsUser';
import Search from '../pages/Search';

export default function AppRoutes() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Search' component={Search}/>
      <Tab.Screen name='Profile' component={Profile}/>
      
    </Tab.Navigator>
  );
}
