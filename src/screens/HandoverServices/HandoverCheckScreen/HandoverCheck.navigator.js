import { useNavigation } from '@react-navigation/native';

const HandoverCheckNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToComplaintForm = () => navigation.navigate('ComplaintForm');
  const goToComplaintResult = () => navigation.navigate('ComplaintResult');

  return {
    navigation,
    goBack,
    goToComplaintForm,
    goToComplaintResult,
  };
};

export default HandoverCheckNavigator;
