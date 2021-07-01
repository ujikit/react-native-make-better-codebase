//package import
import { Dimensions, Platform, StyleSheet } from 'react-native';

//local import
import { COLORS, STYLES } from '../../configs';
import METRICS from '../../constants/metrics';
import { scale, heightByScreen, widthByScreen } from '../../utils';
import { FONT_HEADLINE_H4, FONT_BODY1, FONT_BODY3 } from '../../configs/fonts';

const height = Platform.OS === 'ios' ? 44 : 56;
const MIN_HEIGHT = height + METRICS.statusBar.height;
const MAX_HEIGHT = 250 + METRICS.statusBar.height;

const DetailFeedStyles = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    ...FONT_HEADLINE_H4,
    paddingVertical: 10,
    fontSize: 18,
    lineHeight: 27,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  gradient: {
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  headerButton: {
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryWhite,
    textTransform: 'capitalize',
    marginLeft: 20,
  },
  wrapMainHeaderTextRenderContent: {
    flex: 1,
    paddingHorizontal: 16,
  },

  wrapMainTextDateTimeRenderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 14,
  },
  wrapTextDateTimeRenderContent: {
    ...FONT_BODY3,
    color: COLORS.black60,
  },
  wrapTextSeenRenderContent: {
    ...FONT_BODY3,
    color: COLORS.black60,
  },
  wrapTextDescriptionRenderContent: {
    ...FONT_BODY1,
    lineHeight: 26,
    paddingVertical: 13,
  },
  wrapMainTextSourceRenderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 239,
  },
  wrapTextSourceRenderContent: {
    ...FONT_BODY1,
    color: COLORS.black60,
  },
});

export default DetailFeedStyles;
