import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Modal, Portal} from 'react-native-paper';

import {Icon} from 'custom-components/src';
import styles from './style';
import {colors} from '../../../../../../../constants/colors';
import {ISeat} from '../../../../../../../constants/Types';

const ChooseGenderModal = ({
  visible,
  onDismiss,
  onPress,
  item,
}: {
  visible: boolean;
  onDismiss: () => void;
  onPress: (type: number) => void;
  item: ISeat;
}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        style={{backgroundColor: colors.dottedGrey + 10}}>
        <View style={styles.modalContainer}>
          {item?.seatNumber && item.seatNumber > 6 ? (
            <>
              <Text>Choose your gender please.</Text>
              <Pressable onPress={() => onPress(1)} style={styles.gender}>
                <Icon name="male : fontisto" size={30} color={colors.blue} />
                <Text>Male</Text>
              </Pressable>

              <Pressable onPress={() => onPress(2)} style={styles.gender}>
                <Icon name="female : fontisto" size={30} color={colors.pink} />
                <Text>Female</Text>
              </Pressable>
            </>
          ) : (
            <>
              <Text style={styles.disabledUpperText}>Select your seat please.</Text>
              <Pressable onPress={() => onPress(3)} style={styles.gender}>
                <Icon
                  name="wheelchair : fontisto"
                  size={35}
                  color={colors.myGreen}
                />
                <Text>Disabled</Text>
              </Pressable>
              <Text style={styles.disabledLowerText}>
                <Text style={styles.disabledLowerWarningText}>Warning :</Text> These seats are reserved for disabled people
              </Text>
            </>
          )}
        </View>
      </Modal>
    </Portal>
  );
};

export default ChooseGenderModal;
