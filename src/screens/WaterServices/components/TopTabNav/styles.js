import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../configs';
import { FONT_BODY4, FONT_HEADLINE_H6 } from '../../../../configs/fonts';

const styles = StyleSheet.create({
  tabWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primaryWhite,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.41,
  },
  navWrap: {
    borderRadius: 0,
  },
  navContainer: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    padding: 0,
    borderRadius: 0,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primaryWhite,
    flexDirection: 'row',
  },
  navActive: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primaryOrange,
  },
  navLabel: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black60,
  },
  badgeWrap: {
    borderRadius: 8 / 2,
    width: 8,
    height: 8,
    backgroundColor: COLORS.red50,
  },
});

export default styles;
