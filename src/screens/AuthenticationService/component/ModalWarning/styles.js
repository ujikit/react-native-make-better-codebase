//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../../configs';
import {
  FONT_BODY2,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
  FONT_BODY5,
} from '../../../../configs/fonts';
import { widthByScreen } from '../../../../utils';

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
  },
  modalTitle: {
    ...FONT_HEADLINE_H4,
    marginTop: 16,
    marginBottom: 12,
    color: COLORS.primaryBlack,
  },
  modalDesc: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black80,
    textAlign: 'center',
  },
  wrapInfo: {
    position: 'absolute',
    top: 16,
    right: 16,
    borderRadius: 100,
  },
  buttonAlign: {
    alignSelf: 'flex-end',
  },
  containerInfo: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.black50,
  },
  fontCancel: {
    ...FONT_BODY2,
    color: COLORS.black60,
    marginRight: 16,
  },
  fontSave: {
    ...FONT_BODY2,
    color: COLORS.yellow70,
    marginLeft: 41,
  },
  textInfo: {
    ...FONT_BODY5,
    color: COLORS.black70,
    textTransform: 'capitalize',
    marginRight: 4,
  },
  wrapClose: {
    borderRadius: 27 / 2,
    marginTop: 16,
  },
  containerClose: {
    width: 27,
    height: 27,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 27 / 2,
  },
  wrapNoTicket: {
    width: widthByScreen(80),
    alignItems: 'center',
  },
  containerNoTicket: {
    width: '100%',
    borderRadius: 10,
    padding: 0,
  },
  imageNoTicket: {
    width: widthByScreen(80),
    height: widthByScreen(40),
    overflow: 'hidden',
  },
});

export default styles;
