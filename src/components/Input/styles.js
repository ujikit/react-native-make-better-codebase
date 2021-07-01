//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_BODY3, FONT_HEADLINE_H6 } from '../../configs/fonts';

export default StyleSheet.create({
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  wrapInput: {
    width: '100%',
  },
  textLabel: {
    ...FONT_HEADLINE_H6,
    color: COLORS.primaryBlack,
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  wrapError: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textError: {
    ...FONT_BODY3,
    lineHeight: 16,
    color: COLORS.red50,
    marginTop: 8,
  },
  textLength: {
    ...FONT_BODY3,
    lineHeight: 16,
    color: COLORS.black70,
    marginTop: 8,
  },
  boxInput: {
    width: '100%',
    backgroundColor: COLORS.primaryWhite,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapBoxInputDropdown: {
    width: '100%',
    borderRadius: 4,
  },
  boxInputDropdown: {
    width: '100%',
    padding: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.black40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxInputTextArea: {
    width: '100%',
    minHeight: 90,
    padding: 0,
    paddingBottom: 12,
    borderRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black50,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  boxInputButton: {
    width: '100%',
    backgroundColor: COLORS.primaryWhite,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxError: {
    borderBottomColor: COLORS.red50,
  },
  textInput: {
    ...FONT_BODY3,
    color: COLORS.primaryBlack,
    flex: 1,
    padding: 0,
  },
  textInputButton: {
    ...FONT_BODY3,
    color: COLORS.primaryBlack,
    flex: 1,
    padding: 0,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black50,
    marginRight: 16,
  },
  wrapButtonEye: {
    width: 30,
    borderRadius: 30 / 2,
  },
  containerButtonEye: {
    width: '100%',
    height: 30,
    borderRadius: 30 / 2,
    padding: 0,
  },
  wrapInputButton: {
    width: 90,
    borderRadius: 4,
  },
  containerInputButton: {
    width: '100%',
    borderRadius: 4,
    padding: 12,
  },
});
