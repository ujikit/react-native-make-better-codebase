//package import
import React, { memo } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';

//local import
import styles from './styles';

const FlatlistPagination = ({
  data,
  renderItem,
  loading,
  onRefresh,
  onEndReached,
  ListEmptyComponent,
  ...props
}) => {
  return (
    <FlatList
      data={data}
      extraData={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={onRefresh} />
      }
      refreshing={loading}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      initialNumToRender={20}
      ListEmptyComponent={ListEmptyComponent}
      {...props}
    />
  );
};

FlatlistPagination.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
  renderItem: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  loading: PropTypes.bool,
  onRefresh: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  onEndReached: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
  ListEmptyComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.any]),
};

FlatlistPagination.defaultProps = {
  data: [],
  renderItem: () => null,
  loading: false,
  onRefresh: () => null,
  onEndReached: () => null,
  ListEmptyComponent: () => null,
};

export default memo(FlatlistPagination);
