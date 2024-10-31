import React from 'react';
import { Pressable } from 'react-native';

import { MonthsView } from './style';

type Props = {
  value: string;
  onPress: () => void;
};

export const PressableOption: React.FC<Props> = (props) => {
  return (
    <Pressable {...props}>
      <MonthsView>{props?.value}</MonthsView>
    </Pressable>
  );
};
