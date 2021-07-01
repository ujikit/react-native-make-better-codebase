//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_HEADLINE_H6 } from '../../configs/fonts';

//variable valu
const container = {
  alignItems: 'center',
  borderRadius: 4,
  justifyContent: 'center',
  padding: 16,
};
const text = {
  ...FONT_HEADLINE_H6,
  lineHeight: 18,
};

export default StyleSheet.create({
  containerFilled: {
    ...container,
    backgroundColor: COLORS.primaryOrange,
  },
  containerGhost: {
    ...container,
    backgroundColor: COLORS.primaryWhite,
    borderWidth: 1,
    borderColor: COLORS.primaryOrange,
  },
  containerNude: {
    ...container,
    backgroundColor: COLORS.transparent,
  },
  containerDisableFilled: {
    ...container,
    backgroundColor: COLORS.black50,
  },
  containerDisableGhost: {
    ...container,
    backgroundColor: COLORS.black50,
    borderWidth: 1,
    borderColor: COLORS.black80,
  },
  containerDisableNude: {
    ...container,
    backgroundColor: COLORS.transparent,
  },
  textFilled: {
    ...text,
    color: COLORS.primaryWhite,
  },
  textGhost: {
    ...text,
    color: COLORS.primaryOrange,
  },
  textNude: {
    ...text,
    color: COLORS.primaryOrange,
  },
  textDisableFilled: {
    ...text,
    color: COLORS.black80,
  },
  textDisableGhost: {
    ...text,
    color: COLORS.black60,
  },
  textDisableNude: {
    ...text,
    color: COLORS.black60,
  },
  wrapContainer: {
    overflow: 'hidden',
    width: null,
    borderRadius: 4,
  },
});
