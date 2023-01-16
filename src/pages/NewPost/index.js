import React, {useState} from 'react';
import {Container, Input} from './styled';
export default function NewPost() {
  const [post, setPost] = useState('');
  return (
    <Container>
      <Input
        placeholder="Informe o problema"
        placeholderTextColor={'#ddd'}
        value={post}
        onChangeText={text => setPost(text)}
        autoCorrect={false}
        multiline={true}
        maxLength={500}
      />
    </Container>
  );
}
