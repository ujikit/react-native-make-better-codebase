//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../../../configs';
import { FONT_HEADLINE_H4, FONT_BODY3 } from '../../../../../configs/fonts';

const JobsStyles = StyleSheet.create({
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
    color: COLORS.primaryBlack,
    marginLeft: 32,
  },
  wrapContainer: {
    paddingHorizontal: 16,
  },
  listItem: {
    ...FONT_BODY3,
    color: COLORS.black90,
  },
  bottomLine: {
    borderWidth: 1,
    borderColor: COLORS.black30,
    alignItems: 'flex-end',
  },
});

export default JobsStyles;
