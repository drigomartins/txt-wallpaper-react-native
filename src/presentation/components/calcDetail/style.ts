import { StyleProp, ViewStyle } from 'react-native';
import { AnimatedStyle } from 'react-native-reanimated';
import styled from 'styled-components/native';

type Props = {
  theme: string;
};

export const animatedContentStyle = (
  theme: string
): StyleProp<AnimatedStyle<StyleProp<ViewStyle>>> => {
  return {
    width: '100%',
    height: 400,
    padding: 10,
    backgroundColor: theme === 'light' ? '#FFF' : '#292d3e',
    position: 'absolute',
    bottom: 0,
  };
};

export const animatedShadowStyle = (
  theme: string
): StyleProp<AnimatedStyle<StyleProp<ViewStyle>>> => {
  return {
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme === 'light' ? '#00000050' : '#00000099',
  };
};
export const ContentInfoView = styled.View`
  padding: 10px;
  margin-top: 20px;
  background-color: #65656550;
  border-radius: 10px;
`;
export const TextView = styled.Text<Props>`
  font-size: 10px;
  color: ${(props) => (props.theme === 'light' ? '#525252' : '#FFF')};
`;
export const TitleView = styled.Text<Props>`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${(props) => (props.theme === 'light' ? '#292d3e' : '#FFF')};
`;
export const InfoView = styled.Text<Props>`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${(props) => (props.theme === 'light' ? '#292d3e' : '#FFF')};
`;
export const ContentCloseView = styled.Text`
  padding: 10px;
  margin-top: 20px;
  background-color: #656565;
  border-radius: 20px;
  text-align: center;
  font-weight: 800;
  color: #fff;
`;
export const ContentAlignView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const BoxView = styled.View`
  width: 50%;
`;
