import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../configs';
import { FONT_BODY4, FONT_HEADLINE_H6 } from '../../../../configs/fonts';

const styles = StyleSheet.create({
  tabWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
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
    paddingVertical: 12,
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
    borderRadius: 24 / 2,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.red50,
  },
  badgeText: {
    ...FONT_BODY4,
    color: COLORS.primaryWhite,
  },
});

export default styles;
