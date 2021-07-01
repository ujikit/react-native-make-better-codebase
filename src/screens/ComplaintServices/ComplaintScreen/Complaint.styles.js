//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../configs';
import { FONT_HEADLINE_H4, FONT_HEADLINE_H6 } from '../../../configs/fonts';

const ComplaintStyles = StyleSheet.create({
  container: {
    flex: 1,
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
  tabContainer: {
    width: 150,
    padding: 0,
    alignItems: 'flex-start',
    marginRight: 8,
    paddingLeft: 12,
  },
  tabIndicator: {
    width: 150,
    height: 2,
    backgroundColor: COLORS.primaryOrange,
  },
  tabLabel: {
    ...FONT_HEADLINE_H6,
    textTransform: 'none',
    marginTop: 0,
    marginBottom: 0,
  },
});

export default ComplaintStyles;
