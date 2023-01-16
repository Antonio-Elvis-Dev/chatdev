import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #36393f;
  align-items: center;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  margin-top: 60px;
  border-radius: 100px;
`;

export const NameText = styled.Text`
  margin-top: 20px;
  font-size: 25px;
  color: #fff;
  font-style: italic;
  font-weight: bold;
`;

export const EmailText = styled.Text`
  margin-top: 5px;
  color: #fff;
  font-size: 18px;
`;
export const UpdateButton = styled.TouchableOpacity`
  height: 45px;
  width: 90%;
  margin-top: 20px;
  background-color: #428cfd;
  border-radius: 6px;
  justify-content: center;
`;
export const UpdateButtonText = styled.Text`
  color: #fff;
  font-size: 22px;
  font-style: italic;
  text-align: center;
  font-weight: bold;

`;
export const LogOutButton = styled.TouchableOpacity`
height: 45px;
  width: 90%;
  margin-top: 10px;
  background-color: #DDD;
  border-radius: 6px;
  justify-content: center;
`;
export const LogOutButtonText = styled.Text`
  color: #000000;
  font-size: 22px;
  font-style: italic;
  text-align: center;
  font-weight: bold;

`;
