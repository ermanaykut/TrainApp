import { View, Text, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { GestureHandlerRootView, ScrollView as GestureScrollView } from 'react-native-gesture-handler';
import React, { useRef, useEffect } from 'react';
import styles from './style';

const { width } = Dimensions.get('screen');

const Tab = ({ activeIndex, changeActiveIndex }: { activeIndex: number, changeActiveIndex: (index: number) => void }) => {
  const scrollViewRef = useRef<GestureScrollView>(null);

  useEffect(() => {
    //Container and tabWidth definitions come from styleSheet
    const containerWidth = styles.tabContainer.width; 
    const tabWidth = styles.vagonSubTabContainer.width;

    // Calculate the offset to make the active tab visible
    const offset = (activeIndex - 1) * tabWidth;
    const adjustedOffset = offset - width/4.25;

    // Scroll to the calculated offset
    scrollViewRef.current?.scrollTo({ x: adjustedOffset, animated: true });
  }, [activeIndex]);

  return (
    <GestureHandlerRootView>
      <GestureScrollView
        ref={scrollViewRef}
        horizontal
        contentContainerStyle={styles.tabContainer}
        showsHorizontalScrollIndicator={false}
      >
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <TouchableOpacity
            key={index}
            onPress={() => changeActiveIndex(index)}
            style={[
              styles.vagonSubTabContainer,
              activeIndex === index && styles.activeVagonSubTabContainer,
            ]}
          >
            <Text
              style={[
                styles.subTabText,
                activeIndex === index && styles.activeSubTabText,
              ]}
            >
              Vagon {index}
            </Text>
          </TouchableOpacity>
        ))}
      </GestureScrollView>
    </GestureHandlerRootView>
  );
};

export default Tab;

/*
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { GestureHandlerRootView, ScrollView as GestureScrollView } from 'react-native-gesture-handler';
import React, { useRef, useEffect } from 'react';
import styles from './style';

const {width} = Dimensions.get('screen')

const Tab = ({ activeIndex, changeActiveIndex }: { activeIndex: number, changeActiveIndex: (index: number) => void }) => {
  const scrollViewRef = useRef<GestureScrollView>(null);

  useEffect(() => {
    //Container and tabWidth definitions come from styleSheet
    const containerWidth = styles.tabContainer.width; 
    const tabWidth = styles.vagonSubTabContainer.width;

    // Calculate the offset to make the active tab visible
    const offset = (activeIndex - 1) * tabWidth;
    const adjustedOffset = offset - width/4.25;

    // Scroll to the calculated offset
    scrollViewRef.current?.scrollTo({ x: adjustedOffset, animated: true });
  }, [activeIndex]);
*/

/*
const Tab = ({ activeIndex, changeActiveIndex }: { activeIndex: number, changeActiveIndex: (index: number) => void }) => {
  const scrollViewRef = useRef<GestureScrollView>(null);

  useEffect(() => {
    // Container and tabWidth definitions come from styleSheet
    const containerWidth = styles.tabContainer.width;
    const tabWidth = styles.vagonSubTabContainer.width;

    // Calculate the offset to make the active tab visible
    const offset = (activeIndex - 1) * tabWidth;
    const adjustedOffset = offset - width / 4.25;

    // Create an animated value for the duration
    const duration = 10; // Adjust the duration value as needed

    // Create an Animated.Value and start the timing animation
    const animatedValue = new Animated.Value(0);

    Animated.timing(animatedValue, {
      toValue: 1,
      duration: duration,
      useNativeDriver: false, // Set to true if using native driver is possible
    }).start();

    // Add an event listener for changes in animatedValue
    animatedValue.addListener(({ value }) => {
      // Interpolate the value to adjust the duration dynamically
      const interpolatedDuration = value * duration;
      
      const scrollConfig = {
        x: adjustedOffset,
        animated: true,
        // Use type casting to include the duration property
        duration: interpolatedDuration as unknown as number,
      };
      // Scroll to the calculated offset with the interpolated duration
      scrollViewRef.current?.scrollTo(scrollConfig);
    });

    return () => {
      // Clean up the animatedValue listener when the component unmounts
      animatedValue.removeAllListeners();
    };
  }, [activeIndex]);


 */
