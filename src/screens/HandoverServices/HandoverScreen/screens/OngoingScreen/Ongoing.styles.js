//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../../../configs';
import { FONT_BODY3, FONT_HEADLINE_H6 } from '../../../../../configs/fonts';

const OngoingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  wrapEmtpy: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  imageEmpty: {
    width: 160,
    height: 120,
    marginTop: 150,
  },
  containerItem: {
    borderRadius: 0,
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  contentItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black30,
  },
  wrapLeftItem: {
    alignItems: 'flex-end',
    height: '100%',
  },
  titleText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryBlack,
  },
  descText: {
    ...FONT_BODY3,
    color: COLORS.black70,
  },
});

export default OngoingStyles;
