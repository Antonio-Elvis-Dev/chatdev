import {
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useState} from 'react';

import {
  Container,
  Title,
  SubTitle,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpText,
} from './styles';

import {AuthContext} from '../../contexts';

export default function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signUp, signIn, loadingAuth} = useContext(AuthContext);

  function toggleLogin() {
    setLogin(!login);

    setEmail('');
    setName('');
    setPassword('');
  }

  function handleSignIn() {
    if (email === '' || password === '') {
      alert('Preencha todo os dados');
      return;
    }

    // fazer login
    signIn(email, password);
  }
  function handleSignUp() {
    if (email === '' || password === '' || name === '') {
      alert('Preencha todo os dados');
      return;
      // fazer cadastro
    }
    signUp(name, email, password);
  }

  if (login) {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container onPress={() => Keyboard.dismiss()}>
          <Title>
            Dev<SubTitle>Post</SubTitle>
          </Title>
          <Input
            placeholder="teste@gmail.com"
            value={email}
            onChangeText={text => setEmail(text)}
            placeholderTextColor="#838995"
          />
          <Input
            placeholder="*********"
            value={password}
            onChangeText={text => setPassword(text)}
            placeholderTextColor="#838995"
          />
          <Button onPress={handleSignIn}>
            {loadingAuth ? (
              <ActivityIndicator size={20} color="#fff" />
            ) : (
              <ButtonText>Acessar</ButtonText>
            )}
          </Button>
          <SignUpButton onPress={toggleLogin}>
            <SignUpText>Criar uma conta</SignUpText>
          </SignUpButton>
        </Container>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container onPress={() => Keyboard.dismiss()}>
        <Title>
          Dev<SubTitle>Post</SubTitle>
        </Title>
        <Input
          placeholder="Seu nome"
          value={name}
          onChangeText={text => setName(text)}
          placeholderTextColor="#838995"
        />
        <Input
          placeholder="teste@gmail.com"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor="#838995"
        />
        <Input
          placeholder="*********"
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor="#838995"
        />
        <Button onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <ButtonText>Cadastrar</ButtonText>
          )}
        </Button>
        <SignUpButton onPress={toggleLogin}>
          <SignUpText>Já possuo uma conta</SignUpText>
        </SignUpButton>
      </Container>
    </TouchableWithoutFeedback>
  );
}
