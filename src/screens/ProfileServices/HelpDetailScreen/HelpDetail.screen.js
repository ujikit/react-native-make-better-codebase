//package import here
import React from 'react';
import { View, Text } from 'react-native';

//local import here
import styles from './HelpDetail.styles';
import HelpDetailLogic from './HelpDetail.logic';
import I18n from '../../../i18n';
import { Header, Button } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import { ArrowLeftIcon } from '../../../assets/svgs';

const HelpDetailScreen = () => {
  //logic value here
  const { data, actions } = HelpDetailLogic();

  return (
    <View style={styles.container}>
      <Header styleContainer={styles.headerContainer}>
        <Button
          types="nude"
          onPress={actions.goBack}
          styleContainer={styles.backContainer}
          styleWrap={styles.backWrap}
        >
          <ArrowLeftIcon width={17} height={17} fill={COLORS.black} />
        </Button>
        <Text style={[styles.headerTitle, STYLES.txtCapitalize]}>
          Pemeliharaan
        </Text>
      </Header>
      <View style={styles.wrapContainer}>
        <Text style={styles.title}>Permasalahan pada pemeliharaan</Text>
        <Text style={styles.desc}>
          Penentuan harga jual sebuah produk merupakan titik yang krusial yang
          menentukan apakah sebuah produk dapat terjual atau tersewa dan masih
          dalam tarif harga yang wajar sesuai dengan permintaan pasar. Jika Anda
          memiliki apartemen dan Anda mengelola penyewaannya sendiri, tentu Anda
          harus cukup cerdik dalam menentukan harga sewa apartemen Anda kepada
          calon penyewa. Tentu Anda tidak mau harga sewa apartemen Anda ternyata
          terlalu murah dari harga pasaran atau tidak sesuai dengan perhitungan
          harga jual dari apartemen Anda sehingga Anda malah tidak mendapatkan
          keuntungan yang sesuai. Atau malahan Anda mematok harga terlalu tinggi
          dan melebihi harga pasar. Atau bisa jadi fasilitas yang Anda tawarkan
          dalam apartemen yang disewakan tidak sesuai dengan harga sewa.
        </Text>
      </View>
    </View>
  );
};

export default HelpDetailScreen;
