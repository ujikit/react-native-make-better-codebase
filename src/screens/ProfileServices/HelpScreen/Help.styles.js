//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
  FONT_BODY3,
} from '../../../configs/fonts';

const HelpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  backWrap: {
    position: 'absolute',
    left: 0,
    borderRadius: 20,
    marginLeft: 4,
  },
  phoneWrap: {
    position: 'absolute',
    right: 8,
    borderRadius: 20,
    marginLeft: 4,
  },
  backContainer: {
    width: 40,
    height: 40,
  },
  headerContainer: {
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlack,
    marginLeft: 32,
  },
  wrapContainer: {
    padding: 16,
  },
  title: {
    ...FONT_BODY3,
    color: COLORS.black80,
    marginBottom: 8,
    marginTop: 24,
  },
  modified: {
    ...FONT_HEADLINE_H4,
    color: COLORS.black70,
    marginBottom: 8,
  },
  blackLine: {
    height: 8,
    width: '100%',
    backgroundColor: COLORS.black30,
  },

  tabContainer: {
    width: 120,
    padding: 0,
    paddingRight: 16,
  },
  tabIndicator: {
    width: 100,
    height: 2,
    backgroundColor: COLORS.primaryOrange,
  },
  tabLabel: {
    ...FONT_HEADLINE_H6,
    marginTop: 0,
    marginBottom: 0,
    textTransform: 'capitalize',
  },
  textSearch: {
    ...FONT_BODY3,
    color: COLORS.primaryBlack,
    paddingLeft: 15,
  },
  wrapSearch: {
    justifyContent: 'center',
    borderColor: COLORS.black40,
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
  },
  mainWrapSearch: {
    flex: 1,
    paddingHorizontal: 12,
  },
  searchIcon: {
    borderRadius: 30 / 2,
    position: 'absolute',
    right: 16,
  },
  searchIconContainer: {
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    ...FONT_BODY3,
    color: COLORS.black90,
  },
  bottomLine: {
    borderWidth: 1,
    borderColor: COLORS.black30,
    alignItems: 'flex-end',
  },
});

export default HelpStyles;
