import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  FadeOutDown,
  LinearTransition,
} from 'react-native-reanimated';

import { useTheme } from '@/presentation/context';

import {
  BoxView,
  ContentAlignView,
  ContentCloseView,
  ContentInfoView,
  InfoView,
  TextView,
  TitleView,
  animatedShadowStyle,
  animatedContentStyle,
} from './style';

interface Props {
  dataCalc?: {
    ['product-value']: number;
    ['entry-value']: number;
    months: number;
    fees: number;
  };
  onClose: () => void;
}

export const CalcDetail: React.FC<Props> = ({ dataCalc, onClose }) => {
  const { theme } = useTheme();

  const productValue = dataCalc?.['product-value'] || 0;
  const entryValue = dataCalc?.['entry-value'] || 0;
  const months = dataCalc?.months || 0;
  const fees = dataCalc?.fees || 0;

  const total = productValue - entryValue;

  const portion = (total / months) * fees;

  const totalFees = portion * months;

  const formatValue = (data: number): string => {
    return data.toLocaleString('de-DE', { minimumFractionDigits: 2 });
  };

  return (
    <Animated.View
      layout={LinearTransition}
      entering={FadeIn}
      exiting={FadeOut}
      style={animatedShadowStyle(theme)}
    >
      <Animated.View
        layout={LinearTransition}
        entering={FadeInDown}
        exiting={FadeOutDown}
        style={animatedContentStyle(theme)}
      >
        <ContentInfoView>
          <TextView theme={theme}>Valor total a ser financiado:</TextView>
          <TitleView theme={theme}>R$ {formatValue(total)}</TitleView>
          <ContentAlignView>
            <BoxView>
              <TextView theme={theme}>Valor da Parcela:</TextView>
              <InfoView theme={theme}>R$ {formatValue(portion)}</InfoView>
            </BoxView>
            <BoxView>
              <TextView theme={theme}>Valor Total com Juros:</TextView>
              <InfoView theme={theme}>R$ {formatValue(totalFees)}</InfoView>
            </BoxView>
          </ContentAlignView>
          <ContentAlignView>
            <BoxView>
              <TextView theme={theme}>Número de Parcelas:</TextView>
              <InfoView theme={theme}>{months}</InfoView>
            </BoxView>
            <BoxView>
              <TextView theme={theme}>Taxa de Juros Mensal:</TextView>
              <InfoView theme={theme}>{formatValue(fees)}%</InfoView>
            </BoxView>
          </ContentAlignView>
        </ContentInfoView>
        <TouchableOpacity onPress={onClose}>
          <ContentCloseView>Fechar</ContentCloseView>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};
