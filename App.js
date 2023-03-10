import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './src/routes';
import AuthProvider from './src/contexts';

import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          backgroundColor="#36393f"
          barStyle={'light-content'}
          translucent={false}
        />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
