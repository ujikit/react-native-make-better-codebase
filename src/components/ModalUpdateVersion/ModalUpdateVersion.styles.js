//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_HEADLINE_H6 } from '../../configs/fonts';

const styles = StyleSheet.create({
  wrapModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  containerModal: {
    backgroundColor: 'white',
    padding: 16,
    paddingTop: 32,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
  },
  fontDesc: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black80,
    textAlign: 'center',
    marginHorizontal: 16,
    marginBottom: 24,
  },
  buttonUpdate: {
    marginTop: 16,
  },
  remindWrap: {
    marginBottom: 4,
  },
});

export default styles;
