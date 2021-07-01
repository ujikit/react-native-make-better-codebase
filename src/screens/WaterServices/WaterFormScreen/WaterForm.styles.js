//package import
import { StyleSheet, Platform } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_BODY3,
  FONT_BODY4,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
} from '../../../configs/fonts';

const WaterFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  headerButton: {
    borderRadius: 40 / 2,
  },
  headerTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlack,
  },
  wrapContent: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.primaryWhite,
  },
  WrapTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  wrapBorder: {
    width: '100%',
    height: 8,
    backgroundColor: COLORS.black30,
  },
  descText: {
    ...FONT_BODY3,
    color: COLORS.black80,
  },
  labelText: {
    ...FONT_BODY4,
    color: COLORS.primaryWhite,
  },
  subTitleText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryBlack,
  },
  wrapLabel: {
    backgroundColor: COLORS.green50,
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 50,
  },
  imagePhoto: {
    width: '100%',
    height: 240,
    backgroundColor: COLORS.black30,
  },
  inputViewOnly: {
    borderBottomWidth: 0,
  },
  wrapFooterButton: {
    position: Platform.OS === 'ios' ? 'absolute' : 'relative',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: COLORS.primaryWhite,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default WaterFormStyles;
