//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_BODY3,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
} from '../../../configs/fonts';

const HandoverDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
  },
  headerButton: {
    borderRadius: 35 / 2,
  },
  headerTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlack,
  },
  descText: {
    ...FONT_BODY3,
    color: COLORS.black80,
  },
  itemSeparator: {
    height: 8,
    width: '100%',
    backgroundColor: COLORS.black30,
  },
  blueAlert: {
    backgroundColor: COLORS.softBlue,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.blue50,
    borderRadius: 5,
  },
  fontAlert: {
    ...FONT_BODY3,
    color: COLORS.primaryBlack,
    lineHeight: 20,
  },
  photoFont: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryBlack,
    marginRight: 4,
  },
  editPhoto: {
    ...FONT_HEADLINE_H6,
    color: COLORS.orange50,
    marginRight: 4,
  },
  colorRed: {
    color: COLORS.red50,
  },
  wrapFooter: {
    width: '100%',
    borderTopColor: COLORS.black30,
    borderTopWidth: 1,
    paddingHorizontal: 16,
  },
  imageUpload: {
    width: 104,
    height: 104,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default HandoverDetailStyles;
