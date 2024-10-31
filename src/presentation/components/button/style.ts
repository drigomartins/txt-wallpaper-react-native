import styled from 'styled-components/native';

type Props = {
  active: boolean;
};

export const StyledView = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;
export const StyledButton = styled.View<Props>`
  width: 100%;
  height: 46px;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#000' : '#656565')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledText = styled.Text`
  color: #fff;
  font-size: 20px;
`;
