import { useNavigation } from '@react-navigation/native';

const HandoverDetailNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToComplaintForm = () => navigation.navigate('ComplaintForm');
  const goToComplaintResult = () => navigation.navigate('ComplaintResult');
  const goToHandoverCheck = () => navigation.navigate('HandoverCheck');

  return {
    navigation,
    goBack,
    goToComplaintForm,
    goToComplaintResult,
    goToHandoverCheck,
  };
};

export default HandoverDetailNavigator;
