import { useNavigation } from '@react-navigation/native';

const BroadcastNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();
  const goToDetailFeedScreen = (payload) => navigation.navigate('DetailFeed', {payload});

  return {
    navigation,
    goBack,
    goToDetailFeedScreen,
  };
};

export default BroadcastNavigator;
