import { StyleSheet } from 'react-native';
import { COLORS } from '../../configs';
import { FONT_HEADLINE_H6 } from '../../configs/fonts';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.59)',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  wrapLayout: {
    backgroundColor: 'white',
    borderRadius: 16,
  },
  wrapLayoutItem: {
    alignItems: 'center',
    paddingHorizontal: 45,
    paddingVertical: 20,
  },
  wrapImage: {
    height: 100,
    width: 80,
  },
  wrapModal: {
    margin: 0,
  },
  wrapText: {
    color: COLORS.black80,
    ...FONT_HEADLINE_H6,
  },
});
