import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #36393f;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
font-size: 50px;
color: #ffffff;
font-weight: bold;
font-style: italic;
`;

export const SubTitle = styled.Text`
color:#e52246;
`;

export const Input = styled.TextInput`
background-color: #ffffff;
border-radius: 10px;
margin-top: 10px;
width: 80%;
height: 45px;
padding: 5px;
padding-left: 15px;
font-size: 16px;
justify-content: center;
`;

export const Button = styled.TouchableOpacity`
background-color: #428cfd;
border-radius: 10px;
margin-top: 10px;
width: 80%;
height: 45px;
padding: 5px;
font-size: 16px;
align-items: center;
justify-content: center;
`;

export const ButtonText = styled.Text`
color: #FFF;
font-size: 22px;
`;

export const SignUpButton = styled.TouchableOpacity`
width: 100%;
margin-top: 10px;
justify-content: center;
align-items: center;
`

export const SignUpText = styled.Text`
  color: #DDD;
  font-size: 18px;
  font-style: italic;
`