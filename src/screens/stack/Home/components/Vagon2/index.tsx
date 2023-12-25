import {
  View,
  Text,
  FlatList,
  ScrollView,
  Animated,
  Easing,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Seats from './components/Seats';
import styles from './style';
import {ISeat, ISeatStatus, VagonProps} from '../../../../../constants/Types';
import {Vagon2Data} from './Vagon2Data';
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
  {
    id: 3,
    gender: 'disabled',
  },
];

const {width, height} = Dimensions.get('screen');

const VagonTwo: React.FC<VagonProps> = ({activeIndex}) => {
  // const {seats}: {seats: ISeat[]} = route?.params ?? {};

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
    ])
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

const scrollX = new Animated.Value(0);

useEffect(() => {
  let animation: Animated.CompositeAnimation;

  const startScrollAnimation = () => {
    animation = Animated.loop(
      Animated.timing(scrollX, {
        toValue: 6,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    animation.start();
  };

  const stopScrollAnimation = () => {
    animation.stop();
  };

  if (isAnimationRunning) {
    startScrollAnimation();
  } else {
    stopScrollAnimation();
  }

  return () => {
    stopScrollAnimation();
  };
}, [isAnimationRunning, scrollX]);

const translateX = scrollX.interpolate({
  inputRange: [0, 1],
  outputRange: [-width / 5, width / 4],
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

  const RenderRestaurant = ({item}: {item: ISeat}) => {
    // Find the selected seat based on the item id
    const selectedSeat = selectedSeats.find(x => x.id === item.id);

    // Determine the gender based on the selected seat
    const gender = selectedSeat?.taken?.id || 0;

    return (
      <Seats item={item} onPress={onSeatSelect} selectedSeatGender={gender} />
    );
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
        <View style={styles.frontDoor}>
          <Text style={styles.frontDoorText}>| Door |</Text>
        </View>
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
                  name="wheelchair : fontisto"
                  size={40}
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
                Economy Class -- Economy Class -- Economy Class -- Economy Class
                -- Economy Class -- Economy Class
              </Text>
            </Animated.View>
          </View>
          <View style={styles.settlementContainer}>
            <View style={styles.leftSettlement}>
              <View style={styles.restaurant}>
                <View style={styles.innerRestaurant}>
                  <Animated.View
                    style={{transform: [{translateX}], width: height * 3.7}}>
                    <Text style={styles.coffeText} numberOfLines={1}>
                      -- Train Cafe -- Coffee & Snacks -- Train Cafe -- Coffee &
                      Snacks -- Train Cafe -- Coffee & Snacks -- Train Cafe --
                      Coffee & Snacks -- Train Cafe -- Coffee & Snacks -- Train
                      Cafe -- Coffee & Snacks -- Train Cafe -- Coffee & Snacks
                      -- Train Cafe -- Coffee & Snacks -- Train Cafe -- Coffee &
                      Snacks -- Train Cafe -- Coffee & Snacks -- Train Cafe
                      --Coffee & Snacks -- Train Cafe -- Coffee & Snacks --
                      Train Cafe -- Coffee & Snacks -- Train Cafe --Coffee &
                      Snacks -- Train Cafe -- Coffee & Snacks -- Train Cafe --
                      Coffee & Snacks -- Train Cafe -- Coffee & Snacks -- Train
                      Cafe -- Coffee & Snacks -- Train Cafe -- Coffee & Snacks
                      -- Train Cafe -- Coffee & Snacks -- Train Cafe -- Coffee &
                      Snacks -- Train Cafe -- Coffee & Snacks -- Train Cafe --
                      Coffee & Snacks -- Train Cafe --Coffee & Snacks -- Train
                      Cafe -- Coffee & Snacks -- Train Cafe -- Coffee & Snacks
                      -- Train Cafe --
                    </Text>
                  </Animated.View>
                </View>
              </View>
              <View style={styles.backToilet}>
                <View style={styles.backToiletLine} />
                <View style={styles.backLeftRotation}>
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
                <View style={styles.backToiletTextContainer}>
                  <Text style={styles.backToiletText}>WC</Text>
                </View>
              </View>
            </View>
            <View style={styles.flatContainer}>
              <FlatList
                data={Vagon2Data}
                renderItem={RenderRestaurant}
                numColumns={2}
                contentContainerStyle={styles.flatList}
                initialNumToRender={Vagon2Data.length}
                maxToRenderPerBatch={Vagon2Data.length}
              />
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
          item={selectedSeat || ({} as ISeat)}
          visible={visible}
          onDismiss={onDismiss}
          onPress={onPressGender}
        />
      </View>
    </ScrollView>
  );
};

export default VagonTwo;

/*
 const onSeatSelect = (item: ISeat) => {
    if (selectedSeats.find(x => x.id === item.id)) {
      setSelectedSeats(x => [...x.filter(x => x.id != item.id)]);
    } else setSelectedSeats(x => [...x, item]);
  };
 */
