//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { widthByScreen } from '../../utils';
import {
  FONT_BODY2,
  FONT_BODY4,
  FONT_BODY5,
  FONT_HEADLINE_H4,
  FONT_HEADLINE_H6,
} from '../../configs/fonts';

const DashboardStyles = StyleSheet.create({
  wrapRenderHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryWhite,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 30,
  },
  wrapHeaderRectangle: {
    width: 80,
    borderWidth: 3,
    borderRadius: 3,
    borderColor: COLORS.black40,
  },
  imageModal: {
    width: 160,
    height: 120,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  headerButton: {
    borderRadius: 40 / 2,
  },
  headerTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryBlack,
    textTransform: 'capitalize',
  },
  menuWrap: {
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  wrapList: {
    width: '50%',
    padding: 8,
  },
  containerList: {
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.black40,
  },
  wrapICon: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryOrange,
  },
  normalText: {
    ...FONT_BODY4,
    color: COLORS.black80,
  },
  descText: {
    ...FONT_BODY5,
    color: COLORS.black80,
  },
  feedWrap: {
    padding: 0,
  },
  imageFeedWrap: {
    width: '100%',
    backgroundColor: COLORS.softOrange,
    marginBottom: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageFeed: {
    width: '100%',
    height: widthByScreen(42),
  },
  textFeed: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black80,
    marginBottom: 8,
  },
  moreText: {
    ...FONT_BODY2,
    color: COLORS.primaryOrange,
  },
  rowBetween: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default DashboardStyles;
