//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_HEADLINE_H6 } from '../../configs/fonts';

export default StyleSheet.create({
  containerButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryText: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryBlack,
  },
});
