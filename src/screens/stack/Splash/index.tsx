import React, { useEffect, useRef } from 'react';
import { View, Animated, Image, Dimensions } from 'react-native';
import { Button } from 'custom-components/src';
import { useNavigation } from '@react-navigation/native';
import { PAGES } from '../../pages';
import { colors } from '../../../constants/colors';
import styles from './style';

const { width } = Dimensions.get('screen');


const Splash = () => {
  const navigation = useNavigation<any>();

  const duration = 1000;
  const delay = 200;

  const animations = useRef([...Array(10)].map(() => new Animated.Value(0))).current;
  const buttonAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
    return () => stopAnimation();
  }, []);

  const startAnimation = () => {
    Animated.stagger(
      delay,
      animations.map((x) => {
        return Animated.timing(x, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        });
      })
    ).start(({ finished }) => {
      if (finished) {
        // Animation for images is complete, start button animation
        startButtonAnimation();
      }
    });
  };

  const stopAnimation = () => {
    [...animations, buttonAnimation].forEach((animatedValue) => {
      animatedValue.setValue(1); // Set values to 1 to keep the final position
    });
  };

  const buttonDuration = 1250;

  const startButtonAnimation = () => {
    Animated.timing(buttonAnimation, {
      toValue: 1,
      duration:buttonDuration,
      useNativeDriver: true,
    }).start();
  };

  const imageSource = [
    require('../../../constants/assets/image1.png'),
    require('../../../constants/assets/image2.png'),
    require('../../../constants/assets/image3.png'),
    require('../../../constants/assets/image4.png'),
    require('../../../constants/assets/image5.png'),
    require('../../../constants/assets/image6.png'),
    require('../../../constants/assets/image7.png'),
    require('../../../constants/assets/image8.png'),
    require('../../../constants/assets/image9.png'),
    require('../../../constants/assets/image10.png'),
  ];

  const NavToHome = () => {
    navigation.navigate(PAGES.HOME.name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        {animations.map((x, index) => (
          <Animated.View
            key={index}
            style={[
              styles.box,
              {
                transform: [
                  {
                    translateY: x.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-(animations.length + 2) * 50, index * 33],
                    }),
                  },
                ],
              },
            ]}
          >
            <Image source={imageSource[index % imageSource.length]} style={{ width: '100%', height: width / 5.4 }} />
          </Animated.View>
        ))}
      </View>

      <Animated.View
        style={[
          styles.buttonContainer,
          {
            transform: [
              {
                translateY: buttonAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [width/1.2, width/4.5], // Adjust the values as needed
                }),
              },
            ],
          },
        ]}
      >
        <Button containerStyle={styles.buttonStyle} onPress={NavToHome} text="Get Tickets" textStyle={styles.buttonText} />
      </Animated.View>
    </View>
  );
};

export default Splash;
