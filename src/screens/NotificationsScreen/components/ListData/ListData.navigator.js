import { useNavigation } from '@react-navigation/native';

const ListDataNavigator = () => {
  //package value here
  const navigation = useNavigation();

  const _headerTitle = (type) => {
    switch (type) {
      case '1':
        return 'IPL + Water Billing';
      case '2':
        return 'Payment Detail';
      default:
        return 'Payment Detail';
    }
  };

  //place your function navigation in here
  const goBack = () => navigation.goBack();
  const goToPaymentDetail = (data) =>
    navigation.navigate('PaymentDetail', {
      title: _headerTitle(data.type),
      data: [data],
    });
  const goToDetailNews = (payload) =>
    navigation.navigate('DetailFeedForYou', { payload });

  return {
    navigation,
    goBack,
    goToPaymentDetail,
    goToDetailNews,
  };
};

export default ListDataNavigator;
