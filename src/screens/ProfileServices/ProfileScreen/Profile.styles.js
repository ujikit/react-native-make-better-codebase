//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_BODY3,
  FONT_BODY4,
  FONT_BODY5,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
} from '../../../configs/fonts';

const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black30,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  headerButton: {
    borderRadius: 40 / 2,
  },
  headerTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlack,
    textTransform: 'capitalize',
  },
  wrapContent: {
    backgroundColor: COLORS.primaryWhite,
    width: '100%',
  },
  wrapProfilePic: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    overflow: 'hidden',
    backgroundColor: COLORS.black40,
  },
  wrapLabel: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: COLORS.primaryOrange,
    borderRadius: 100,
    alignItems: 'center',
  },
  labelText: {
    ...FONT_BODY4,
    color: COLORS.primaryWhite,
  },
  infoText: {
    ...FONT_BODY3,
    color: COLORS.black80,
  },
  menuContainer: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    borderRadius: 0,
  },
  menuContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black30,
  },
  menuText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryBlack,
  },
  versionText: {
    ...FONT_BODY5,
    color: COLORS.black70,
  },
  logoutText: {
    ...FONT_HEADLINE_H4,
    fontWeight: '500',
    color: COLORS.red50,
  },
});

export default ProfileStyles;
