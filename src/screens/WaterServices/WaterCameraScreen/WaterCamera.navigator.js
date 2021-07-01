import { useNavigation } from '@react-navigation/native';

const WaterCameraNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToWaterForm = (data, capture) =>
    navigation.navigate('WaterForm', {
      title: data.status === 'Done' ? data.title : 'Input Meter',
      data: data,
      capture: capture,
      history: false,
      isEdit: true,
      isUpdate: false,
    });

  return {
    navigation,
    goBack,
    goToWaterForm,
  };
};

export default WaterCameraNavigator;
