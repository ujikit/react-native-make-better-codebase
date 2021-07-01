import { useNavigation } from '@react-navigation/native';

const SelesaiNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToWaterForm = (data) =>
    navigation.navigate('WaterForm', {
      title: data.status === 'Done' ? data.title : 'Input Meter',
      data: data,
      capture: {},
      history: true,
      isEdit: false,
      isUpdate: true,
    });

  const goToWaterCamera = (data) =>
    navigation.navigate('WaterCamera', {
      data: data,
      title: data.status === 'Done' ? data.title : 'Input Meter',
    });

  return {
    navigation,
    goBack,
    goToWaterForm,
    goToWaterCamera,
  };
};

export default SelesaiNavigator;
