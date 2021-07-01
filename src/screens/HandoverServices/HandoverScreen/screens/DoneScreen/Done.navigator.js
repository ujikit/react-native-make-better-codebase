import { useNavigation } from '@react-navigation/native';

const DoneNavigator = () => {
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

export default DoneNavigator;
