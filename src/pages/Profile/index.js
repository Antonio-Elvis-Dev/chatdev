import {ActivityIndicator, Modal} from 'react-native';
import React, {useContext, useState} from 'react';
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

  const [modalVisible, setModalVisible] = useState(false);
  async function handleSignOut() {
    signOut();
  }
  return (
    <Container>
      <Header />
      <Image source={require('../../assets/avatar.png')} />
      <NameText>{user?.nome}</NameText>
      <EmailText>{user?.email}</EmailText>
      <UpdateButton onPress={{}
        // () => setModalVisible(true)
        }
        >
        <UpdateButtonText>Atualizar Perfil</UpdateButtonText>
      </UpdateButton>
      <LogOutButton onPress={handleSignOut}>
        <LogOutButtonText>Sair</LogOutButtonText>
      </LogOutButton>
      <Modal visible={modalVisible} animationType="slide" />
    </Container>
  );
}
