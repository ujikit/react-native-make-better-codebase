import { useNavigation, useNavigationState } from '@react-navigation/native';

const ComplaintEvidencelNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToComplaintForm = () => navigation.navigate('ComplaintForm');
  const goToComplaintResult = () => navigation.navigate('ComplaintResult');
  const goToCameraScreen = () => navigation.navigate('ComplaintCamera');

  return {
    navigation,
    goBack,
    goToCameraScreen,
    goToComplaintForm,
    goToComplaintResult,
  };
};

export default ComplaintEvidencelNavigator;
