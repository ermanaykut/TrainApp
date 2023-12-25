import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../../../constants/colors';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.white,
  },
  leftVerticalTextContainer: {
    position: 'absolute',
    top: width / 2,
    left: -width / 9,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:-1,
  },
  leftVerticalTextContainer2: {
    position: 'absolute',
    top: width * 2.1,
    left: -width / 9,
    alignItems: 'center',
    zIndex:-1,
  },
  RighterticalTextContainer: {
    position: 'absolute',
    top: width / 2,
    right: -width / 9,
    alignItems: 'center',
    zIndex:-1,
  },
  RighterticalTextContainer2: {
    position: 'absolute',
    top: width * 2.1,
    right: -width / 9,
    alignItems: 'center',
    zIndex:-1,
  },
  verticalTextInnerContainer: {
    height: width / 3,
    justifyContent: 'center',
    transform: [{rotate: '-90deg'}],
  },
  verticalText: {
    fontSize: 20,
    color: colors.darkred,
    opacity: 0.8,
  },
  textIcon: {
    width: 40,
  },
  textIcon2: {
    width: 40,
  },
  trainContainer: {
    paddingHorizontal: width / 10,
  },

  trainInnerContainer: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.darkred,
    width: width * 0.8,
    marginTop: -width / 35,
    zIndex: -1,
  },
  trainFrontline: {
    borderColor: colors.darkred,
    width: width * 0.8,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    height: width / 8,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    marginBottom: -width / 48,
  },
  verticalTextContainer3: {
    height: width ,
    width: width / 3,
    position: 'absolute',
    top: width / 1.125,
    left: width / 4.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalTextInnerContainer3: {
    borderRadius: 8,
    width: width * 2.6,
    height: width / 8,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '-90deg'}],
    backgroundColor: colors.dottedGrey + 20,
  },
  verticalText3: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.darkred,
    opacity: 0.5,
  },
  frontDoor: {
    backgroundColor: colors.white,
    alignItems: 'center',
    width: width / 6,
    alignSelf: 'center',
  },
  frontDoorText: {
    color: colors.darkred,
    fontSize: 16,
  },

  flatList: {
    width: '100%',
    paddingVertical: width / 30,
    paddingHorizontal: width / 22.5,
  },
  frontLuggageAndToiletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: width * 0.8,
  },
  luggage: {
    borderColor: colors.darkred,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderTopRightRadius: 8,
    height: width / 3,
    width: width / 6.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frontLeftRotation: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width / 3,
    height: width / 6.75,
    transform: [{rotate: '-90deg'}],
  },
  luggageText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.darkred,
    opacity: 0.8,
  },
  toilet: {
    borderColor: colors.darkred,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderTopLeftRadius: 8,
    height: width / 3,
    width: width / 3.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frontRightRotation: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width / 3,
    height: width / 3.7,
    transform: [{rotate: '-270deg'}],
    marginLeft: width / 25,
  },
  frontToiletLine: {
    borderColor: colors.darkred,
    borderWidth: 0.6,
    width: width / 7,
    position: 'absolute',
    top: width / 6.1,
    right: width / 20,
  },
  frontToiletTextContainer: {
    transform: [{rotate: '-270deg'}],
    position: 'absolute',
    top: width / 6.9,
    right: width / 5,
  },
  frontToiletText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.darkred,
    opacity: 0.8,
  },

  backDoor: {
    marginTop: -width / 35,
    backgroundColor: colors.white,
    alignItems: 'center',
    width: width / 6,
    alignSelf: 'center',
  },
  backDoorText: {
    color: colors.darkred,
    fontSize: 16,
  },

  bottomBuffer: {
    marginTop: 20,
    width: '100%',
    height: 20,
  },
});

export default styles;
