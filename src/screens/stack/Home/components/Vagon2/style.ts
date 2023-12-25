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
    zIndex: -1,
  },
  leftVerticalTextContainer2: {
    position: 'absolute',
    top: width * 2.1,
    left: -width / 9,
    alignItems: 'center',
    zIndex: -1,
  },
  RighterticalTextContainer: {
    position: 'absolute',
    top: width / 2,
    right: -width / 9,
    alignItems: 'center',
    zIndex: -1,
  },
  RighterticalTextContainer2: {
    position: 'absolute',
    top: width * 2.1,
    right: -width / 9,
    alignItems: 'center',
    zIndex: -1,
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
    top: width * 1.36,
    left: width / 4.5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -11,
  },
  verticalTextInnerContainer3: {
    borderRadius: 8,
    width: width * 3.05,
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

  frontLuggageAndToiletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: width * 0.8,
  },
  luggage: {
    borderColor: colors.darkred,
    borderRightWidth: 1,
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
    right: width / 8,
    transform: [{rotate: '-270deg'}],
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
  settlementContainer: {
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSettlement: {
    width: width * 0.25,
  },
  restaurant: {
    width: width * 0.25,
    height: width * 2.785,
    borderWidth: 1,
    borderColor: colors.darkred,
    justifyContent:'center',
    alignItems:'center'

  },
  innerRestaurant: {
    transform: [{rotate: '-90deg'}],
    height: width * 0.25,
    width: width * 2.785,
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden'


  },
  coffeText:{
    fontSize:18,
    color:colors.darkred,
    fontWeight:'400'
  },
  backToilet: {
    borderColor: colors.darkred,
    flexDirection: 'row',
    borderRightWidth: 1,
    height: width / 3,
    width: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backLeftRotation: {
    marginLeft: -width * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width / 4,
    height: width / 8,
    transform: [{rotate: '-90deg'}],
  },
  backToiletLine: {
    borderColor: colors.darkred,
    borderWidth: 0.6,
    width: width / 7,
    position: 'absolute',
    top: width / 6.1,
    right: width / 60,
    transform: [{rotate: '-90deg'}],
  },
  backToiletTextContainer: {
    transform: [{rotate: '-90deg'}],
    marginLeft: -width * 0.05,
  },
  backToiletText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.darkred,
    opacity: 0.8,
  },

  flatContainer: {
    width: width * 0.3,
    paddingVertical: width / 50,
    marginVertical: width / 80,
  },

  flatList: {
    alignItems: 'center',
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
