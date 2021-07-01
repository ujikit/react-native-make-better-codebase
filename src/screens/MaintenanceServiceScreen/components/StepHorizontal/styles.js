import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../configs';
import { FONT_BODY5 } from '../../../../configs/fonts';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 100,
  },
  wrapHorizontalLine: {
    borderBottomColor: COLORS.black30,
    borderBottomWidth: 4,
    zIndex: 1,
  },
  wrapMainBullet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -9,
  },
  wrapBullet: {
    width: 13.33,
    height: 13.33,
    backgroundColor: COLORS.black50,
    borderRadius: 30 / 2,
  },
  wrapMainText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12.33,
  },
  wrapTextValueTime: {
    ...FONT_BODY5,
    color: COLORS.black60,
  },
  defaultTextTitle: {
    ...FONT_BODY5,
    color: COLORS.black90,
    textTransform: 'capitalize'
  },
});
