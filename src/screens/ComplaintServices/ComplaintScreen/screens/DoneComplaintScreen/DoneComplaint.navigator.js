import { useNavigation } from '@react-navigation/native';

const DoneComplaintNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToComplaintDetail = () => navigation.navigate('ComplaintDetail');

  return {
    navigation,
    goBack,
    goToComplaintDetail,
  };
};

export default DoneComplaintNavigator;
