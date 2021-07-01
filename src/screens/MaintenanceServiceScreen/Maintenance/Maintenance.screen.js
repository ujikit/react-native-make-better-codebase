//package import here
import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//local import here
import styles from './Maintenance.styles';
import MaintenanceLogic from './Maintenance.logic';
import I18n from '../../../i18n';
import { Button, Header } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import { MenuIcon, NotificationsIcon } from '../../../assets/svgs';

//screen import here
import DoingScreen from './Tab/Doing';
import CompleteScreen from './Tab/Complete';

const MaintenanceScreen = () => {
  //logic value here
  const { actions } = MaintenanceLogic();

  //pakcage value here
  const { Navigator, Screen } = createMaterialTopTabNavigator();

  //place your extension component here

  return (
    <View style={styles.container}>
      <Header shadow={false} styleContainer={styles.headerContainer}>
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
          <Text style={styles.headerTitle}>{I18n.t('maintenance')}</Text>
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
      <Navigator
        initialRouteName="Doing"
        backBehavior="none"
        tabBarOptions={{
          contentContainerStyle: {},
          tabStyle: styles.tabContainer,
          indicatorContainerStyle: STYLES.mrh16,
          indicatorStyle: styles.tabIndicator,
          labelStyle: styles.tabLabel,
          activeTintColor: COLORS.black80,
          inactiveTintColor: COLORS.black60,
        }}
      >
        <Screen
          name="Doing"
          component={DoingScreen}
          options={{ tabBarLabel: I18n.t('inProgress') }}
        />
        <Screen
          name="Complete"
          component={CompleteScreen}
          options={{ tabBarLabel: I18n.t('done') }}
        />
      </Navigator>
    </View>
  );
};

export default MaintenanceScreen;
