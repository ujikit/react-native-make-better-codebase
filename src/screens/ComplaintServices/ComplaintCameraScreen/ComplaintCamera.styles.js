//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import { FONT_BODY3, FONT_HEADLINE_H4 } from '../../../configs/fonts';
import { widthByScreen } from '../../../utils';

const ComplaintCameraStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.transparent,
  },
  headerWrap: {
    backgroundColor: 'transparent',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  headerButton: {
    borderRadius: 40 / 2,
  },
  headerTitle: {
    ...FONT_HEADLINE_H4,
    color: COLORS.primaryWhite,
  },
  topWrap: {
    flex: 1,
    backgroundColor: COLORS.blackOp3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 16,
  },
  middleWrap: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomWrap: {
    flex: 1,
    backgroundColor: COLORS.blackOp3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 16,
    position: 'relative',
  },
  coverWrap: {
    flex: 1,
    height: '100%',
    backgroundColor: COLORS.blackOp3,
  },
  cameraFrame: {
    width: widthByScreen(80),
    height: widthByScreen(35),
  },
  descText: {
    ...FONT_BODY3,
    color: COLORS.primaryWhite,
  },
  wrapCapture: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: COLORS.primaryWhite,
    position: 'absolute',
    bottom: 32,
  },
});

export default ComplaintCameraStyles;
