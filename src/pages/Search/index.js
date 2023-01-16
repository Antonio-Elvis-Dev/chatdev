import {View, Text} from 'react-native';
import React from 'react';

import {Container, SearchUser, SearchText} from './styled';

export default function Search() {
  return (
    <Container>
      <SearchUser placeholder={'Pesquisar'} />
      
    </Container>
  );
}
