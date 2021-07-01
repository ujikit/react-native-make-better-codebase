//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_HEADLINE_H4, FONT_HEADLINE_H6 } from '../../configs/fonts';

const ForceUpdateStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...FONT_HEADLINE_H4,
    color: COLORS.black90,
    marginTop: 18,
  },
  desc: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black80,
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 45,
  },
  buttonContainer: {
    marginTop: 48,
  },
});

export default ForceUpdateStyles;
