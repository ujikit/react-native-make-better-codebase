//package import here
import { useEffect, useState, useMemo } from 'react';
import { BackHandler } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import moment from 'moment';

//local import here
import HandoverDetailNavigator from './HandoverDetail.navigator';
import {
  postAddHandover,
  postUpdateHandover,
  resetSendHandover,
} from './../../../redux/redux-actions';

const HandoverDetailLogic = () => {
  //package value here
  const { navigator } = HandoverDetailLogic.dependencies;
  const {
    goBack,
    goToComplaintForm,
    goToComplaintResult,
    goToHandoverCheck,
    navigation,
  } = navigator();
  const handoverState = useSelector((state) => state.handover);
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);

  //state value here
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPickPhoto, setModalPickPhoto] = useState(false);
  const [dataHandover, setDataHandover] = useState([]);
  const [imageOne, setImageOne] = useState('');
  const [imageTwo, setImageTwo] = useState('');
  const [imageThree, setImageThree] = useState('');
  const [indexImage, setIndexImage] = useState('');
  const [imageOneBase64, setImageOneBase64] = useState('');
  const [imageTwoBase64, setImageTwoBase64] = useState('');
  const [imageThreeBase64, setImageThreeBase64] = useState('');
  const [modalUpdate, setModalUpdate] = useState(false);
  const [changeStatus, setChangeStatus] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [update, setUpdate] = useState(false);
  const [handoverStatus, setHandoverStatus] = useState('');
  const [diffDays, setDiffDays] = useState(0);
  const [progressUpload, setProgressUpload] = useState('0%');
  const [isUpload, setIsUpload] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  //variable value here
  const abort = controller.signal;

  useEffect(() => {
    return () => controller.abort();
  }, [controller]);

  useEffect(() => {
    //function here
    setDataHandover(handoverState.dataSelected);
    setHandoverStatus(handoverState.dataSelected.status);

    let given = moment(dataHandover.agenda, 'DD MMM YYYY');
    let current = moment().startOf('day');
    let difference = moment.duration(given.diff(current)).asDays();
    setDiffDays(difference);
  }, [dataHandover.agenda, handoverState.dataSelected]);

  const _goBack = () => {
    goBack();
  };

  useEffect(() => {
    if (dataHandover.length !== 0) {
      if (
        dataHandover.image[0] !== null &&
        dataHandover.image[0] !== undefined
      ) {
        setImageOne(dataHandover.image[0]);
      }
      if (
        dataHandover.image[1] !== null &&
        dataHandover.image[1] !== undefined
      ) {
        setImageTwo(dataHandover.image[1]);
      }
      if (
        dataHandover.image[2] !== null &&
        dataHandover.image[2] !== undefined
      ) {
        setImageThree(dataHandover.image[2]);
      }
    }
  }, [dataHandover.image, dataHandover.length]);

  useEffect(() => {
    if (
      handoverState.addHandover.code === 200 ||
      handoverState.updateHandover.code === 200
    ) {
      setSuccessAlert(true);
    } else if (
      handoverState.addHandover.code > 200 ||
      handoverState.updateHandover.code > 200
    ) {
      setErrorMessage(true);
    }
  }, [handoverState.addHandover.code, handoverState.updateHandover.code]);

  useEffect(() => {
    if (
      handoverState.addHandover.isLoading ||
      handoverState.updateHandover.isLoading
    ) {
      setIsUpload(true);
    } else {
      setIsUpload(false);
    }
  }, [
    handoverState.addHandover.isLoading,
    handoverState.updateHandover.isLoading,
  ]);

  //place your function in here

  const _setPickModal = (index) => {
    setModalPickPhoto(true);
    setIndexImage(index);
  };

  const _getLaunchCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      (response) => {
        setModalPickPhoto(false);
        if (response.didCancel !== true) {
          if (indexImage === 0) {
            setImageOne(response.uri);
            setImageOneBase64(`data:image/png;base64,${response.base64}`);
          } else if (indexImage === 1) {
            setImageTwo(response.uri);
            setImageTwoBase64(`data:image/png;base64,${response.base64}`);
          } else {
            setImageThree(response.uri);
            setImageThreeBase64(`data:image/png;base64,${response.base64}`);
          }
        }
      }
    );
  };

  const _getLaunchGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      (response) => {
        setModalPickPhoto(false);
        if (response.didCancel !== true) {
          if (indexImage === 0) {
            setImageOne(response.uri);
            setImageOneBase64(`data:image/png;base64,${response.base64}`);
          } else if (indexImage === 1) {
            setImageTwo(response.uri);
            setImageTwoBase64(`data:image/png;base64,${response.base64}`);
          } else {
            setImageThree(response.uri);
            setImageThreeBase64(`data:image/png;base64,${response.base64}`);
          }
        }
      }
    );
  };

  const _sendHandover = () => {
    if (!update) {
      const handoverId = dataHandover.handoverId;
      const image = [imageOneBase64];
      if (imageTwoBase64 !== '' && imageTwoBase64 !== null) {
        image.push(imageTwoBase64);
      }
      if (imageThreeBase64 !== '' && imageThreeBase64 !== null) {
        image.push(imageThreeBase64);
      }

      const body = { handoverId: handoverId, image: image };
      if (!handoverState.addHandover.isLoading) {
        dispatch(
          postAddHandover(body, navigation, (progress) => {
            setProgressUpload(
              `${Math.floor((progress.loaded / progress.total) * 100)}%`
            );
          })
        );
      }
    } else {
      const handoverId = dataHandover.handoverId;
      const image = [];
      if (imageOneBase64 !== '' && imageOneBase64 !== null) {
        image.push(imageOneBase64);
      } else {
        if (imageOne !== '') {
          image.push(imageOne);
        }
      }

      if (imageTwoBase64 !== '' && imageTwoBase64 !== null) {
        image.push(imageTwoBase64);
      } else {
        if (imageTwo !== '') {
          image.push(imageTwo);
        }
      }

      if (imageThreeBase64 !== '' && imageThreeBase64 !== null) {
        image.push(imageThreeBase64);
      } else {
        if (imageThree !== '') {
          image.push(imageThree);
        }
      }

      const body = { handoverId: handoverId, image: image };
      if (!handoverState.updateHandover.isLoading) {
        dispatch(
          postUpdateHandover(body, navigation, (progress) => {
            setProgressUpload(
              `${Math.floor((progress.loaded / progress.total) * 100)}%`
            );
          })
        );
      }
    }
  };

  const _modalUpdate = () => {
    setUpdate(true);
    setModalUpdate(true);
  };

  const _changeStatus = () => {
    setChangeStatus(true);
    setModalUpdate(false);
    setHandoverStatus('Undone');
  };

  return {
    //data props here
    data: {
      changeStatus,
      dataHandover,
      diffDays,
      errorMessage,
      handoverState,
      handoverStatus,
      isUpload,
      imageOne,
      imageTwo,
      imageThree,
      modalVisible,
      modalPickPhoto,
      modalUpdate,
      progressUpload,
      successAlert,
    },
    //actions props here
    actions: {
      goBack,
      _getLaunchCamera,
      _getLaunchGallery,
      _goBack,
      _setPickModal,
      _sendHandover,
      _changeStatus,
      _modalUpdate,
      goToComplaintForm,
      goToComplaintResult,
      goToHandoverCheck,
      setModalVisible,
      setModalPickPhoto,
      setModalUpdate,
      setSuccessAlert,
      setErrorMessage,
    },
  };
};

export default HandoverDetailLogic;

HandoverDetailLogic.dependencies = {
  navigator: HandoverDetailNavigator,
};
