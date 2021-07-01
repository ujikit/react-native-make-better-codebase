//package import
import { StyleSheet, Platform } from 'react-native';

//local import
import { COLORS } from '../../configs';

export default StyleSheet.create({
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  wrapCardBasic: {
    width: null,
    borderRadius: 10,
    padding: 16,
  },
  wrapCardButton: {
    borderRadius: 10,
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
  },
  containerCardButton: {
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
