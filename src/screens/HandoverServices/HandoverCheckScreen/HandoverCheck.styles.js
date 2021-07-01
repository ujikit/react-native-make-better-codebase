//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_BODY3,
  FONT_BODY5,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
} from '../../../configs/fonts';

const HandoverCheckStyles = StyleSheet.create({
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
  wrapPhotoImage: {
    width: 150,
    height: 185,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: COLORS.softOrange,
  },
  titleText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryBlack,
  },
  normalText: {
    ...FONT_BODY3,
    color: COLORS.black70,
  },
  descText: {
    ...FONT_BODY5,
    color: COLORS.black70,
  },
  rowLineTopBtm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 8,
    borderBottomColor: COLORS.black30,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  childButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  wrapPointLine: {
    width: 30,
    height: 32,
    overflow: 'hidden',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullLine: {
    position: 'absolute',
    width: 2,
    height: 32,
    backgroundColor: COLORS.black70,
    left: 14,
    bottom: 0,
  },
  halfLineBtm: {
    position: 'absolute',
    width: 2,
    height: 16,
    backgroundColor: COLORS.black70,
    left: 14,
    bottom: 0,
  },
  halfLineTop: {
    position: 'absolute',
    width: 2,
    height: 16,
    backgroundColor: COLORS.black70,
    left: 14,
    top: 0,
  },
  pointLine: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    overflow: 'hidden',
    backgroundColor: COLORS.primaryWhite,
  },
  wrapCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  wrapModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  containerModal: {
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modalImage: {
    width: 150,
    height: 150,
  },
  badgeStyle: {
    width: 24,
    height: 24,
    backgroundColor: COLORS.black40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  accordionWrap: {
    borderBottomWidth: 8,
    borderBottomColor: COLORS.black30,
  },
});

export default HandoverCheckStyles;
