import React from 'react';
import {Text} from 'react-native';
import {ShareButton, ShareButtonText} from '../pages/NewPost/styled';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import NewPost from '../pages/NewPost';
import PostUser from '../pages/PostsUser';
import Search from '../pages/Search';
import Feather from 'react-native-vector-icons/Feather';

export default function AppRoutes() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function StackRoutes() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewPost"
          component={NewPost}
          options={{
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#36393f',
            },
            headerRight: () => (
              <ShareButton>
                <ShareButtonText>Compartilhar</ShareButtonText>
              </ShareButton>
            ),
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  color: '#fff',
                }}>
                Novo Post
              </Text>
            ),
          }}
        />
        <Stack.Screen
          name="PostUser"
          component={PostUser}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#36393f',
            },
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#202225',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={StackRoutes}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="search" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => {
            return <Feather name="user" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
