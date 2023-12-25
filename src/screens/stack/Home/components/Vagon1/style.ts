import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../../../constants/colors';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.white,
  },

  trainContainer: {
    paddingHorizontal: width / 8,
  },
  leftVerticalTextContainer: {
    zIndex:-1,
    position: 'absolute',
    top: width / 2,
    left: -width / 10,
    alignItems: 'center',
  },
  leftVerticalTextContainer2: {
    zIndex:-1,
    position: 'absolute',
    top: width * 2.1,
    left: -width / 10,
    alignItems: 'center',
  },
  RighterticalTextContainer: {
    zIndex:-1,
    position: 'absolute',
    top: width / 2,
    right: -width / 10,
    alignItems: 'center',
  },
  RighterticalTextContainer2: {
    zIndex:-1,
    position: 'absolute',
    top: width * 2.1,
    right: -width / 10,
    alignItems: 'center',
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

  trainInnerContainer: {
    borderWidth: 1,
    borderColor: colors.darkred,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.75,
  },
  trainFrontline: {
    borderLeftWidth: 1,
    borderColor: colors.darkred,
    borderRightWidth: 1,
    borderTopWidth: 1,
    width: '100%',
    height: width / 8,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  verticalTextContainer3: {
    backgroundColor:colors.white,
    height: width * 1.16,
    width: width / 3,
    position: 'absolute',
    top: width * 1.1,
    left: width / 7,
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
    backgroundColor: colors.dottedGrey + 10,
  },
  verticalText3: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.darkred,
    opacity: 0.5,
  },

  flatList: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  frontLuggageAndToiletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: width * 0.75,
  },
  luggage: {
    borderColor: colors.darkred,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomRightRadius: 8,
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
    borderBottomWidth: 1,
    borderBottomLeftRadius: 8,
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
  backLuggagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: width * 0.75,
  },

  leftluggage: {
    justifyContent:'center',
    alignItems:'center',
    borderTopRightRadius:8,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.darkred,
    height: width / 5,
    width: width / 6.75,
  },

  backtLeftRotation: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width / 5,
    height: width / 6.75,
    transform: [{rotate: '-90deg'}],
  },
  backluggageText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.darkred,
    opacity: 0.8,
  },
  rightluggage: {
    justifyContent:'center',
    alignItems:'center',
    borderLeftWidth: 1,
    borderTopLeftRadius:8,
    borderTopWidth: 1,
    borderColor: colors.darkred,
    height: width / 5,
    width: width / 6.75,
  },
  backtRightRotation: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width / 5,
    height: width / 6.75,
    transform: [{rotate: '-90deg'}],
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
