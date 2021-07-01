//package import here
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

//local import here
import styles from './Done.styles';
import DoneLogic from './Done.logic';
import I18n from '../../../../../i18n';
import { Button, ScreenMessage } from '../../../../../components';
import { COLORS, IMAGES, STYLES } from '../../../../../configs';
import { ExpandMoreIcon, CheckListIcon } from '../../../../../assets/svgs';

const DoneScreen = () => {
  //logic value here
  const { data, actions } = DoneLogic();

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
        <View style={STYLES.rowAlgCenter}>
          <CheckListIcon width={24} height={24} style={STYLES.mrr12}/>
          <ExpandMoreIcon width={12} height={12} fill={COLORS.black80} />
        </View>
      </View>
    </Button>
  );

  return (
    <View style={styles.container}>
      {data.handoverState.handoverDone.isLoading ? (
        <ActivityIndicator color={COLORS.primaryOrange} />
      ) : (
        <FlatList
          data={
            data.handoverState.handoverDone.data.length > 0 &&
            data.handoverState.handoverDone.data
          }
          contentContainerStyle={
            data.handoverState.handoverDone.length === 0 && styles.wrapEmtpy
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

export default DoneScreen;
