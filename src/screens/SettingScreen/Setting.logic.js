//package import here
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//local import here
import SettingNavigator from './Setting.navigator';
import { chooseLanguage } from '../../redux/redux-actions';

const SettingLogic = () => {
  //package value here
  const { navigator } = SettingLogic.dependencies;
  const { goBack } = navigator();
  const dispatch = useDispatch();

  //state value here
  const persistState = useSelector((state) => state.persist);

  //variable value here

  useEffect(() => {
    //function here
  }, []);

  //place your function in here
  const _handleClick = useCallback(
    (value) => {
      dispatch(chooseLanguage(value));
    },
    [dispatch]
  );

  return {
    //data props here
    data: {
      persistState,
    },
    //actions props here
    actions: {
      goBack,
      _handleClick,
    },
  };
};

export default SettingLogic;

SettingLogic.dependencies = {
  navigator: SettingNavigator,
};
