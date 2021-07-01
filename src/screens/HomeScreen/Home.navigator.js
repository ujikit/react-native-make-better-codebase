import { useNavigation } from '@react-navigation/native';

const HomeNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  return {
    navigation,
    goBack,
  };
};

export default HomeNavigator;
