//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../../configs';
import { FONT_BODY5, FONT_HEADLINE_H6 } from '../../../../configs/fonts';

export default StyleSheet.create({
  containerButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryBlack,
  },
  badgeStyle: {
    width: 24,
    height: 24,
    backgroundColor: COLORS.black40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  descText: {
    ...FONT_BODY5,
    color: COLORS.black70,
  },
  backgroundBlack10: {
    backgroundColor: COLORS.black20,
  },
});
