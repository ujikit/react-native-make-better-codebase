//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import { FONT_HEADLINE_H4, FONT_HEADLINE_H6 } from '../../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
  },
  backWrap: {
    position: 'absolute',
    left: 0,
    borderRadius: 20,
    marginLeft: 4,
  },
  backContainer: {
    width: 40,
    height: 40,
  },
  headerContainer: {
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    ...FONT_HEADLINE_H4,
    marginLeft: 32,
  },
  content: {
    padding: 16,
    paddingTop: 18,
  },
  textInputStyles: {
    ...FONT_HEADLINE_H6,
    paddingLeft: 0,
  },
  securityText: {
    ...FONT_HEADLINE_H6,
    marginBottom: 4,
  },
  descSecurity: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black90,
  },
  forgotPasswordStyle: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black80,
    alignSelf: 'center',
  },
});

export default styles;
