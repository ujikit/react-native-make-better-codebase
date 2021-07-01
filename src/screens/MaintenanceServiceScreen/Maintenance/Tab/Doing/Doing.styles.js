//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../../../configs';
import {
  FONT_HEADLINE_H1,
  FONT_BODY1,
  FONT_HEADLINE_H6,
  FONT_BODY5,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H5,
} from '../../../../../configs/fonts';

const DoingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  wrapLoading: {
    flex: 1,
    justifyContent: 'center',
  },
  imageEmpty: {
    width: 160,
    height: 120,
  },
  wrapLoadingLoadMore: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DoingStyles;
