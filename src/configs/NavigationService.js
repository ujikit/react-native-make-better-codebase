import { CommonActions } from '@react-navigation/native';

let _navigator;

export const NavigationService = {
  setTopLevelNavigator: function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
  },
  navigate: function navigate(params) {
    switch (params.type) {
      case '1':
        _navigator.dispatch(
          CommonActions.navigate({
            name: 'Komplain',
          })
        );
        break;
      case '2':
        _navigator.dispatch(
          CommonActions.navigate({
            name: 'Maintenance',
          })
        );
        break;
    }
  },
};

export default NavigationService;
