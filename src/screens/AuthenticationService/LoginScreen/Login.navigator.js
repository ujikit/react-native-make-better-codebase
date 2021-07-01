import { useNavigation } from '@react-navigation/native';

const LoginNavigator = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();
  const goToForgotPassword = () => navigation.navigate('ForgotPassword');

  return {
    navigation,
    goBack,
    goToForgotPassword,
  };
};

export default LoginNavigator;
