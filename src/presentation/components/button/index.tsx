import React from 'react';

import { StyledButton, StyledText, StyledView } from './style';

type Props = {
  title: string;
  active: boolean;
};

export const Button: React.FC<Props> = (props) => {
  return (
    <StyledView>
      <StyledButton active={props?.active}>
        <StyledText>{props?.title}</StyledText>
      </StyledButton>
    </StyledView>
  );
};
