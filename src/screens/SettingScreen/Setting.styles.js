//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_BODY1, FONT_HEADLINE_H4 } from '../../configs/fonts';

const SettingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    ...FONT_HEADLINE_H4,
    color: COLORS.black,
    marginBottom: 16,
  },
  content: {
    width: '80%',
    backgroundColor: COLORS.primaryWhite,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  button: {
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  border: {
    borderBottomColor: COLORS.black,
    borderBottomWidth: 0.5,
  },
  text: {
    ...FONT_BODY1,
    color: COLORS.black,
  },
  wrapIcon: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
});

export default SettingStyles;
