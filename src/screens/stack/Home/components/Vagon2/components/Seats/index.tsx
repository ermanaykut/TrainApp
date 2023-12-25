import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {ISeat, ISeatStatus} from '../../../../../../../constants/Types';
import {IconTypes} from '../../../../../../../components/Icon/types';
import {colors} from '../../../../../../../constants/colors';
import Icon from '../../../../../../../components/Icon';
import styles from './style';

const SEAT_STATUS: ISeatStatus[] = [
  {
    id: 1,
    gender: 'male',
  },
  {
    id: 2,
    gender: 'female',
  },
  {
    id: 3,
    gender: 'disabled',
  },
];



const Seats = ({
  item,
  onPress,
  selectedSeatGender,
}: {
  item: ISeat;
  onPress: (item: ISeat) => void;
  selectedSeatGender?: number;
}) => {
  let gender = SEAT_STATUS.find(x => x.id === item?.taken?.id);

  let iconName: IconTypes | null = null;

  let color: string = colors.grey;

  if (selectedSeatGender === 0 && gender) {
    iconName =
      gender.id === 1
        ? 'male : fontisto'
        : gender.id === 2
        ? 'female : fontisto'
        : 'wheelchair : fontisto';
    color =
      gender.id === 1
        ? colors.darkblue
        : gender.id === 2
        ? colors.darkred
        : colors.brown;
  } else if (selectedSeatGender === 1) {
    iconName = 'male : fontisto';
    color = colors.grey;
  } else if (selectedSeatGender === 2) {
    iconName = 'female : fontisto';
    color = colors.grey;
  } else if (selectedSeatGender === 3) {
    iconName = 'wheelchair : fontisto';
    color = colors.grey;
  }

  const _onPress = () => {
    onPress(item);
  };

  // Check if the seat number is in the specified list
  const isRotatableSeat =
    [9, 10, 13, 14, 17, 18, 21, 22, 25, 26].includes(item.seatNumber || 0);

  return (
    <View style={styles.hallwayContainer}>
      <TouchableOpacity
        onPress={_onPress}
        disabled={!(item.is_active && typeof gender === 'undefined')}
        activeOpacity={0.6}
        style={[
          styles.seatContainer,
          isRotatableSeat ? styles.rotateSeatContainer : null,
          !item.is_active && !item.is_rightTable &&styles.nullContainer,
          !item.is_active && item.is_rightTable &&styles.nullContainerTable,
          item.disabled && styles.disabledSeatContainer
        ]}>
        <View style={styles.iconContainer}>
          {iconName !== null && (
            <Icon
              name={iconName}
              color={color}
              size={item.disabled ? 35 : 20}
              style={isRotatableSeat ? styles.rotateIcon : null}
            />
          )}
        </View>
        {item.is_active && (
          <View style={styles.seatNumberContainer}>
            <Text
              style={[
                styles.numberText,
                isRotatableSeat ? styles.rotateNumberText : null,
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

