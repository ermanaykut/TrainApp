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
    height: width,
    width: width / 3,
    position: 'absolute',
    top: width * 1.08,
    left: width / 4.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalTextInnerContainer3: {
    borderRadius: 8,
    width: width * 2.65,
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
  frontAndBackLuggageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: width * 0.8,
  },
  frontLeftLuggage: {
    borderColor: colors.darkred,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomRightRadius: 8,
    height: width / 5,
    width: width / 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frontRightluggage: {
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderBottomLeftRadius: 8,
    borderColor: colors.darkred,
    height: width / 5,
    width: width / 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backLeftLuggage: {
    borderColor: colors.darkred,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderTopRightRadius: 8,
    height: width / 5,
    width: width / 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backRightluggage: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: 8,
    borderColor: colors.darkred,
    height: width / 5,
    width: width / 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  luggageRotation: {
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

  bottomBuffer: {
    marginTop: 20,
    width: '100%',
    height: 20,
  },
});

export default styles;
