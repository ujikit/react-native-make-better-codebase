//package import
import { StyleSheet, StatusBar, Platform } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_HEADLINE_H6, FONT_BODY5 } from '../../configs/fonts';

export default StyleSheet.create({
  wrapAlert: {
    width: '100%',
    padding: 16,
    position: 'absolute',
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
    zIndex: 3,
    elevation: 3,
  },
  containerAlert: {
    width: '100%',
    padding: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  wrapIcon: {
    marginTop: 2,
  },
  wrapText: {
    flex: 1,
    paddingHorizontal: 8,
  },
  textTitle: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryWhite,
  },
  textDesc: {
    ...FONT_BODY5,
    lineHeight: 14,
    color: COLORS.primaryWhite,
    marginTop: 8,
  },
  wrapClose: {
    width: 20,
    borderRadius: 20 / 2,
  },
  containerClose: {
    width: '100%',
    height: 20,
    borderRadius: 20 / 2,
    padding: 0,
  },
});
