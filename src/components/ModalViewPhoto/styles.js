//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import {
  FONT_BODY2,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
  FONT_BODY5,
} from '../../configs/fonts';
import { widthByScreen, heightByScreen } from '../../utils';

const styles = StyleSheet.create({
  wrapModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  containerModal: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  modalTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.whitePure,
    marginLeft: 20,
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
  },
  fontSave: {
    ...FONT_BODY2,
    color: COLORS.yellow70,
    marginLeft: 41,
  },
  textInfo: {
    ...FONT_BODY5,
    color: COLORS.black70,
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
  cardShadow: {
    elevation: 0,
    borderRadius: 0,
    borderBottomColor: COLORS.black30,
    borderBottomWidth: 1,
  },
  cardWrap: {
    padding: 0,
    alignSelf: 'flex-start',
    width: '100%',
  },
  cardItem: {
    marginBottom: 8,
    marginTop: 8,
  },
  textItem: {
    ...FONT_HEADLINE_H6,
  },
  clearStyle: {
    position: 'absolute',
    top: 28,
    right: 4,
    alignSelf: 'center',
    zIndex: 999,
  },
  clearWrap: {
    borderRadius: 100,
  },
  clearContainer: {
    borderRadius: 100,
  },
  imageModal: {
    width: widthByScreen(100),
    height: heightByScreen(100),
  },
  imageView: {
    width: '100%',
    height: '100%',
  },
  images: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  viewImageScroll: {
    width: '100%',
    height: '100%',
  },
  imageStyles: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  renderScrollImage: {
    width: widthByScreen(100),
    height: heightByScreen(100),
  },
});

export default styles;
