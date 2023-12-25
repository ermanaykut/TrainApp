import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './style';
import {ISeat, ISeatStatus} from '../../../../../../../constants/Types';
import {IconTypes} from '../../../../../../../components/Icon/types';
import {colors} from '../../../../../../../constants/colors';
import Icon from '../../../../../../../components/Icon';

const SEAT_STATUS: ISeatStatus[] = [
  {
    id: 1,
    gender: 'male',
  },
  {
    id: 2,
    gender: 'female',
  },
];

const Seats = ({
  item,
  onPress,
  selectedSeat,
}: {
  item: ISeat;
  onPress: (item: ISeat) => void;
  selectedSeat?: number;
}) => {
  let gender = SEAT_STATUS.find(x => x.id === item?.taken?.id);

  let iconName: IconTypes | null = null;

  if (selectedSeat === 0 && typeof gender === 'undefined') {
    iconName = null;
  } else if (selectedSeat === 0) {
    iconName = gender?.id === 1 ? 'male : fontisto' : 'female : fontisto';
  } else {
    iconName = selectedSeat === 1 ? 'male : fontisto' : 'female : fontisto';
  }

  let color =
    selectedSeat === 0
      ? gender?.id === 1
        ? colors.darkblue
        : colors.darkred
      : colors.grey;

  const _onPress = () => {
    onPress(item);
  };
  return (
    <View style={[item?.id % 3 === 1 && styles.singleContainer]}>
      <TouchableOpacity
        onPress={_onPress}
        disabled={!(item.is_active && typeof gender === 'undefined')}
        activeOpacity={0.6}
        style={[
          styles.seatContainer,
          (item?.seatNumber && item.seatNumber > 15 && item.seatNumber <= 30) ||
          (item?.seatNumber && item.seatNumber > 45)
            ? styles.rotateSeatContainer
            : null,
          !item.is_active && styles.nullContainer,
        ]}>
        <View style={styles.iconContainer}>
          {iconName !== null && ( // Check if iconName is not null
            <Icon
              name={iconName}
              color={color}
              size={20}
              style={
                (item?.seatNumber &&
                  item.seatNumber > 15 &&
                  item.seatNumber <= 30) ||
                (item?.seatNumber && item.seatNumber > 45)
                  ? styles.rotateIcon
                  : null
              }
            />
          )}
        </View>
        {item.is_active && (
          <View style={styles.seatNumberContainer}>
            <Text
              style={[
                styles.numberText,
                (item?.seatNumber &&
                  item.seatNumber > 15 &&
                  item.seatNumber <= 30) ||
                (item?.seatNumber && item.seatNumber > 45)
                  ? styles.rotateNumberText
                  : null,
              ]}>
              {item?.seatNumber}
            </Text>
          </View>
        )}
        {!item.is_active && item.is_leftTable && (
          <View style={styles.leftTable} />
        )}
        {!item.is_active && item.is_rightTable && (
          <View style={styles.rightTable} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Seats;
