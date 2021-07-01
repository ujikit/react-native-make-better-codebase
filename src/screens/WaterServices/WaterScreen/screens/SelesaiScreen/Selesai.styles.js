//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../../../configs';
import {
  FONT_BODY3,
  FONT_BODY5,
  FONT_HEADLINE_H4,
} from '../../../../../configs/fonts';

const SelesaiStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  wrapSearch: {
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    ...FONT_BODY3,
    color: COLORS.black70,
    padding: 0,
    paddingHorizontal: 8,
  },
  descText: {
    ...FONT_BODY5,
    color: COLORS.black70,
  },
  flatlist: {
    flexDirection: 'column',
  },
  wrapEmtpy: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  containerItem: {
    padding: 0,
  },
  textItem: {
    ...FONT_BODY3,
    color: COLORS.black90,
  },
  wrapModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  containerModal: {
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  imageModal: {
    width: 270,
    height: 150,
  },
  modalTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.black90,
  },
  modalButon: {
    padding: 0,
    paddingVertical: 12,
  },
});

export default SelesaiStyles;
