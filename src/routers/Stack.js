import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//please short from a to z if adding new screen
import AuthFirstScreen from '../screens/AuthFirstScreen';
import DetailFeedScreen from '../screens/DetailFeedScreen';
import DetailMaintenanceScreen from '../screens/MaintenanceServiceScreen/DetailMaintenance';
import ForceUpdateScreen from '../screens/ForceUpdateScreen';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SendSolutionScreen from '../screens/MaintenanceServiceScreen/SendSolution';
import CameraScreen from '../screens/MaintenanceServiceScreen/CameraScreen';
import SettingScreen from '../screens/SettingScreen';

//Authentication Service
import LoginScreen from '../screens/AuthenticationService/LoginScreen';
import ForgotPasswordScreen from '../screens/AuthenticationService/ForgotPasswordScreen';
import VerificationCodeScreen from '../screens/AuthenticationService/VerificationCodeScreen';
import EnterNewPasswordScreen from '../screens/AuthenticationService/EnterNewPasswordScreen';

//Complaint Service
import ComplaintCameraScreen from '../screens/ComplaintServices/ComplaintCameraScreen';
import ComplaintDetailScreen from '../screens/ComplaintServices/ComplaintDetailScreen';
import ComplaintFormScreen from '../screens/ComplaintServices/ComplaintFormScreen';
import ComplaintResultScreen from '../screens/ComplaintServices/ComplaintResultScreen';
import ComplaintEvidenceScreen from '../screens/ComplaintServices/ComplaintEvidenceScreen';
//Handover Service
import HandoverDetailScreen from '../screens/HandoverServices/HandoverDetailScreen';
import HandoverCheckScreen from '../screens/HandoverServices/HandoverCheckScreen';
import BroadcastScreen from '../screens/BroadcastScreen';

//Profile Service
import ChangePasswordScreen from '../screens/ProfileServices/ChangePasswordScreen';
import EditProfileScreen from '../screens/ProfileServices/EditProfileScreen';
import HelpScreen from '../screens/ProfileServices/HelpScreen';
import HelpDetailScreen from '../screens/ProfileServices/HelpDetailScreen';
import PrivacyPolicyScreen from '../screens/ProfileServices/PrivacyPolicyScreen';
import TermConditionScreen from '../screens/ProfileServices/TermConditionSreen';
import VerifyPasswordScreen from '../screens/ProfileServices/VerifyPasswordScreen';

//Water Service
import WaterCameraScreen from '../screens/WaterServices/WaterCameraScreen';
import WaterFormScreen from '../screens/WaterServices/WaterFormScreen';
import WaterHistoryScreen from '../screens/WaterServices/WaterHistoryScreen';

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <Navigator headerMode="none" initialRouteName="AuthFirst">
    <Screen name="AuthFirst" component={AuthFirstScreen} />
    <Screen name="Broadcast" component={BroadcastScreen} />
    <Screen name="Camera" component={CameraScreen} />
    <Screen name="ChangePassword" component={ChangePasswordScreen} />
    <Screen name="ComplaintCamera" component={ComplaintCameraScreen} />
    <Screen name="ComplaintDetail" component={ComplaintDetailScreen} />
    <Screen name="ComplaintEvidence" component={ComplaintEvidenceScreen} />
    <Screen name="ComplaintForm" component={ComplaintFormScreen} />
    <Screen name="ComplaintResult" component={ComplaintResultScreen} />
    <Screen name="DetailFeed" component={DetailFeedScreen} />
    <Screen name="DetailMaintenance" component={DetailMaintenanceScreen} />
    <Screen name="EditProfile" component={EditProfileScreen} />
    <Screen name="EnterNewPassword" component={EnterNewPasswordScreen} />
    <Screen name="ForceUpdate" component={ForceUpdateScreen} />
    <Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <Screen name="HandoverCheck" component={HandoverCheckScreen} />
    <Screen name="HandoverDetail" component={HandoverDetailScreen} />
    <Screen name="Help" component={HelpScreen} />
    <Screen name="HelpDetail" component={HelpDetailScreen} />
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Login" component={LoginScreen} />
    <Screen name="News" component={NewsScreen} />
    <Screen name="Notifications" component={NotificationsScreen} />
    <Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
    <Screen name="SendSolution" component={SendSolutionScreen} />
    <Screen name="Setting" component={SettingScreen} />
    <Screen name="TermCondition" component={TermConditionScreen} />
    <Screen name="VerificationCode" component={VerificationCodeScreen} />
    <Screen name="VerifyPassword" component={VerifyPasswordScreen} />
    <Screen name="WaterCamera" component={WaterCameraScreen} />
    <Screen name="WaterForm" component={WaterFormScreen} />
    <Screen name="WaterHistory" component={WaterHistoryScreen} />
  </Navigator>
);

export default Stack;
