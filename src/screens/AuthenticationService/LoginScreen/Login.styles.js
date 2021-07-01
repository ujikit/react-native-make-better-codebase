//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS, STYLES } from '../../../configs';
import {
  FONT_BODY2,
  FONT_BODY3,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
} from '../../../configs/fonts';

const lineHeight = 23;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  backWrap: {
    position: 'absolute',
    left: 0,
    borderRadius: 20,
    marginLeft: 4,
  },
  headerContainer: {
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backContainer: {
    width: 40,
    height: 40,
  },
  headerLeftButton: {
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    ...FONT_HEADLINE_H4,
  },
  content: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
    paddingTop: 70,
  },
  textTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlack,
  },
  textDesc: {
    ...FONT_BODY3,
    color: COLORS.black80,
  },
  textBlur: {
    ...FONT_BODY3,
    color: COLORS.black70,
  },
  textLink: {
    ...FONT_BODY3,
    color: COLORS.primaryBlue,
  },
  wrapCenter: {
    width: '100%',
    alignItems: 'center',
  },
  wrapButton: {
    width: '48%',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textButton: {
    ...FONT_BODY2,
    color: COLORS.primaryWhite,
  },
  buttonFilledExpand: {
    backgroundColor: COLORS.red60,
  },
  boxStyles: {
    borderBottomColor: COLORS.black60,
    borderColor: COLORS.primaryWhite,
    padding: 0,
    paddingVertical: 8,
  },
  boxErrorStyles: {
    borderBottomColor: COLORS.red50,
  },
  textInputStyles: {
    ...FONT_HEADLINE_H6,
    paddingLeft: 0,
  },
  textLableStyles: {
    textTransform: 'none',
  },
  forgotPasswordText: {
    ...FONT_BODY3,
    marginLeft: 'auto',
    color: COLORS.black80,
  },
  supportText: {
    alignSelf: 'center',
  },
  supportTeamContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  supportTeamText1: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black60,
    lineHeight: lineHeight,
    textAlign: 'center',
  },
  supportTeamText2: { color: COLORS.primaryOrange, textAlign: 'center' },
  imageLogo: {
    width: 64,
    height: 64,
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    paddingTop: 32,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
  },
  wrapCheckedCircle: { flex: 3, justifyContent: 'center' },
  wrapVerificationSuccess: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapTextVerificationSuccess: {
    ...FONT_HEADLINE_H4,
    ...STYLES.mrt12,
    ...STYLES.mrb12,
    textAlign: 'center',
  },
  wrapEmailHasBeenChanged: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapTextEmailHasBeedChanged: {
    ...FONT_BODY3,
    color: COLORS.black80,
    textAlign: 'center',
    marginTop: 10,
  },
  wrapModalButton: {
    flex: 2,
    justifyContent: 'center',
  },
});

export default styles;
