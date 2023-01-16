import React, {useContext} from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { AuthContext } from '../../contexts';
import {
  Container,
  HeaderTop,
  HeaderTopSubText,
  HeaderTopText,
  ButtonNewPost,
} from './styles';

import Header from '../../components/Header';

export default function Home() {

  const {handleNewPost} = useContext(AuthContext)

  return (
    <Container>
      <Header/>
      <ButtonNewPost onPress={handleNewPost}>
        <Feather name="edit-2" color={'#FFF'} size={30} />
      </ButtonNewPost>
    </Container>
  );
}
