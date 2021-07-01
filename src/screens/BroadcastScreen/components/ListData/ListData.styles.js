//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../../../configs';
import { FONT_HEADLINE_H6, FONT_BODY5 } from '../../../../configs/fonts';
import { widthByScreen } from '../../../../utils';

const ListDataStyles = StyleSheet.create({
  feedWrap: {
    padding: 0,
  },
  imageFeedWrap: {
    width: '100%',
    backgroundColor: COLORS.softOrange,
    marginBottom: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageFeed: {
    width: '100%',
    height: widthByScreen(42),
  },
  textFeed: {
    ...FONT_HEADLINE_H6,
    color: COLORS.black80,
    marginBottom: 8,
  },
});

export default ListDataStyles;
