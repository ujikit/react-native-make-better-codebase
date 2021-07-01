//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import {
  FONT_HEADLINE_H2,
  FONT_HEADLINE_H4,
  FONT_BODY3,
} from '../../../configs/fonts';

const WaterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black30,
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
  wrapTabFilter: {
    width: '100%',
    backgroundColor: COLORS.primaryWhite,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapInputTower: { width: '60%' },
  wrapInputFlor: { width: '35%' },
  boxInput: {
    padding: 0,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  wrapContent: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  wrapModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  containerModal: {
    maxHeight: '95%',
    backgroundColor: 'white',
    paddingVertical: 16,
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  titleModal: {
    ...FONT_HEADLINE_H2,
    color: COLORS.primaryBlack,
  },
  wrapModalItem: {
    borderRadius: 0,
  },
  containerModalItem: {
    borderRadius: 0,
    padding: 0,
    paddingHorizontal: 16,
  },
  wrapContentItem: {
    width: '100%',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black30,
  },
  textModalItem: {
    ...FONT_BODY3,
    color: COLORS.black90,
  },
});

export default WaterStyles;
