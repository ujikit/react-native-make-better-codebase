//package import here
import { useEffect, useState, useCallback } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

//local import here
import EditProfileNavigator from './EditProfile.navigator';
import {
  setFormProfileImage,
  setFormProfileName,
  setFormProfilePhone,
  setFormProfileSkill,
} from '../../../redux/redux-actions';

const EditProfileLogic = () => {
  //package value here
  const { navigator } = EditProfileLogic.dependencies;
  const { goBack, goToVerifyPassword } = navigator();
  const dispatch = useDispatch();

  //state value here
  const [photo, setPhoto] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [modalUpdload, setModalUpdload] = useState(false);
  const [modalViewPhoto, setModalViewPhoto] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);
  let accountState = useSelector((state) => state.account);

  //variable value here
  let formProfile = accountState.formEdit;

  useEffect(() => {
    //function here
  }, []);

  //place your function in here
  const _getLaunchCamera = useCallback(async () => {
    setModalUpdload(false);
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          launchCamera(
            {
              mediaType: 'photo',
              includeBase64: true,
              quality: 0.5,
            },
            (response) => {
              if (response.didCancel !== true) {
                setPhoto(response.uri);
                dispatch(
                  setFormProfileImage({
                    url: response.uri,
                    base64: response.base64,
                  })
                );
              }
            }
          );
        } else {
          console.log('Camera permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      launchCamera(
        {
          mediaType: 'photo',
          includeBase64: true,
          quality: 0.5,
        },
        (response) => {
          if (response.didCancel !== true) {
            setPhoto(response.uri);
            dispatch(
              setFormProfileImage({
                url: response.uri,
                base64: response.base64,
              })
            );
          }
        }
      );
    }
  }, [dispatch]);

  const _getLaunchGallery = useCallback(() => {
    setModalUpdload(false);
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      (response) => {
        if (response.didCancel !== true) {
          setPhoto(response.uri);
          dispatch(
            setFormProfileImage({
              url: response.uri,
              base64: response.base64,
            })
          );
        }
      }
    );
  }, [dispatch]);

  const _setName = useCallback(
    (val) => {
      dispatch(setFormProfileName(val));
    },
    [dispatch]
  );

  const _setPhone = useCallback(
    (val) => {
      dispatch(setFormProfilePhone(val));
    },
    [dispatch]
  );

  const _setSkill = useCallback(
    (val) => {
      dispatch(setFormProfileSkill(val));
    },
    [dispatch]
  );

  const _handleValidate = useCallback(() => {
    if (
      formProfile.phoneNumber.length >= 10 &&
      formProfile.phoneNumber.length <= 13
    ) {
      goToVerifyPassword();
    } else {
      setIsPhoneError(true);
    }
  }, [formProfile.phoneNumber.length, goToVerifyPassword]);

  return {
    //data props here
    data: {
      formProfile,
      photo,
      isEdit,
      isPhoneError,
      modalUpdload,
      modalViewPhoto,
    },
    //actions props here
    actions: {
      goBack,
      goToVerifyPassword,
      _setName,
      _setPhone,
      _setSkill,
      setIsEdit,
      setModalUpdload,
      setModalViewPhoto,
      setIsPhoneError,
      _getLaunchCamera,
      _getLaunchGallery,
      _handleValidate,
    },
  };
};

export default EditProfileLogic;

EditProfileLogic.dependencies = {
  navigator: EditProfileNavigator,
};
