//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import { FONT_HEADLINE_H4, FONT_BODY3 } from '../../../configs/fonts';

const HelpDetailStyles = StyleSheet.create({
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
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlack,
    marginBottom: 8,
  },
  modified: {
    ...FONT_BODY3,
    color: COLORS.black80,
    marginBottom: 24,
  },
  desc: {
    ...FONT_BODY3,
    color: COLORS.black80,
    lineHeight: 25,
  },
});

export default HelpDetailStyles;
