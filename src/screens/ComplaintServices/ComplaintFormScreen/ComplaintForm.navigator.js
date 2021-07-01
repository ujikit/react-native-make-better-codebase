import { useNavigation } from '@react-navigation/native';

const ComplaintFormNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToComplaintResult = () => navigation.navigate('ComplaintResult');

  return {
    navigation,
    goBack,
    goToComplaintResult,
  };
};

export default ComplaintFormNavigator;
