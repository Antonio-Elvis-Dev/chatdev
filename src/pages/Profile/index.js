import {ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../../contexts';
import Header from '../../components/Header';

import {
  Container,
  EmailText,
  Image,
  LogOutButton,
  LogOutButtonText,
  NameText,
  UpdateButton,
  UpdateButtonText,
} from './styles';

export default function Profile() {
  const {signOut, user, loadingAuth} = useContext(AuthContext);

  async function handleSignOut() {
    signOut();
  }
  return (
    <Container>
      <Header />
      <Image source={require('../../assets/avatar.png')} />
      <NameText>{user?.nome}</NameText>
      <EmailText>{user?.email}</EmailText>
      <UpdateButton>
        <UpdateButtonText>Atualizar Perfil</UpdateButtonText>
      </UpdateButton>
      <LogOutButton onPress={handleSignOut}>
        <LogOutButtonText>Sair</LogOutButtonText>
      </LogOutButton>
    </Container>
  );
}
