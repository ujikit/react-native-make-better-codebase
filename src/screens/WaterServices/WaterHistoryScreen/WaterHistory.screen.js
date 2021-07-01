//package import here
import React from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';

//local import here
import styles from './WaterHistory.styles';
import WaterHistoryLogic from './WaterHistory.logic';
import I18n from '../../../i18n';
import { Button, Header } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import { ArrowLeftIcon, ExpandMoreIcon } from '../../../assets/svgs';

const WaterHistoryScreen = ({ route }) => {
  let dataItem = route.params.data;

  //logic value here
  const { data, actions } = WaterHistoryLogic(dataItem);

  //place your extension component here
  const _renderList = ({ item, index }) => (
    <Button
      types="nude"
      styleWrap={STYLES.br0}
      styleContainer={styles.containerItem}
      onPress={() => actions.goToWaterForm(item)}
    >
      <View style={styles.contentItem}>
        <View style={STYLES.fx1}>
          <Text style={[styles.titleItem, STYLES.mrb4]}>{item.title}</Text>
          <Text style={[styles.descItem, STYLES.mrb4]}>
            {I18n.t('technician')}: {item.engineer}
          </Text>
          <Text style={styles.descItem}>
            {I18n.t('timeRecording')}: {item.createdAt}
          </Text>
        </View>
        <ExpandMoreIcon
          width={12}
          height={12}
          fill={COLORS.black80}
          style={STYLES.mrb12}
        />
      </View>
    </Button>
  );

  return (
    <View style={styles.container}>
      <Header styleContainer={styles.headerContainer}>
        <Button
          types="nude"
          width={40}
          height={40}
          styleWrap={styles.headerButton}
          styleContainer={styles.headerButton}
          onPress={() => actions.goBack()}
        >
          <ArrowLeftIcon width={21} height={21} fill={COLORS.primaryBlack} />
        </Button>
        <Text style={[styles.headerTitle, STYLES.mrl16]}>
          {I18n.t('inputMeterHistory')}
        </Text>
      </Header>
      <FlatList
        data={data.waterState.waterHistory.data}
        extraData={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderList}
        refreshControl={
          <RefreshControl
            refreshing={data.waterState.waterHistory.isLoading}
            onRefresh={actions._getDataHistory}
          />
        }
      />
    </View>
  );
};

export default WaterHistoryScreen;
