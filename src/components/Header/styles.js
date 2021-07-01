//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';

export default StyleSheet.create({
  wrapHeader: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    zIndex: 1,
    backgroundColor: '#fff',
  },
  shadowHeader: {
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.41,
  },
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
});
