//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_BODY3, FONT_HEADLINE_H2 } from '../../configs/fonts';

const styles = StyleSheet.create({
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
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 0,
    justifyContent: 'flex-start',
  },
  descText: {
    ...FONT_BODY3,
    color: COLORS.black70,
  },
});

export default styles;
