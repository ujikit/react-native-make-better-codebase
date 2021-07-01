//package import here
import React from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Modal from 'react-native-modal';

//local import here
import styles from './Water.styles';
import WaterLogic from './Water.logic';
import I18n from '../../../i18n';
import { TopTabNav } from '../components';
import { Button, Header, Input } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import { MenuIcon, NotificationsIcon } from '../../../assets/svgs';

//screen import here
import BelumScreen from './screens/BelumScreen';
import SelesaiScreen from './screens/SelesaiScreen';
import SemuaScreen from './screens/SemuaScreen';
import TidakBerpenghuniScreen from './screens/TidakBerpenghuniScreen';

const WaterScreen = () => {
  //logic value here
  const { data, actions } = WaterLogic();

  //pakcage value here
  const { Navigator, Screen } = createMaterialTopTabNavigator();

  //place your extension component here

  return (
    <View style={styles.container}>
      <Header styleContainer={styles.headerContainer}>
        <View style={STYLES.rowAlgCenter}>
          <Button
            types="nude"
            width={40}
            height={40}
            styleWrap={styles.headerButton}
            styleContainer={styles.headerButton}
            onPress={() => actions.navigation.toggleDrawer()}
          >
            <MenuIcon width={22} height={22} fill={COLORS.primaryBlack} />
          </Button>
          <Text style={[styles.headerTitle, STYLES.mrl16]}>
            {I18n.t('waterMeter')}
          </Text>
        </View>
        <Button
          types="nude"
          width={40}
          height={40}
          styleWrap={styles.headerButton}
          styleContainer={styles.headerButton}
          onPress={actions.goToNotifications}
        >
          <NotificationsIcon
            width={20}
            height={20}
            fill={COLORS.primaryBlack}
          />
        </Button>
      </Header>
      <View style={[styles.wrapTabFilter, STYLES.mrb8]}>
        <Input
          types="dropdown"
          value={data.waterState.selectedTower.towerName}
          styleWrap={styles.wrapInputTower}
          styleBox={styles.boxInput}
          onPressButton={() =>
            actions.setModalTowerVisible(!data.modalTowerVisible)
          }
        />
        <Input
          types="dropdown"
          value={data.waterState.selectedFloor.toShow || 'Pilih Lantai'}
          styleWrap={styles.wrapInputFlor}
          styleBox={styles.boxInput}
          onPressButton={() =>
            actions.setModalFloorVisible(!data.modalFloorVisible)
          }
        />
      </View>
      <View style={styles.wrapContent}>
        <Navigator
          initialRouteName="Semua"
          backBehavior="none"
          tabBar={(props) => <TopTabNav {...props} />}
        >
          <Screen
            name="Semua"
            component={SemuaScreen}
            options={{ tabBarLabel: I18n.t('all') }}
          />
          <Screen
            name="Belum"
            component={BelumScreen}
            options={{ tabBarLabel: I18n.t('notyet') }}
          />
          <Screen
            name="TidakBerpenghuni"
            component={TidakBerpenghuniScreen}
            options={{ tabBarLabel: I18n.t('unpopulated') }}
          />
          <Screen
            name="Selesai"
            component={SelesaiScreen}
            options={{ tabBarLabel: I18n.t('doneId') }}
          />
        </Navigator>
      </View>
      <Modal
        backdropOpacity={0.3}
        isVisible={data.modalTowerVisible}
        onBackdropPress={() =>
          actions.setModalTowerVisible(!data.modalTowerVisible)
        }
        onBackButtonPress={() =>
          actions.setModalTowerVisible(!data.modalTowerVisible)
        }
        onSwipeComplete={() =>
          actions.setModalTowerVisible(!data.modalTowerVisible)
        }
        swipeDirection="down"
        style={styles.wrapModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={200}
        animationOutTiming={200}
      >
        <View style={styles.containerModal}>
          <View style={STYLES.pdh16}>
            <Text style={[styles.titleModal, STYLES.mrb20, STYLES.mrt20]}>
              {I18n.t('chooseTower')}
            </Text>
          </View>
          {data.waterState.unitList.isLoading ? (
            <RefreshControl refreshing={data.waterState.unitList.isLoading} />
          ) : (
            <FlatList
              data={data.waterState.unitList.data}
              extraData={data.waterState}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return (
                  <Button
                    types="nude"
                    styleWrap={styles.wrapModalItem}
                    styleContainer={styles.containerModalItem}
                    onPress={() => actions._selectTowerHandle(item)}
                  >
                    <View style={styles.wrapContentItem}>
                      <Text style={styles.textModalItem}>{item.towerName}</Text>
                    </View>
                  </Button>
                );
              }}
            />
          )}
        </View>
      </Modal>
      <Modal
        backdropOpacity={0.3}
        isVisible={data.modalFloorVisible}
        onBackdropPress={() =>
          actions.setModalFloorVisible(!data.modalFloorVisible)
        }
        onBackButtonPress={() =>
          actions.setModalFloorVisible(!data.modalFloorVisible)
        }
        onSwipeComplete={() =>
          actions.setModalFloorVisible(!data.modalFloorVisible)
        }
        swipeDirection="down"
        style={styles.wrapModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={200}
        animationOutTiming={200}
      >
        <View style={styles.containerModal}>
          <View style={STYLES.pdh16}>
            <Text style={[styles.titleModal, STYLES.mrb20, STYLES.mrt20]}>
              {I18n.t('chooseFloor')}
            </Text>
          </View>
          {data.waterState.unitList.isLoading ? (
            <RefreshControl refreshing={data.waterState.unitList.isLoading} />
          ) : (
            <FlatList
              data={data.waterState.selectedTower.floor}
              extraData={data.waterState}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                return (
                  <Button
                    types="nude"
                    styleWrap={styles.wrapModalItem}
                    styleContainer={styles.containerModalItem}
                    onPress={() => actions._selectFloorHandle(item)}
                  >
                    <View style={styles.wrapContentItem}>
                      <Text style={styles.textModalItem}>{item.toShow}</Text>
                    </View>
                  </Button>
                );
              }}
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

export default WaterScreen;
