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
import styles from './Complete.styles';
import CompleteLogic from './Complete.logic';
import I18n from '../../../../../i18n';
import { ScreenMessage } from '../../../../../components';
import { COLORS, IMAGES, STYLES } from '../../../../../configs';
import ListData from '../../../components/ListData';

const CompleteScreen = () => {
  //logic value here
  const { data, actions } = CompleteLogic();
  const { maintenanceData } = useSelector((state) => state.maintenance);

  //place your extension component here

  return (
    <SafeAreaView style={styles.container}>
      {maintenanceData.done.isLoading ? (
        <View style={styles.wrapLoading}>
          <ActivityIndicator color={COLORS.primaryOrange} />
        </View>
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={maintenanceData.done.data.filter(
            (item) =>
              (!item.step[0].time && !item.step[1].time) || item.step[2].time
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
              {maintenanceData.done.meta.page !==
                maintenanceData.done.meta.totalPage && (
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

export default CompleteScreen;
