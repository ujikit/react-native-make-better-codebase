//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_BODY5,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
} from '../../../configs/fonts';

const WaterHistoryStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  headerButton: {
    borderRadius: 40 / 2,
  },
  headerTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlack,
  },
  containerItem: {
    borderRadius: 0,
    padding: 0,
    paddingHorizontal: 16,
  },
  contentItem: {
    width: '100%',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleItem: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryBlack,
  },
  descItem: {
    ...FONT_BODY5,
    color: COLORS.black70,
  },
});

export default WaterHistoryStyles;
