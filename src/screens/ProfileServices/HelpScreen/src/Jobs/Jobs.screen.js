//package import here
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

//local import here
import styles from './Jobs.styles';
import JobsLogic from './Jobs.logic';
import I18n from '../../../../../i18n';
import { STYLES } from '../../../../../configs';

const JobsScreen = () => {
  //logic value here
  const { data, actions } = JobsLogic();

  const _renderItem = ({ item, index }) => (
    <TouchableOpacity style={STYLES.mrv16} onPress={() => actions.toDetail()}>
      <Text style={styles.listItem}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>
        <FlatList
          data={data.listService}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
          ItemSeparatorComponent={() => <View style={[styles.bottomLine]} />}
        />
      </View>
    </View>
  );
};

export default JobsScreen;
