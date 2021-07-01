//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import { FONT_HEADLINE_H4 } from '../../../configs/fonts';

const EditProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black30,
  },
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
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
  },
  wrapContent: {
    width: '100%',
    backgroundColor: COLORS.primaryWhite,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  wrapAvatar: {
    width: 72,
    alignSelf: 'center',
    position: 'relative',
  },
  wrapPhotoPic: {
    borderRadius: 72 / 2,
    alignSelf: 'center',
  },
  containerphotoPic: {
    borderRadius: 72 / 2,
    position: 'relative',
    padding: 0,
  },
  wrapProfilPic: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    backgroundColor: COLORS.black30,
    position: 'relative',
  },
  wrapButtonPic: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 24 / 2,
    zIndex: 99,
  },
  containerButtonPic: {
    borderRadius: 24 / 2,
    padding: 0,
  },
  inputBox: {
    borderBottomColor: COLORS.black40,
  },
  noBorderinpu: {
    borderBottomColor: COLORS.primaryWhite,
  },
  errorInputBox: {
    borderBottomColor: COLORS.red50,
  },
  wrapFooter: {
    width: '100%',
    backgroundColor: COLORS.primaryWhite,
    padding: 16,
    elevation: 2,
    shadowColor: COLORS.primaryBlack,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.41,
  },
});

export default EditProfileStyles;
