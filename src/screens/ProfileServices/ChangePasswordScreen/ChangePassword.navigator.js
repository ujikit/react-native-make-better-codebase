import { useNavigation } from '@react-navigation/native';

const ChangePasswordNavigator = () => {
  // const navigation = useContext(NavigationContext);
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  const goToForgotPassword = () => navigation.navigate('ForgotPassword');

  return {
    navigation,
    goBack,
    goToForgotPassword,
  };
};

export default ChangePasswordNavigator;
