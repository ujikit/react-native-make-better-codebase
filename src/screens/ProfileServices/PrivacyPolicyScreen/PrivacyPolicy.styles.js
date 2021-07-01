//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
  FONT_BODY1,
  FONT_BODY3,
} from '../../../configs/fonts';

const PrivacyPolicyStyles = StyleSheet.create({
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
  backContainer: {
    width: 40,
    height: 40,
  },
  headerContainer: {
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlack,
    marginLeft: 32,
  },
  wrapContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  desc: {
    ...FONT_BODY3,
    color: COLORS.black80,
    lineHeight: 25,
  },
  logoStyles: {
    width: 142,
    height: 90,
  },
  greyBlock: {
    height: 15,
    width: '100%',
    backgroundColor: COLORS.black40,
    marginTop: 16,
  },
  titleText: {
    ...FONT_BODY1,
    fontWeight: 'bold',
  },
  contentDesc: {
    ...FONT_BODY3,
    lineHeight: 23,
  },
  contentTitle: {
    ...FONT_HEADLINE_H6,
  },
  contentTitle2: {
    ...FONT_BODY1,
    fontWeight: 'bold',
  },
  fontBold: {
    fontWeight: 'bold',
  },
  closing: {
    ...FONT_HEADLINE_H6,
    alignSelf: 'center',
    marginBottom: 24,
  },
  textBlue: {
    color: COLORS.blue50,
  },
  fontDate: {
    ...FONT_BODY1,
    color: COLORS.black80,
  },
  fontMonth: {
    ...FONT_BODY1,
    fontWeight: 'bold',
    color: COLORS.black80,
  },
});

export default PrivacyPolicyStyles;
