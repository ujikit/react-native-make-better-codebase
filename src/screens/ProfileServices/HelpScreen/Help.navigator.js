import { useNavigation } from '@react-navigation/native';

const HelpNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();
  const logout = () => navigation.navigate('LoginScreen');
  const toDetail = () => navigation.navigate('HelpDetail');

  return {
    navigation,
    goBack,
    logout,
    toDetail,
  };
};

export default HelpNavigator;
