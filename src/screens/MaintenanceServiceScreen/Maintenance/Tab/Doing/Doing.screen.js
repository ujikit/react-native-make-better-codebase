//package import here
import React from 'react';
import {
  ActivityIndicator,
  View,
  RefreshControl,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useSelector } from 'react-redux';

//local import here
import styles from './Doing.styles';
import DoingLogic from './Doing.logic';
import I18n from '../../../../../i18n';
import { ScreenMessage } from '../../../../../components';
import { COLORS, IMAGES, STYLES } from '../../../../../configs';
import ListData from '../../../components/ListData';

const DoingScreen = () => {
  //logic value here
  const { data, actions } = DoingLogic();
  const { maintenanceData } = useSelector((state) => state.maintenance);

  //place your extension component here

  return (
    <SafeAreaView style={styles.container}>
      {maintenanceData.waiting.isLoading ? (
        <View style={styles.wrapLoading}>
          <ActivityIndicator color={COLORS.primaryOrange} />
        </View>
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={maintenanceData.waiting.data.filter(
            (item) =>
              item.step[0].time || item.step[1].time || !item.step[2].time
          )}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          onEndReached={actions.handleLoadMoreMaintenance}
          onEndReachedThreshold={0.1}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => actions.getMaintenanceDatas()}
            />
          }
          ListEmptyComponent={
            <ScreenMessage
              sourceImage={IMAGES.maintenanceMonochromatic}
              styleImage={styles.imageEmpty}
              styleContainer={{
                flexGrow: 1,
                backgroundColor: COLORS.primaryWhite,
              }}
              title={I18n.t('noData.maintenanceTitle')}
              desc={I18n.t('noData.maintenanceDesc')}
            />
          }
          ListFooterComponent={() => (
            <View>
              {maintenanceData.waiting.meta.page !==
                maintenanceData.waiting.meta.totalPage && (
                <View style={styles.wrapLoadingLoadMore}>
                  <ActivityIndicator
                    color={COLORS.primaryOrange}
                    size="small"
                  />
                </View>
              )}
            </View>
          )}
          renderItem={({ item, index }) => {
            if (item) {
              return <ListData data={item} />;
            }
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default DoingScreen;
