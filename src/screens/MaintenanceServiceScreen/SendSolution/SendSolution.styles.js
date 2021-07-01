//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_HEADLINE_H2,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
} from '../../../configs/fonts';

const SendSolutionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  headerContainer: {
    padding: 16,
    flexDirection: 'row',
  },
  headerButton: {
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlack,
    textTransform: 'capitalize',
    marginLeft: 20,
  },
  wrapContent: {
    padding: 16,
  },
  wrapTextSolution: {
    ...FONT_HEADLINE_H6,
    textTransform: 'capitalize',
  },
  uploadImage: {
    width: 95,
    height: 95,
  },

  // modal
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

  // modal - upload photo
  titleModal: {
    ...FONT_HEADLINE_H2,
    color: COLORS.primaryBlack,
    marginBottom: 12,
  },
  containerBtnModal: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 0,
    justifyContent: 'flex-start',
  },
  cancelText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black60,
  },

  // modal - confirmation
  wrapNewReleasesIcon: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: COLORS.black30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  wrapTextHeaderConfirmation: {
    ...FONT_HEADLINE_H4,
    marginTop: 16,
    paddingHorizontal: 16,
    textAlign: 'center',
    color: COLORS.black90,
  },
  wrapTextDescriptionConfirmation: {
    ...FONT_HEADLINE_H6,
    marginTop: 12,
    paddingHorizontal: 16,
    textAlign: 'center',
    color: COLORS.black80,
  },
  wrapButtonConfirmation: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 16,
  },
  // ./modal
});

export default SendSolutionStyles;
