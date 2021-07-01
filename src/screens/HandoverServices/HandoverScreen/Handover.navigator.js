import { useNavigation } from '@react-navigation/native';

const HandoverNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();
  const goToNotifications = () => navigation.navigate('Notifications');

  return {
    navigation,
    goBack,
    goToNotifications,
  };
};

export default HandoverNavigator;
