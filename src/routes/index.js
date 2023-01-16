import {View, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import {AuthContext} from '../contexts';

export default function Routes() {
  const {signed,loading} = useContext(AuthContext);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#36393f',
        }}>
        <ActivityIndicator size={50} color={'#dd0808'} />
      </View>
    );
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
}
