//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
  FONT_BODY3,
  FONT_HEADLINE_H2,
} from '../../../configs/fonts';

const ComplaintFormStyles = StyleSheet.create({
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
  titleText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryBlack,
  },
  descText: {
    ...FONT_BODY3,
    color: COLORS.black70,
  },
  uploadImage: {
    width: 70,
    height: 70,
  },
  signImage: {
    width: 60,
    height: 50,
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
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  titleModal: {
    ...FONT_HEADLINE_H2,
    color: COLORS.primaryBlack,
  },
  containerBtnModal: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 0,
    justifyContent: 'flex-start',
  },
});

export default ComplaintFormStyles;
