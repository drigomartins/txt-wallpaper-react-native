import React from 'react';

import { useTheme } from '@/presentation/context';

import { StyledIcon, StyledText, StyledTextInput, StyledView } from './style';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  money?: boolean;
  title: string;
  percent?: boolean;
};

export const Input: React.FC<Props> = (props) => {
  const { theme } = useTheme();

  return (
    <StyledView theme={theme}>
      <StyledText theme={theme}>{props?.title}</StyledText>
      {props?.money && <StyledIcon theme={theme}>R$</StyledIcon>}
      {props?.percent && <StyledIcon theme={theme}>%</StyledIcon>}
      <StyledTextInput {...props} money={props?.money} theme={theme} />
    </StyledView>
  );
};
