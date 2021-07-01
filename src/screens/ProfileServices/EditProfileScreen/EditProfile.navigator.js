import { useNavigation } from '@react-navigation/native';

const EditProfileNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToVerifyPassword = () => navigation.navigate('VerifyPassword');

  return {
    navigation,
    goBack,
    goToVerifyPassword,
  };
};

export default EditProfileNavigator;
