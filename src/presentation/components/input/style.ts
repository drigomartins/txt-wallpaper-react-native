import styled from 'styled-components/native';

type Props = {
  money?: boolean;
  percent?: boolean;
  theme: string;
};

type ThemeProps = {
  theme: string;
};

export const StyledView = styled.View<ThemeProps>`
  display: flex;
  width: 100%;
  background-color: ${(props) =>
    props.theme === 'light' ? '#f8f8ff' : '#5d6278'};
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 5px 15px;
  position: relative;
  margin-bottom: 20px;
`;
export const StyledText = styled.Text<ThemeProps>`
  color: ${(props) => (props.theme === 'light' ? '#808080' : '#ffffff')};
  font-size: 12px;
  text-align: left;
  width: 100%;
  padding-top: 5px;
`;
export const StyledIcon = styled.Text<ThemeProps>`
  color: ${(props) => (props.theme === 'light' ? '#808080' : '#ffffff')};
  font-size: 15px;
  text-align: left;
  position: absolute;
  left: 15px;
  top: 36px;
`;
export const StyledTextInput = styled.TextInput<Props>`
  text-align: left;
  width: 100%;
  height: 40px;
  color: ${(props) => (props.theme === 'light' ? '#000000' : '#ffffff')};
  padding-left: ${({ money, percent }) =>
    money ? '25px' : percent ? '25px' : '0px'};
`;
