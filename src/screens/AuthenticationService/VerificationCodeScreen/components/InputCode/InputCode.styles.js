//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../../../configs';
import { FONT_HEADLINE_H1, FONT_BODY3 } from '../../../../../configs/fonts';

const marginTopPerText = 5;
const InputCodeStyles = StyleSheet.create({
  wrapVerificationCodeInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  wrapItemVerificationCodeInput: { width: 48, marginHorizontal: 7 },
  verificationCodeInput: {
    ...FONT_HEADLINE_H1,
    fontSize: 36,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    paddingBottom: 5,
    color: COLORS.black,
  },
  errorVerificationCodeInput: {
    borderBottomColor: COLORS.red50,
  },
  invalidVerificationCodeText: {
    ...FONT_BODY3,
    color: COLORS.red50,
    marginTop: marginTopPerText,
  },
  centerText: { textAlign: 'center' },
});

export default InputCodeStyles;
