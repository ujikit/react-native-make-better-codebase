import { useNavigation, useNavigationState } from '@react-navigation/native';

const ComplaintDetailNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToComplaintEvidence = () => navigation.navigate('ComplaintEvidence');
  const goToComplaintForm = () => navigation.navigate('ComplaintForm');
  const goToComplaintResult = () => navigation.navigate('ComplaintResult');

  return {
    goBack,
    goToComplaintForm,
    goToComplaintResult,
    goToComplaintEvidence,
    navigation,
  };
};

export default ComplaintDetailNavigator;
