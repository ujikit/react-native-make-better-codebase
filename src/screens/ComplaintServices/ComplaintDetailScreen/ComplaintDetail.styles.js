//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_BODY2,
  FONT_BODY3,
  FONT_BODY5,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
} from '../../../configs/fonts';

const ComplaintDetailStyles = StyleSheet.create({
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
  normalText: {
    ...FONT_BODY3,
    color: COLORS.black80,
  },
  descText: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlack,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    overflow: 'hidden',
    backgroundColor: COLORS.softOrange,
  },
  wrapFooter: {
    width: '100%',
    borderTopColor: COLORS.black30,
    borderTopWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  cardRight: {
    justifyContent: 'space-between',
  },
  titleAccordion: {
    ...FONT_BODY3,
    color: COLORS.black60,
  },
  descAccordion: {
    ...FONT_BODY2,
    color: COLORS.black70,
  },
  lineProgress: {
    backgroundColor: COLORS.black30,
    height: 4,
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    top: 20,
  },
  circleProgress: {
    width: 14,
    height: 14,
    borderRadius: 100,
  },
  bottomGrey: {
    width: '100%',
    borderWidth: 5,
    borderColor: COLORS.black30,
  },
  itemStatusCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemStatusRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  statusTime: {
    ...FONT_BODY5,
    color: COLORS.black60,
    width: 70,
  },
  textRight: {
    textAlign: 'right',
  },
  descCompleteComplaint: {
    ...FONT_BODY3,
    color: COLORS.black60,
    marginBottom: 16,
  },
  imageItem: {
    height: 180,
    width: 150,
    borderRadius: 10,
    marginRight: 12,
  },
});

export default ComplaintDetailStyles;
