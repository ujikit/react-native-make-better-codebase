//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../../../configs';
import {
  FONT_BODY3,
  FONT_BODY4,
  FONT_BODY5,
  FONT_HEADLINE_H6,
} from '../../../../../configs/fonts';

const ProgressComplaintStyles = StyleSheet.create({
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
    marginTop: 200,
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
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryBlack,
  },
  descText: {
    ...FONT_BODY5,
    color: COLORS.black70,
  },
  statusText: {
    ...FONT_BODY4,
    color: COLORS.primaryBlack,
  },
  ticketText: {
    ...FONT_BODY3,
    color: COLORS.black80,
  },
  unitText: {
    ...FONT_BODY4,
    color: COLORS.black80,
  },
});

export default ProgressComplaintStyles;
