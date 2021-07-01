import { useNavigation } from '@react-navigation/native';

const WaterHistoryNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToWaterForm = (data) =>
    navigation.push('WaterForm', {
      title: data.title,
      data: data,
      capture: {},
      history: false,
      isEdit: false,
      isUpdate: !data.dataReport.isPast,
    });

  return {
    navigation,
    goBack,
    goToWaterForm,
  };
};

export default WaterHistoryNavigator;
