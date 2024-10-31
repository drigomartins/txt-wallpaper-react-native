import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useTheme } from '@/presentation/context';

import {
  AlignTitleView,
  ContainerView,
  HeaderView,
  PressableView,
  SubTitleView,
  TitleView,
  ToggleThemeView,
  LogoView,
} from './style';

type PageContextType = 'home' | 'list' | 'item';

interface Props extends React.PropsWithChildren {
  page: PageContextType;
  returnPage?: (data: string) => void;
}

export const TemplateRoot: React.FC<Props> = ({
  children,
  page,
  returnPage,
}) => {
  const { theme, setTheme, currentPage } = useTheme();

  const getTheme = (theme: string, light: string, dark: string): string => {
    return theme === 'light' ? light : dark;
  };

  return (
    <SafeAreaView>
      <ContainerView theme={theme}>
        <StatusBar
          animated={true}
          backgroundColor={getTheme(theme, '#f3f2f8', '#0F2027')}
          style={getTheme(theme, 'dark', 'light')}
        />
        <HeaderView>
          {page === 'home' && (
            <AlignTitleView>
              {/* <SubTitleView theme={theme}>STRAY KIDS</SubTitleView> */}
              <LogoView source={require('../../../assets/logo.png')} />
              <TitleView theme={theme}>WALLPAPER</TitleView>
            </AlignTitleView>
          )}
          {page === 'list' && (
            <AlignTitleView>
              <PressableView onPress={() => returnPage && returnPage('Home')}>
                <Ionicons
                  name={'return-up-back'}
                  size={25}
                  color={theme === 'light' ? '#292d3e' : '#ffffff'}
                />
              </PressableView>
            </AlignTitleView>
          )}
          {page === 'item' && (
            <AlignTitleView>
              <PressableView onPress={() => returnPage && returnPage('List')}>
                <Ionicons
                  name={'return-up-back'}
                  size={25}
                  color={theme === 'light' ? '#292d3e' : '#ffffff'}
                />
              </PressableView>
            </AlignTitleView>
          )}
          <ToggleThemeView
            onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <Ionicons
              name={getTheme(theme, 'moon', 'sunny')}
              size={25}
              color={theme === 'light' ? '#292d3e' : '#ffffff'}
            />
          </ToggleThemeView>
        </HeaderView>
        {children}
      </ContainerView>
    </SafeAreaView>
  );
};
