import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Modal, Portal} from 'react-native-paper';

import {Icon} from 'custom-components/src';
import styles from './style';
import {colors} from '../../../../../../../constants/colors';

const ChooseGenderModal = ({
  visible,
  onDismiss,
  onPress,
}: {
  visible: boolean;
  onDismiss: () => void;
  onPress: (type: number) => void;
}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        style={{backgroundColor: colors.dottedGrey + 10}}>
        <View style={styles.modalContainer}>
          <Text>Choose your gender please.</Text>
          <Pressable onPress={() => onPress(1)} style={styles.gender}>
            <Icon name="male : fontisto" size={30} color={colors.blue} />
            <Text>Male</Text>
          </Pressable>

          <Pressable onPress={() => onPress(2)} style={styles.gender}>
            <Icon name="female : fontisto" size={30} color={colors.pink} />
            <Text>Female</Text>
          </Pressable>
        </View>
      </Modal>
    </Portal>
  );
};

export default ChooseGenderModal;
