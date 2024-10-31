import styled from 'styled-components/native';

type Props = {
  color: boolean;
};

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
export const ContentAds = styled.View`
  margin-top: 10px;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  background-color: #fff;
`;
export const ContainerImageView = styled.View`
  width: 100%;
  padding: 0px 25px 20px 25px;
  margin-top: -55px;
`;
export const ImageView = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
export const TextView = styled.Text`
  width: 100%;
  color: #fff;
  margin-top: -60px;
  padding: 20px;
  font-size: 20px;
  text-shadow: #000 1px 1px 10px;
`;
export const ContainerBannerView = styled.View`
  width: 100%;
  height: 150px;
  margin-bottom: 15px;
  background-color: #fff;
  filter: blur(1.5rem);
  position: relative;
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
