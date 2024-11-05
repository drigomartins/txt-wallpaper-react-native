import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';
import RTNDeviceWallpaper from 'react-native-device-wallpaper-manager/js/NativeDeviceWallpaper';

import Ionicons from '@expo/vector-icons/Ionicons';
import {
  ActivityIndicator,
  Modal,
  ToastAndroid,
  NativeModules,
} from 'react-native';

import { TemplateRoot } from '@/presentation/template';
import { useTheme } from '@/presentation/context';

import {
  CenteredView,
  ContainerBannerView,
  ContainerLoadingView,
  ContainerView,
  FadeView,
  ImageBannerView,
  ImageView,
  ModalView,
  PressableView,
  TextSetView,
  TextView,
} from './style';
import { Props } from './type';

const interstitial = InterstitialAd.createForAdRequest(
  'ca-app-pub-6202074218659375/4790841062'
);

export const Item: React.FC<Props> = ({ navigation }) => {
  const { wallpaper, theme, category } = useTheme();
  const [loading, setLoading] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const setWallpaperView = async (
    type: 'lock' | 'system' | 'both' = 'both'
  ) => {
    try {
      interstitial.loaded && interstitial.show();
      setModalVisible(!modalVisible);
      setLoading(true);
      const jsonValue = JSON.stringify(wallpaper);
      await AsyncStorage.setItem('wallpaper', jsonValue);
      await AsyncStorage.setItem('category', category);
      await RTNDeviceWallpaper?.setWallpaper(wallpaper.link, type);
      NativeModules.ToastAndroid.show(
        'Wallpaper updated successfully!',
        ToastAndroid.SHORT
      );
    } catch (error) {
    } finally {
      setLoading(false);
      return null;
    }
  };

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {}
    );
    interstitial.load();
    return unsubscribe;
  }, []);

  return (
    <TemplateRoot page="item" returnPage={navigation.navigate}>
      <ContainerBannerView>
        <ImageBannerView
          blurRadius={5}
          source={{
            uri: wallpaper.link,
          }}
        />
        <FadeView source={require('../../../../assets/fade-dark-mode.png')} />
      </ContainerBannerView>
      <ContainerView>
        <ImageView
          source={{
            uri: wallpaper.link,
          }}
        />
        <PressableView onPress={() => setModalVisible(!modalVisible)}>
          <TextSetView theme={theme}>Set as Wallpaper</TextSetView>
        </PressableView>
      </ContainerView>
      {loading && (
        <ContainerLoadingView>
          <ActivityIndicator
            size="large"
            color={theme === 'light' ? '#292d3e' : '#ffffff'}
          />
        </ContainerLoadingView>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CenteredView>
          <ModalView>
            <PressableView onPress={() => setWallpaperView('lock')}>
              <Ionicons
                name={'lock-closed-outline'}
                size={25}
                color={theme === 'light' ? '#ffffff' : '#292d3e'}
              />
              <TextView>Lock Screen</TextView>
            </PressableView>
            <PressableView onPress={() => setWallpaperView('system')}>
              <Ionicons
                name={'home-outline'}
                size={25}
                color={theme === 'light' ? '#ffffff' : '#292d3e'}
              />
              <TextView>Home Screen</TextView>
            </PressableView>
            <PressableView onPress={() => setWallpaperView('both')}>
              <Ionicons
                name={'albums-outline'}
                size={25}
                color={theme === 'light' ? '#ffffff' : '#292d3e'}
              />
              <TextView>Home & Lock Screen</TextView>
            </PressableView>
          </ModalView>
        </CenteredView>
      </Modal>
    </TemplateRoot>
  );
};
