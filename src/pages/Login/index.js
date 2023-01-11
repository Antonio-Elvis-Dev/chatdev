import {View, Text} from 'react-native';
import React from 'react';
import {Container, Title, SubTitle, Input, Button, ButtonText} from './styles';
export default function Login() {
  return (
    <Container>
      <Title>
        Dev<SubTitle>Post</SubTitle>
      </Title>
      <Input placeholder="teste@gmail.com" />
      <Input placeholder="*********" />
      <Button>
        <ButtonText>Acessar</ButtonText>
      </Button>
    </Container>
  );
}
