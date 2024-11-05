import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const TextView = styled.Text`
  width: 100%;
  color: #fff;
  margin-top: -60px;
  padding: 20px;
  font-size: 20px;
  text-shadow: #000 1px 1px 10px;
`;
export const ContainerView = styled.ScrollView`
  width: 100%;
  height: 100%;
  padding: 0px 25px 0px;
`;
export const PressableView = styled.Pressable`
  width: 100%;
  max-width: 48%;
  height: 300px;
  border-radius: 20px;
  margin-bottom: 15px;
  background-color: #fff;
  margin: 2%;
`;
export const ImageView = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const ContentAds = styled.View`
  margin-top: 10px;
  margin-bottom: 5px;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  background-color: #fff;
`;
export const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
