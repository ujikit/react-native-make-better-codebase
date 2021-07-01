import { useNavigation } from '@react-navigation/native';

const OngoingNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToHandoverDetail = () => navigation.navigate('HandoverDetail');

  return {
    navigation,
    goBack,
    goToHandoverDetail,
  };
};

export default OngoingNavigator;
