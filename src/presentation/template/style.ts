import { Platform, StatusBar as StatusBarReact } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  theme: string;
};

const getStatusBarHeight = (): number => {
  if (Platform.OS === 'android') {
    return (StatusBarReact.currentHeight || 0) + 20;
  }
  return 20;
};

export const ContainerView = styled.View<Props>`
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.theme === 'light' ? '#f3f2f8' : '#0F2027'};
`;
export const HeaderView = styled.View<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: ${getStatusBarHeight()}px 25px 20px;
`;
export const ImageView = styled.Image`
  width: 100%;
  height: 70px;
  border-radius: 10px;
`;
export const ToggleThemeView = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
`;
export const AlignTitleView = styled.View``;

export const SubTitleView = styled.Text<Props>`
  font-size: 12px;
  color: ${(props) => (props.theme === 'light' ? '#898da1' : '#9f9f9f')};
`;
export const TitleView = styled.Text<Props>`
  font-size: 18px;
  font-weight: 300;
  width: 200px;
  color: ${(props) => (props.theme === 'light' ? '#292d3e' : '#ffffff')};
`;
export const PressableView = styled.Pressable``;

export const LogoView = styled.Image<Props>`
  width: 80px;
  height: 20px;
`;
