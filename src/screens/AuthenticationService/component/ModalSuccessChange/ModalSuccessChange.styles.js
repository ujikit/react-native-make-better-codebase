//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../../configs';
import {
  FONT_HEADLINE_H3,
  FONT_HEADLINE_H4,
  FONT_BODY3,
  FONT_BODY4,
} from '../../../../configs/fonts';
import { widthByScreen } from '../../../../utils';
import { STYLES } from '../../../../configs';

const styles = StyleSheet.create({
  wrapModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  containerModal: {
    backgroundColor: 'white',
    padding: 16,
    paddingTop: 32,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    alignContent: 'center'
  },
  wrapHeaderRectangle: {
    width: 70,
    borderWidth: 1.9,
    borderRadius: 10,
    borderColor: COLORS.black40,
    alignSelf: 'center',
  },
  wrapTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  wrapHeaderTextMaintenanceInfo: {
    ...FONT_HEADLINE_H4,
    color: COLORS.black90,
  },
  wrapContent: {
    paddingVertical: 8,
  },
  wrapItemMonth: {
    paddingTop: 12,
  },
  wrapItemMonthName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
  },
  wrapMonthName: {
    ...FONT_BODY3,
    color: COLORS.black90,
  },
  wrapContentCheckCircleIcon: {
    backgroundColor: COLORS.green50,
    borderRadius: 99,
  },
  bottomLine: { borderWidth: 1, borderColor: COLORS.black30 },
  buttonApply: {
    width: '100%',
    marginTop: 16
  }
});

export default styles;
