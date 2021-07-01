//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS, STYLES } from '../../../configs';
import {
  FONT_HEADLINE_H4,
  FONT_BODY2,
  FONT_BODY3,
} from '../../../configs/fonts';

const DetailMaintenanceStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
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
    color: COLORS.primaryBlack,
    textTransform: 'capitalize',
    marginLeft: 20,
  },
  wrapContent: {
    flex: 1,
    paddingBottom: 50,
  },
  accordionWrap: {
    marginTop: 0,
    borderBottomColor: COLORS.black30,
  },
  wrapTextSolution: {
    paddingHorizontal: 16,
    paddingBottom: 25,
  },
  wrapTextValueSolution: {
    ...FONT_BODY3,
    color: COLORS.black80,
  },
  wrapTextKey: {
    ...FONT_BODY3,
    color: COLORS.black60,
  },
  wrapTextValue: {
    ...FONT_BODY2,
    textAlign: 'right',
    color: COLORS.black70,
  },
  bottomLine: {
    margin: 16,
    borderColor: 'black',
    borderWidth: 3,
    borderColor: COLORS.black30,
  },
});

export default DetailMaintenanceStyles;
