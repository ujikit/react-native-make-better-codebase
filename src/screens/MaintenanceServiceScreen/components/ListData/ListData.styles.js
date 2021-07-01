//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS, STYLES } from '../../../../configs';
import { FONT_HEADLINE_H6, FONT_BODY5 } from '../../../../configs/fonts';

const ListDataStyles = StyleSheet.create({
  styleWrap: {
    ...STYLES.br0,
  },
  styleContainer: {
    padding: 0,
    margin: 0,
    alignItems: 'flex-start',
  },
  mainBackground: { flex: 1, backgroundColor: 'white' },
  wrapContainer: { backgroundColor: 'white', padding: 0 },
  wrapMainContent: {
    width: '100%',
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  wrapTitleAndDateTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 17,
  },
  wrapPriceAndTextStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  wrapBottomLine: { width: '100%', paddingHorizontal: 16 },
  bottomLine: { borderWidth: 1, borderColor: COLORS.black30 },
});

export default ListDataStyles;
