import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { getDetailMaintenance } from '../../../../redux/redux-actions';

const ListDataNavigator = () => {
  //package value here
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //place your function navigation in here
  const goBack = () => navigation.goBack();
  const goToDetailMaintenance = (payload) => {
    dispatch(getDetailMaintenance(payload));
    navigation.navigate('DetailMaintenance');
  };

  return {
    navigation,
    goBack,
    goToDetailMaintenance,
  };
};

export default ListDataNavigator;
