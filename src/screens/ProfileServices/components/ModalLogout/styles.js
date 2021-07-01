//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../../configs';
import {
  FONT_BODY2,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
} from '../../../../configs/fonts';

const styles = StyleSheet.create({
  wrapModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  containerModal: {
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingBottom: 24,
  },
  modalTitle: {
    ...FONT_HEADLINE_H4,
    marginTop: 8,
    marginBottom: 12,
    color: COLORS.black80,
  },
  modalDesc: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black80,
    textAlign: 'center',
  },
  buttonAlign: {
    alignSelf: 'flex-end',
  },
  fontCancel: {
    ...FONT_BODY2,
    color: COLORS.black60,
    textTransform: 'capitalize',
  },
  whatsappStyle: {
    ...FONT_HEADLINE_H6,
    color: COLORS.blue50,
    marginLeft: 16,
  },
  backStyle: {
    marginTop: 24,
  },
  imageNotif: {
    width: 200,
    height: 150,
    marginBottom: 16,
  },
});

export default styles;
