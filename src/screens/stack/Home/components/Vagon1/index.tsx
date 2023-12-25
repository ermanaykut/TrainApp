import {View, Text, FlatList, ScrollView, Animated, Easing, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BusinessSeatData} from './BusinessSeatData';

import Seats from './components/Seats';
import styles from './style';
import {ISeat, ISeatStatus, VagonProps} from '../../../../../constants/Types';
import Icon from '../../../../../components/Icon';
import {colors} from '../../../../../constants/colors';
import ChooseGenderModal from './components/ChooseGenderModal';

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

const VagonOne: React.FC<VagonProps> = ({activeIndex}) => {
  //const {seats}: {seats: ISeat[]} = route?.params ?? {};

  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);
  const [selectedSeat, setSelectedSeat] = useState<ISeat>();
  const [visible, setVisible] = useState<boolean>(false);
  const [isAnimationRunning, setIsAnimationRunning] = useState(true);

  const animatedColorValue = new Animated.Value(0);

  useEffect(() => {}, [selectedSeat]);

  useEffect(() => {
    // Animation for wagon highlight
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedColorValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(animatedColorValue, {
          toValue: 0,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    );
    if (isAnimationRunning) {
      animation.start();
    } else {
      animation.stop();
    }

    return () => animation.stop();
  }, [activeIndex, isAnimationRunning]);

  const animatedBackgroundColor = animatedColorValue.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.white, colors.lightgrey],
  });

  const onSeatSelect = (item: ISeat) => {
    if (!selectedSeats.find(x => x.id === item?.id)) {
      // Check if the selected seats exceed the limit (e.g., 10 seats) when adding a new seat
      if (selectedSeats.length >= 10) {
        // You can show a message to the user or take any other action
        Alert.alert('You can only select up to 10 seats.');
        return;
      }
    }
  
    if (selectedSeats.find(x => x.id === item?.id)) {
      // If the seat is already selected, unselect it
      setSelectedSeats(x => [...x.filter(x => x.id !== item?.id)]);
    } else {
      // If the seat is not selected, select it
      setVisible(true);
      setSelectedSeat(item);
      // Pause animation when the modal is about to open
      setIsAnimationRunning(false);
    }
  };

  const onPressGender = (type: number) => {
    if (selectedSeat) {
      setSelectedSeats(x => [
        ...x,
        {...selectedSeat, taken: SEAT_STATUS.find(x => x.id === type)},
      ]);

      setVisible(false);
      // Resume animation when the modal is closed
      setIsAnimationRunning(true);
    }
  };

  const onDismiss = () => {
    setVisible(false);
    // Resume animation when the modal is closed
    setIsAnimationRunning(true);
  };

  const RenderBusiness = ({item}: {item: ISeat}) => {
    let gender = 0;
    selectedSeats.map(x => {
      if (x.id == item.id) {
        if (x.taken && x?.taken?.id == 1) gender = 1;
        else gender = 2;
      }
    });
    return <Seats item={item} onPress={onSeatSelect} selectedSeat={gender} />;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.trainContainer}>
        <View style={styles.leftVerticalTextContainer}>
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon}
          />
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon}
          />
          <View style={styles.verticalTextInnerContainer}>
            <Text style={styles.verticalText} numberOfLines={1}>
              Train Direction
            </Text>
          </View>
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon2}
          />
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon}
          />
        </View>
        <View style={styles.leftVerticalTextContainer2}>
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon}
          />
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon}
          />
          <View style={styles.verticalTextInnerContainer}>
            <Text style={styles.verticalText} numberOfLines={1}>
              Train Direction
            </Text>
          </View>
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon2}
          />
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon}
          />
        </View>
        <View style={styles.RighterticalTextContainer}>
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon}
          />
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon}
          />
          <View style={styles.verticalTextInnerContainer}>
            <Text style={styles.verticalText} numberOfLines={1}>
              Train Direction
            </Text>
          </View>

          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon2}
          />
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon}
          />
        </View>
        <View style={styles.RighterticalTextContainer2}>
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon}
          />
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon}
          />
          <View style={styles.verticalTextInnerContainer}>
            <Text style={styles.verticalText} numberOfLines={1}>
              Train Direction
            </Text>
          </View>

          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon2}
          />
          <Icon
            name="chevron-up : ion"
            size={40}
            color={colors.darkred + 80}
            style={styles.textIcon}
          />
        </View>
        <View style={styles.trainFrontline} />
        <View style={styles.trainInnerContainer}>
          <View style={styles.frontLuggageAndToiletContainer}>
            <View style={styles.luggage}>
              <View style={styles.frontLeftRotation}>
                <Icon
                  name="suitcase : fontisto"
                  size={20}
                  color={colors.darkred}
                />
                <Text style={styles.luggageText}>Luggage</Text>
              </View>
            </View>
            <View style={styles.toilet}>
              <View style={styles.frontRightRotation}>
                <Icon
                  name="male : fontisto"
                  size={30}
                  color={colors.darkblue}
                />
                <Icon
                  name="female : fontisto"
                  size={30}
                  color={colors.darkred}
                />
              </View>
              <View style={styles.frontToiletLine} />
              <View style={styles.frontToiletTextContainer}>
                <Text style={styles.frontToiletText}>WC</Text>
              </View>
            </View>
          </View>
          <View style={styles.verticalTextContainer3}>
            <Animated.View
              style={[
                styles.verticalTextInnerContainer3,
                {backgroundColor: animatedBackgroundColor},
              ]}>
              <Text style={styles.verticalText3} numberOfLines={1}>
                Business Class -- Business Class -- Business Class -- Business
                Class -- Business Class -- Business Class
              </Text>
            </Animated.View>
          </View>
          <FlatList
            data={BusinessSeatData}
            renderItem={RenderBusiness}
            numColumns={3}
            style={styles.flatList}
            initialNumToRender={BusinessSeatData.length}
            maxToRenderPerBatch={BusinessSeatData.length}
          />
          <View style={styles.backLuggagesContainer}>
            <View style={styles.leftluggage}>
              <View style={styles.backtLeftRotation}>
                <Icon
                  name="suitcase : fontisto"
                  size={15}
                  color={colors.darkred}
                />
                <Text style={styles.backluggageText}>Luggage</Text>
              </View>
            </View>
            <View style={styles.rightluggage}>
              <View style={styles.backtLeftRotation}>
                <Icon
                  name="suitcase : fontisto"
                  size={15}
                  color={colors.darkred}
                />
                <Text style={styles.backluggageText}>Luggage</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.backDoor}>
        <Text style={styles.backDoorText}>| Door |</Text>
      </View>
      <View style={styles.bottomBuffer}></View>
      <View style={{backgroundColor: colors.white}}>
        <ChooseGenderModal
          visible={visible}
          onDismiss={onDismiss}
          onPress={onPressGender}
        />
      </View>
    </ScrollView>
  );
};

export default VagonOne;

/*
 const onSeatSelect = (item: ISeat) => {
    if (selectedSeats.find(x => x.id === item.id)) {
      setSelectedSeats(x => [...x.filter(x => x.id != item.id)]);
    } else setSelectedSeats(x => [...x, item]);
  };
 */
