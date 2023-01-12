import {View, Text, Keyboard, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
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
export default function Login() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container onPress={() => Keyboard.dismiss()}>
        <Title>
          Dev<SubTitle>Post</SubTitle>
        </Title>
        <Input placeholder="teste@gmail.com" />
        <Input placeholder="*********" />
        <Button>
          <ButtonText>Acessar</ButtonText>
        </Button>
        <SignUpButton>
          <SignUpText>Criar uma conta</SignUpText>
        </SignUpButton>
      </Container>
    </TouchableWithoutFeedback>
  );
}
