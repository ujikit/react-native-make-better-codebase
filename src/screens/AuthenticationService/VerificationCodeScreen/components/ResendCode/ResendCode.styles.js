//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../../../configs';
import { FONT_HEADLINE_H6, FONT_HEADLINE_H5, FONT_BODY3 } from '../../../../../configs/fonts';

const marginTopPerText = 8;
const ResendCodeStyles = StyleSheet.create({
  resendInActiveText: {
    ...FONT_BODY3,
    color: COLORS.black50,
    marginTop: 8,
  },
  resendActiveText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryOrange,
    marginTop: 8,
  },
  centerText: { textAlign: 'center' },
});

export default ResendCodeStyles;
