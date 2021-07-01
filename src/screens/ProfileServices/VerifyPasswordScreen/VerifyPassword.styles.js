//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_BODY3,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
} from '../../../configs/fonts';

const VerifyPasswordStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  headerButton: {
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlack,
    textTransform: 'capitalize',
  },
  textInputStyles: {
    ...FONT_HEADLINE_H6,
    paddingLeft: 0,
  },
  inputBox: {
    borderBottomColor: COLORS.black40,
  },
  descText: {
    ...FONT_BODY3,
    color: COLORS.black80,
  },
});

export default VerifyPasswordStyles;
