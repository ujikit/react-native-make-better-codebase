import { useNavigation } from '@react-navigation/native';

const DetailMaintenanceNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();
  const goToSendSolutionScreen = () => navigation.navigate('SendSolution');

  return {
    navigation,
    goBack,
    goToSendSolutionScreen,
  };
};

export default DetailMaintenanceNavigator;
