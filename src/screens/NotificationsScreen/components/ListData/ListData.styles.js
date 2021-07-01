//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../../configs';
import {
  FONT_HEADLINE_H6,
  FONT_BODY5,
  FONT_BODY3,
} from '../../../../configs/fonts';

const ListDataStyles = StyleSheet.create({
  itemIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    backgroundColor: COLORS.primaryOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapTitleAndStatus: { flex: 1, paddingLeft: 17 },
  wrapMainContent: {
    borderRadius: 0,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  textTitle: { ...FONT_HEADLINE_H6, color: COLORS.primaryBlack },
  textDesc: {
    ...FONT_BODY3,
    color: COLORS.black80,
  },
  textTime: {
    ...FONT_BODY5,
    color: COLORS.black60,
  },
});

export default ListDataStyles;
