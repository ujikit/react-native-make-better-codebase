import { useNavigation } from '@react-navigation/native';

const PrivacyPolicyNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const logout = () => navigation.navigate('LoginScreen');

  return {
    navigation,
    goBack,
    logout,
  };
};

export default PrivacyPolicyNavigator;
