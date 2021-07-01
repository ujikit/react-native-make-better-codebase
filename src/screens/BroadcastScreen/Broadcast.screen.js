//package import here
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

//local import here
import styles from './Broadcast.styles';
import I18n from '../../i18n';
import BroadcastLogic from './Broadcast.logic';
import { COLORS, IMAGES, STYLES } from '../../configs';
import { Button, Header, ScreenMessage } from '../../components';
import { ArrowLeftIcon } from '../../assets/svgs';
import ListData from './components/ListData';

const BroadcastScreen = () => {
  //logic value here
  const { data, actions } = BroadcastLogic();
  const broadcastState = useSelector((state) => state.feed);
  const { data: broadcastList, meta } = broadcastState.broadcastList;

  //place your extension component here

  return (
    <View style={styles.container}>
      <Header shadow={false} styleContainer={styles.containerHeader}>
        <Button
          types="nude"
          width={35}
          height={35}
          styleWrap={styles.headerButton}
          styleContainer={styles.headerButton}
          onPress={() => actions.goBack()}
        >
          <ArrowLeftIcon width={16} height={16} fill={COLORS.primaryBlack} />
        </Button>
        <Text style={[styles.headerTitle, STYLES.mrl8]}>
          {I18n.t('technicianInformation')}
        </Text>
      </Header>
      <FlatList
        data={broadcastList}
        contentContainerStyle={[
          STYLES.fxg1,
          {
            paddingHorizontal: 16,
            height: broadcastList.length ? null : '100%',
          },
        ]}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => actions.fetchLoadMoreAllBroadcast()}
        ListEmptyComponent={
          <ScreenMessage
            sourceImage={IMAGES.enjoy}
            styleImage={styles.imageEmpty}
            styleContainer={{
              flexGrow: 1,
              backgroundColor: COLORS.primaryWhite,
            }}
            title={I18n.t('waitForTheNextInformation')}
            desc={I18n.t('currentlyThereIsNoUpdatedInformationFromBM')}
          />
        }
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={actions.fetchAllBroadcast}
          />
        }
        ListFooterComponent={() => (
          <View>
            {meta.page !== meta.totalPage && (
              <View style={styles.wrapLoadingLoadMore}>
                <ActivityIndicator color={COLORS.primaryOrange} size="small" />
              </View>
            )}
          </View>
        )}
        renderItem={({ item, index }) => {
          let data = {
            index,
            ...item,
          };
          if (item !== null) {
            return <ListData data={data} />;
          }
        }}
      />
    </View>
  );
};

export default BroadcastScreen;
