//package import here
import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

//local import here
import styles from './Ongoing.styles';
import OngoingLogic from './Ongoing.logic';
import I18n from '../../../../../i18n';
import { Button, ScreenMessage } from '../../../../../components';
import { COLORS, IMAGES, STYLES } from '../../../../../configs';
import { ExpandMoreIcon } from '../../../../../assets/svgs';

const OngoingScreen = () => {
  //logic value here
  const { data, actions } = OngoingLogic();

  //place your extension component here
  const _renderList = ({ item, index }) => (
    <Button
      color={COLORS.black20}
      styleWrap={STYLES.br0}
      styleContainer={styles.containerItem}
      onPress={() => {
        actions._toHandoverDetail(item);
      }}
    >
      <View style={styles.contentItem}>
        <View style={STYLES.fx1}>
          <Text style={[styles.titleText, STYLES.mrb4]}>{item.title}</Text>
          <Text style={styles.descText}>Agenda: {item.agenda}</Text>
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
      {data.handoverState.listHandover.isLoading ? (
        <ActivityIndicator color={COLORS.primaryOrange} />
      ) : (
        <FlatList
          data={
            data.handoverState.listHandover.data.length > 0 &&
            data.handoverState.listHandover.data
          }
          contentContainerStyle={
            data.handoverState.listHandover.length === 0 && styles.wrapEmtpy
          }
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={actions._fetchLoadmoreHandover}
          ListEmptyComponent={
            <ScreenMessage
              sourceImage={IMAGES.handoverState}
              styleImage={styles.imageEmpty}
              title={I18n.t('empty.handoverTitle')}
              desc={I18n.t('empty.handoverDesc')}
            />
          }
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={actions._fetchHandoverData}
            />
          }
          ListFooterComponent={() => (
            <View>
              {data.handoverMeta.page !== data.handoverMeta.totalPage && (
                <View style={styles.wrapLoadingLoadMore}>
                  <ActivityIndicator
                    color={COLORS.primaryOrange}
                    size="small"
                  />
                </View>
              )}
            </View>
          )}
          renderItem={_renderList}
        />
      )}
    </View>
  );
};

export default OngoingScreen;
