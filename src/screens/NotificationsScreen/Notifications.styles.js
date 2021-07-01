//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_HEADLINE_H4 } from '../../configs/fonts';

const NotificationsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  headerContainer: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerButton: {
    borderRadius: 35 / 2,
  },
  textHeader: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlack,
    textTransform: 'capitalize',
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

export default NotificationsStyles;
