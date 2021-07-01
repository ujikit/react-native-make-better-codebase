/**
 * @format
 */

import { AppRegistry, Vibration } from 'react-native';
import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import AsyncStorage from '@react-native-community/async-storage';

import App from './App';
import { name as appName } from './app.json';
import { STORAGE_KEY } from './src/constants';
import NavigationService from './src/configs/NavigationService';
import { store } from './src/redux/redux-store/store';
import {
  getListComplaint,
  getMaintenanceData,
} from './src/redux/redux-actions';

//--function handling--//
const _handleAppendMaintenance = () => {
  let params = {
    page: 1,
    limit: 15,
    search: 'Waiting',
  };
  store.dispatch(getMaintenanceData(null, params));
};

const _handleAppendComplaint = () => {
  store.dispatch(getListComplaint(null));
};

//--notification handling--//
PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
  onNotification: function (notification) {
    // process the notification
    console.log('NOTIFICATION:', notification);

    if (notification.userInteraction) {
      if (notification.foreground) {
        NavigationService.navigate(notification.data);
      } else {
        setTimeout(() => {
          NavigationService.navigate(notification.data);
        }, 1500);
      }
    }

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
});

PushNotification.createChannel(
  {
    channelId: 'hunianajatechnician_notification_channel',
    channelName: 'hunianajatechnician_notification_channel',
    importance: 4,
    vibrate: true,
  },
  (created) => console.log(`createChannel returned '${created}'`)
);

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);

  Vibration.vibrate();
  PushNotification.localNotification({
    autoCancel: true,
    bigText: remoteMessage.data.body,
    subText: '',
    largeIcon: 'ic_notification',
    smallIcon: 'ic_notification',
    title: remoteMessage.data.title,
    message: remoteMessage.data.body,
    vibrate: true,
    vibration: 3000,
    playSound: true,
    soundName: 'default',
    color: '#f2b557',
    userInfo: remoteMessage.data,
  });
  if (remoteMessage.data.type === '1') {
    _handleAppendComplaint();
  }
  if (remoteMessage.data.type === '2') {
    _handleAppendMaintenance();
  }
});

messaging().onMessage(async (remoteMessage) => {
  console.log('Message handled in the foreground!', remoteMessage);

  Vibration.vibrate();
  PushNotification.localNotification({
    autoCancel: true,
    bigText: remoteMessage.data.body,
    subText: '',
    largeIcon: 'ic_notification',
    smallIcon: 'ic_notification',
    title: remoteMessage.data.title,
    message: remoteMessage.data.body,
    vibrate: true,
    vibration: 1000,
    playSound: true,
    soundName: 'default',
    color: '#f2b557',
    userInfo: remoteMessage.data,
  });
  if (remoteMessage.data.type === '1') {
    _handleAppendComplaint();
  }
  if (remoteMessage.data.type === '2') {
    _handleAppendMaintenance();
  }
});

AppRegistry.registerComponent(appName, () => App);
