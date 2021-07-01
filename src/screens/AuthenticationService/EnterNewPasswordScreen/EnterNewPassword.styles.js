//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_HEADLINE_H6,
  FONT_BODY3,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H5,
  FONT_BODY5,
} from '../../../configs/fonts';

const lineHeight = 23;
const EnterNewPasswordStyles = StyleSheet.create({
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
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  forgotPasswordText: {
    ...FONT_HEADLINE_H4,
    color: COLORS.black,
    lineHeight: lineHeight,
  },
  forgotPasswordDescriptionText: {
    ...FONT_BODY3,
    color: COLORS.black80,
    marginTop: 8,
    lineHeight: lineHeight,
  },
  forgotPasswordErrorText: {
    ...FONT_BODY5,
    color: COLORS.red50,
    marginTop: 8,
    lineHeight: lineHeight,
  },
  emailAddressText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black,
    marginTop: 31,
    lineHeight: lineHeight,
  },
  styleWrapEmailInput: {
    paddingHorizontal: 8,
    marginTop: 6,
  },
  styleWrapButtonSend: {
    marginTop: 20,
  },
  buttonSendText: {
    ...FONT_HEADLINE_H5,
    color: COLORS.primaryWhite,
  },
  supportTeamContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  supportTeamText1: {
    ...FONT_HEADLINE_H5,
    color: COLORS.black80,
    lineHeight: lineHeight,
  },
  supportTeamText2: { color: COLORS.primaryOrange, textAlign: 'center' },
});

export default EnterNewPasswordStyles;
