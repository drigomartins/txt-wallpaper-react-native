import React, { useEffect, useState } from 'react';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';
import { FlatList } from 'react-native';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

import { WallpaperItem } from '@/domain';
import { wallpaperList } from '@/infra';
import { TemplateRoot } from '@/presentation/template';
import { useTheme } from '@/presentation/context';

import { ContainerView, ContentAds, ImageView, PressableView } from './style';
import { Props } from './type';

const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

export const List: React.FC<Props> = ({ navigation }) => {
  const { category, setWallpaper } = useTheme();
  const [filteredWallpaper, setFilteredWallpaper] = useState<WallpaperItem[]>(
    []
  );

  const getCategoryList = (): void => {
    const filterCategory = wallpaperList
      .filter((data) => data.category === category)
      .sort(() => 0.5 - Math.random());
    setFilteredWallpaper(
      filterCategory.reduce(function (a: any, b: any) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
      }, [])
    );
  };

  useEffect(() => {
    getCategoryList();

    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {}
    );
    interstitial.load();
    return unsubscribe;
  }, [category]);

  return (
    <TemplateRoot page="list" returnPage={navigation.navigate}>
      <ContainerView>
        <ContentAds>
          <BannerAd
            unitId={'ca-app-pub-6202074218659375/5711086781'}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </ContentAds>
        <FlatList
          data={filteredWallpaper}
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
                setWallpaper(item);
                navigation.navigate('Item');
              }}
            >
              <ImageView
                source={{
                  uri: item.link,
                }}
              />
            </PressableView>
          )}
        />
      </ContainerView>
    </TemplateRoot>
  );
};
