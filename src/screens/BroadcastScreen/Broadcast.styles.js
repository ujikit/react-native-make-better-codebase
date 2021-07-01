//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_HEADLINE_H4 } from '../../configs/fonts';

const BroadcastStyles = StyleSheet.create({
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
  imageEmpty: {
    width: 212.29,
    height: 160,
  },
  wrapLoadingLoadMore: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BroadcastStyles;
