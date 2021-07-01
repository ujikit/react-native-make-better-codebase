//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_BODY3,
  FONT_BODY4,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
} from '../../../configs/fonts';

const ComplaintResultStyles = StyleSheet.create({
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
  wrapText: {
    paddingVertical: 12,
    borderBottomColor: COLORS.black30,
    borderBottomWidth: 1,
  },
  titleText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black80,
  },
  descText: {
    ...FONT_BODY3,
    color: COLORS.black70,
  },
  normalText: {
    ...FONT_BODY4,
    color: COLORS.primaryBlack,
  },
  signImage: {
    width: 60,
    height: 50,
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
    width: 72,
    height: 72,
  },
});

export default ComplaintResultStyles;
