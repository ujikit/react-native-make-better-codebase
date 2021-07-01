//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_HEADLINE_H6,
  FONT_HEADLINE_H5,
  FONT_BODY3,
} from '../../../configs/fonts';

const marginTopPerText = 8;
const VerificationCodeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  headerContainer: {
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerLeftButton: {
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 36,
  },
  contentText: {
    ...FONT_BODY3,
    color: COLORS.black90,
    marginTop: marginTopPerText,
  },
  didNotReceiveText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black90,
    marginTop: 18,
  },
  emailText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black90,
    marginTop: marginTopPerText,
  },
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

export default VerificationCodeStyles;
