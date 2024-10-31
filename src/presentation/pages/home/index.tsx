import React, { useEffect, useState } from 'react';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';
import { FlatList } from 'react-native';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Category, WallpaperItem } from '@/domain';
import { wallpaperList } from '@/infra';
import { TemplateRoot } from '@/presentation/template';
import { useTheme } from '@/presentation/context/theme';

import {
  ContainerBannerView,
  ContainerImageView,
  ContainerView,
  ContentAds,
  FadeView,
  ImageBannerView,
  ImageView,
  PressableView,
  TextView,
} from './style';
import { Props } from './type';

const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

export const Home: React.FC<Props> = ({ navigation }) => {
  const { setCategory, setWallpaper } = useTheme();
  const [filteredCategory, setFilteredCategory] = useState<Category[]>([]);

  const getRandom = (wallpaper: WallpaperItem[]): WallpaperItem => {
    return wallpaper[Math.floor(Math.random() * wallpaper.length)];
  };

  const getRandomImageByCategory = (category: Category): string => {
    const filterCategory = wallpaperList.filter(
      (data) => data.category === category
    );
    return getRandom(filterCategory).link;
  };

  const getRandomImage = (): string => {
    return getRandom(wallpaperList).link;
  };

  const getCategoryName = (category: Category): string => {
    const filterCategory = wallpaperList.filter(
      (data) => data.category === category
    );
    return filterCategory[0].name;
  };

  const getCategoryList = (): void => {
    const filterCategory = wallpaperList.map((data) => data.category);
    setFilteredCategory(
      filterCategory.reduce(function (a: any, b: any) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
      }, [])
    );
  };

  const getStorageInfo = async (): Promise<void> => {
    try {
      const value = await AsyncStorage.getItem('wallpaper');
      const categoryName = await AsyncStorage.getItem('category');
      await AsyncStorage.removeItem('wallpaper');
      await AsyncStorage.removeItem('category');
      if (value) {
        setWallpaper(JSON.parse(value));
        setCategory(categoryName);
        navigation.navigate('Item');
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getStorageInfo();
    getCategoryList();

    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {}
    );
    interstitial.load();
    return unsubscribe;
  }, []);

  return (
    <TemplateRoot page="home" returnPage={navigation.navigate}>
      <ContainerBannerView>
        <ImageBannerView
          blurRadius={5}
          source={{
            uri: getRandomImage(),
          }}
        />
        <FadeView source={require('../../../../assets/fade-dark-mode.png')} />
      </ContainerBannerView>
      <ContainerImageView>
        <ContentAds>
          <BannerAd
            unitId={'ca-app-pub-6202074218659375/5711086781'}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </ContentAds>
      </ContainerImageView>
      <ContainerView>
        <FlatList
          data={filteredCategory}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginLeft: '-2%',
          }}
          keyExtractor={(item, index) => `key-${index}`}
          removeClippedSubviews={true}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <PressableView
              onPress={() => {
                navigation.navigate('List');
                setCategory(item);
              }}
            >
              <ImageView
                source={{
                  uri: getRandomImageByCategory(item),
                }}
              />
              <TextView>{getCategoryName(item)}</TextView>
            </PressableView>
          )}
        />
      </ContainerView>
    </TemplateRoot>
  );
};
