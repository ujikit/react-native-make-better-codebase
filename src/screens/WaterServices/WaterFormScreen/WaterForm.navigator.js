import { useNavigation } from '@react-navigation/native';

const WaterFormNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToHistory = (data) =>
    navigation.navigate('WaterHistory', {
      data: data,
    });

  const goToWaterCamera = (data) =>
    navigation.navigate('WaterCamera', {
      data: data,
      title: data.status === 'Done' ? data.title : 'Input Meter',
    });

  const goToWaterervice = () => navigation.navigate('MeteranAir');

  return {
    navigation,
    goBack,
    goToHistory,
    goToWaterCamera,
    goToWaterervice,
  };
};

export default WaterFormNavigator;
