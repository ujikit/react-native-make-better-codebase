//package import here
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';

//local import here
import styles from './Notifications.styles';
import I18n from '../../i18n';
import NotificationsLogic from './Notifications.logic';
import { COLORS, IMAGES, STYLES } from '../../configs';
import ListData from './components/ListData';
import { Button, Header, ScreenMessage } from '../../components';
import { ArrowLeftIcon } from '../../assets/svgs';

const NotificationsScreen = () => {
  //logic value here
  const { data, actions } = NotificationsLogic();

  //place your extension component here

  return (
    <View style={styles.container}>
      <Header styleContainer={styles.headerContainer}>
        <Button
          types="nude"
          width={35}
          height={35}
          styleWrap={styles.headerButton}
          styleContainer={styles.headerButton}
          onPress={() => actions.goBack()}
        >
          <ArrowLeftIcon width={17} height={17} fill={COLORS.primaryBlack} />
        </Button>
        <Text style={[styles.textHeader, STYLES.mrl8]}>
          {I18n.t('notifications')}
        </Text>
      </Header>
      <FlatList
        data={data.notificationState.notificationList.data}
        contentContainerStyle={STYLES.fxGrow}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={actions.fetchLoadMoreAllNotification}
        ListEmptyComponent={
          <View style={{ flex: 1, height: '100%' }}>
            <ScreenMessage
              sourceImage={IMAGES.noNotificationYet}
              styleImage={styles.imageEmpty}
              styleContainer={{
                flex: 1,
                backgroundColor: COLORS.primaryWhite,
                height: '100%',
              }}
              title={I18n.t('empty.notificationTitle')}
              desc={I18n.t('empty.notificationDesc')}
            />
          </View>
        }
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={actions.fetchAllNotification}
          />
        }
        ListFooterComponent={() => (
          <View>
            {data.notificationState.notificationList.meta.page !==
              data.notificationState.notificationList.meta.totalPage && (
              <View style={styles.wrapLoadingLoadMore}>
                <ActivityIndicator color={COLORS.primaryOrange} size="small" />
              </View>
            )}
          </View>
        )}
        renderItem={({ item, index }) => {
          if (item !== null) {
            return (
              <ListData
                key={index + 1}
                title={item.title}
                desc={item.subTitle}
                time={''}
                dataItem={item.dataNotif}
                type={item.type}
              />
            );
          }
        }}
      />
    </View>
  );
};

export default NotificationsScreen;
