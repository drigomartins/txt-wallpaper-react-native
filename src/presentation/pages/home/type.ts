import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Item: undefined;
};
export interface Props
  extends NativeStackScreenProps<RootStackParamList, 'Home'> {}
