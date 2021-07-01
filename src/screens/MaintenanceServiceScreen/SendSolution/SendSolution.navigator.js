import { useNavigation } from '@react-navigation/native';

const SendSolutionNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();
  const goToCameraScreen = () => navigation.navigate('Camera');

  return {
    navigation,
    goBack,
    goToCameraScreen,
  };
};

export default SendSolutionNavigator;
