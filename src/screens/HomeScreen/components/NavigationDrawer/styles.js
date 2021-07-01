import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../configs';
import { FONT_HEADLINE_H6, FONT_BODY5 } from '../../../../configs/fonts';

const stylesNavigationDrawer = StyleSheet.create({
  drawerWrap: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  drawerHeader: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black40,
  },
  imageUser: {
    backgroundColor: COLORS.black40,
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textUser: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black,
    marginBottom: 4,
  },
  textUserDesc: {
    ...FONT_BODY5,
    color: COLORS.black,
  },
  drawerMenu: {
    flex: 1,
    width: '100%',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black40,
  },
  wrapMenu: {
    borderRadius: 0,
  },
  containerMenu: {
    borderRadius: 0,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  contentMenu: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    padding: 4,
  },
  menuTitle: {
    ...FONT_HEADLINE_H6,
    marginLeft: 20,
    color: COLORS.black70,
  },
  menuFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 0,
  },
});

export default stylesNavigationDrawer;
