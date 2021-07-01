//package import
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//local import here
import HomeLogic from './Home.logic';
import NavigationDrawer from './components/NavigationDrawer';

//screen import
import ComplaintScreen from '../ComplaintServices/ComplaintScreen';
import DashboardScreen from '../DashboardScreen';
import MaintenanceScreen from '../MaintenanceServiceScreen/Maintenance';
import WaterScreen from '../WaterServices/WaterScreen';
import HandoverScreen from '../HandoverServices/HandoverScreen';
import ProfileScreen from '../ProfileServices/ProfileScreen';

const HomeScreen = () => {
  //package value
  const { Navigator, Screen } = createDrawerNavigator();

  //logic value here
  const { data, actions } = HomeLogic();

  return (
    <Navigator
      initialRouteName="Dashboard"
      backBehavior="initialRoute"
      drawerContent={(props) => <NavigationDrawer {...props} />}
    >
      <Screen name="Dashboard" component={DashboardScreen} />
      <Screen name="Maintenance" component={MaintenanceScreen} />
      <Screen name="MeteranAir" component={WaterScreen} />
      <Screen name="Komplain" component={ComplaintScreen} />
      <Screen name="SerahTerima" component={HandoverScreen} />
      <Screen name="Profile" component={ProfileScreen} />
    </Navigator>
  );
};

export default HomeScreen;
