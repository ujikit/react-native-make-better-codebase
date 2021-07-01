import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from './styles';
import { STYLES, COLORS } from '../../../../configs';
import I18n from '../../../../i18n';
import { useSelector } from 'react-redux';

const StepHorizontal = ({ paddingHorizontal }) => {
  const { maintenanceDetail } = useSelector((state) => state.maintenance);
  const step = maintenanceDetail.step;
  const currentStatus =
    step[step.filter((item) => item.time).length - 1].status;

  return (
    <View style={[styles.container, { paddingHorizontal }]}>
      <View style={styles.wrapHorizontalLine}>
        <View style={styles.wrapMainBullet}>
          <View
            style={[
              styles.wrapBullet,
              currentStatus == 'waiting' && { backgroundColor: COLORS.red50 },
            ]}
          />
          <View
            style={[
              styles.wrapBullet,
              currentStatus == 'inProgress' && {
                backgroundColor: COLORS.orange50,
              },
            ]}
          />
          <View
            style={[
              styles.wrapBullet,
              currentStatus == 'done' && { backgroundColor: COLORS.green50 },
            ]}
          />
        </View>
      </View>
      <View style={styles.wrapMainText}>
        {step.map((item, index) => (
          <View key={index} style={{ flex: 1 }}>
            <Text
              style={[
                styles.defaultTextTitle,
                {
                  color:
                    currentStatus == 'waiting' && item.status == currentStatus
                      ? COLORS.red50
                      : currentStatus == 'inProgress' &&
                        item.status == currentStatus
                      ? COLORS.orange50
                      : currentStatus == 'done' && item.status == currentStatus
                      ? COLORS.green50
                      : COLORS.black60,
                },
                {
                  alignSelf:
                    step
                      .map((item) => item.status)
                      .indexOf(step[index].status) == 0
                      ? 'flex-start'
                      : step
                          .map((item) => item.status)
                          .indexOf(step[index].status) +
                          1 ==
                        step.length
                      ? 'flex-end'
                      : 'center',
                },
              ]}
            >
              {I18n.t(item.status).split(' ').length > 1
                ? I18n.t(item.status).split(' ')[1]
                : I18n.t(item.status).split(' ')}
            </Text>
            <Text
              style={[
                styles.defaultTextTitle,
                {
                  color:
                    currentStatus == 'waiting' && item.status == currentStatus
                      ? COLORS.red50
                      : currentStatus == 'inProgress' &&
                        item.status == currentStatus
                      ? COLORS.orange50
                      : currentStatus == 'done' && item.status == currentStatus
                      ? COLORS.green50
                      : COLORS.black60,
                },
                {
                  alignSelf:
                    step
                      .map((item) => item.status)
                      .indexOf(step[index].status) == 0
                      ? 'flex-start'
                      : step
                          .map((item) => item.status)
                          .indexOf(step[index].status) +
                          1 ==
                        step.length
                      ? 'flex-end'
                      : 'center',
                },
                { marginVertical: 4 },
              ]}
            >
              {item.time &&
                `${item.time.split(' ')[0]} ${item.time.split(' ')[1]}`}
            </Text>
            <Text
              style={[
                styles.defaultTextTitle,
                {
                  color:
                    currentStatus == 'waiting' && item.status == currentStatus
                      ? COLORS.red50
                      : currentStatus == 'inProgress' &&
                        item.status == currentStatus
                      ? COLORS.orange50
                      : currentStatus == 'done' && item.status == currentStatus
                      ? COLORS.green50
                      : COLORS.black60,
                },
                {
                  alignSelf:
                    step
                      .map((item) => item.status)
                      .indexOf(step[index].status) == 0
                      ? 'flex-start'
                      : step
                          .map((item) => item.status)
                          .indexOf(step[index].status) +
                          1 ==
                        step.length
                      ? 'flex-end'
                      : 'center',
                },
              ]}
            >
              {item.time && item.time.split(' ')[2]}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

StepHorizontal.propTypes = {};

StepHorizontal.defaultProps = {};

export default memo(StepHorizontal);
