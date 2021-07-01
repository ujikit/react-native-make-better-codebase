//package import here
import React from 'react';
import { Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//local import here
import styles from './ListData.styles';
import I18n from '../../../../i18n';
import { Card } from '../../../../components';
import { COLORS, STYLES } from '../../../../configs';
import { BroadcastIcon } from '../../../../assets/svgs';

const ListDataComponent = ({ data }) => {
  //logic value here
  const navigation = useNavigation();
  const {
    index,
    description,
    feedId,
    image,
    postAt,
    seen,
    source,
    title,
    type,
  } = data;

  //place your extension component here
  const goToDetailFeedScreen = (payload) => {
    navigation.navigate('DetailFeed', { payload });
  };

  return (
    <Card
      key={index}
      types="button"
      shadow={false}
      onPress={() => goToDetailFeedScreen(data)}
      styleWrap={styles.feedWrap}
      styleContainer={[styles.feedWrap, STYLES.mrb16]}
    >
      <View style={styles.imageFeedWrap}>
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.imageFeed}
        />
      </View>
      <Text style={styles.textFeed}>{title}</Text>
    </Card>
  );
};

export default ListDataComponent;
