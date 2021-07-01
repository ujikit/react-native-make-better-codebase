import { useNavigation } from '@react-navigation/native';

const ProfileNavigator = () => {
  //package value here
  const navigation = useNavigation();

  //place your function navigation in here
  const goBack = () => navigation.goBack();

  const goToEditProfile = () => navigation.navigate('EditProfile');

  const goToChangePassword = () => navigation.navigate('ChangePassword');

  const goToPrivacyPolicy = () => navigation.navigate('PrivacyPolicy');

  const goToTermCondition = () => navigation.navigate('TermCondition');

  const goToHelp = () => navigation.navigate('Help');

  const goToNotifications = () => navigation.navigate('Notifications');

  return {
    navigation,
    goBack,
    goToEditProfile,
    goToChangePassword,
    goToPrivacyPolicy,
    goToTermCondition,
    goToHelp,
    goToNotifications,
  };
};

export default ProfileNavigator;
