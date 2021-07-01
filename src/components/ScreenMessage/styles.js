import { StyleSheet } from 'react-native';
import { COLORS } from '../../configs';
import { FONT_HEADLINE_H4, FONT_BODY3 } from '../../configs/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  image: {
    height: 160,
    marginBottom: 12,
    width: 160,
  },
  title: {
    ...FONT_HEADLINE_H4,
    color: COLORS.black90,
    textAlign: 'center',
    marginBottom: 8,
  },
  desc: {
    ...FONT_BODY3,
    color: COLORS.black70,
    marginBottom: 8,
    textAlign: 'center',
  },
  link: {
    ...FONT_BODY3,
    color: COLORS.blue50,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
