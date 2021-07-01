//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS, STYLES } from '../../configs';
import {
  FONT_HEADLINE_H4,
  FONT_BODY1,
  FONT_BODY3,
} from '../../configs/fonts';

const NewsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  wrapHeaderRectangle: {
    width: 70,
    borderWidth: 1.9,
    borderRadius: 10,
    borderColor: COLORS.black40,
    alignSelf: 'center',
  },
  wrapImage: { height: '65%', borderRadius: 0 },
  wrapImageShadow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.5,
  },
  headerContainer: {
    padding: 16,
    flexDirection: 'row',
  },
  headerButton: {
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryWhite,
    textTransform: 'capitalize',
    marginLeft: 20,
  },
  wrapRenderHeader: {
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: COLORS.black40,
    backgroundColor: COLORS.primaryWhite,
  },
  wrapHeaderTextRenderHeader: {
    ...FONT_HEADLINE_H4,
    ...STYLES.pd10,
  },
  wrapRenderContent: {
    height: '100%',
    backgroundColor: 'white',
  },
  wrapMainHeaderTextRenderHeader: {
    paddingVertical: 14,
    paddingHorizontal: 16,
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
  modalImageStyle: {
    padding: 0,
    margin: 0,
  },
});

export default NewsStyles;
