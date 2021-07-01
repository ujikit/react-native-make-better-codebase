//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import { FONT_HEADLINE_H4, FONT_HEADLINE_H6 } from '../../../configs/fonts';

const ComplaintEvidenceStyles = StyleSheet.create({
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
  wrapFooter: {
    width: '100%',
    borderTopColor: COLORS.black30,
    borderTopWidth: 1,
    paddingHorizontal: 16,
  },
  uploadPhotos: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black90,
  },
  mandatory: {
    ...FONT_HEADLINE_H6,
    color: COLORS.red50,
  },
  imageStyle: {
    width: 98,
    height: 98,
    overflow: 'hidden',
    borderRadius: 5,
  },
});

export default ComplaintEvidenceStyles;
