import styled from 'styled-components/native';

type Props = {
  theme: string;
};

export const ImageView = styled.Image`
  width: 98%;
  height: 550px;
  border-radius: 10px;
  margin-left: 1%;
`;
export const ContainerView = styled.View`
  width: 100%;
  height: 100%;
  padding: 25px 25px;
  margin-top: -350px;
  display: flex;
  align-items: center;
`;
export const ContainerBannerView = styled.View`
  width: 100%;
  height: 350px;
  margin-bottom: 15px;
  background-color: #fff;
  filter: blur(1.5rem);
  position: relative;
`;
export const ContainerTextView = styled.View`
  width: 100%;
  height: 100px;
  padding: 0px 25px;
  margin-top: -240px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 15px;
`;
export const ImageBannerView = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
export const FadeView = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;
export const TextView = styled.Text`
  width: auto;
  height: 35px;
  color: #fff;
  padding: 7px 10px;
  font-size: 10px;
  background-color: #ffffff;
  color: #292d3e;
  border-radius: 50px;
  font-weight: bold;
  font-size: 15px;
`;
export const TextSetView = styled.Text<Props>`
  width: auto;
  height: 35px;
  color: #fff;
  padding: 7px 20px;
  font-size: 10px;
  background-color: ${(props) =>
    props.theme === 'light' ? '#898da1' : '#9f9f9f'};
  color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#292d3e')};
  border-radius: 50px;
  font-weight: bold;
  font-size: 15px;
  margin-top: 20px;
`;
export const PressableView = styled.Pressable`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;
export const ContainerLoadingView = styled.View`
  width: 100%;
  height: 100%;
  padding: 25px 25px;
  background-color: #292d3e50;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CenteredView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  background-color: #292d3e90;
`;
export const ModalView = styled.View`
  width: 70%;
  background-color: #ffffff;
  padding: 5px;
  border-radius: 10px;
`;
