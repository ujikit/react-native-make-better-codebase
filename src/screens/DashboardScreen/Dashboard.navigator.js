import { useNavigation } from '@react-navigation/native';

const DashboardNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();
  const goToDetailFeedScreen = (payload) =>
    navigation.navigate('DetailFeed', { payload });
  const goToBroadcastScreen = (detailNews) => navigation.navigate('Broadcast');
  const goToForceUpdate = () => navigation.navigate('ForceUpdate');
  const goToNotifications = () => navigation.navigate('Notifications');

  return {
    navigation,
    goBack,
    goToBroadcastScreen,
    goToDetailFeedScreen,
    goToForceUpdate,
    goToNotifications,
  };
};

export default DashboardNavigator;
