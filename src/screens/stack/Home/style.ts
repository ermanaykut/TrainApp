import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../../constants/colors';


const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
    backgroundColor:colors.white
  },

  trainContainer: {
    paddingHorizontal: 30,
  },

  trainInnerContainer: {
    borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  trainFrontline: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    width: '100%',
    height: width / 8,
    borderTopEndRadius:50,
    borderTopStartRadius:50,

  },

  flatList: {

    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom:10

  },
  luggage: {
    borderWidth:1,
    height:30
  },
  toilet:{
    borderWidth:1,
    height:80
  },
  bottomBuffer:{
    marginTop:20,
    width:'100%',
    height:20
  },
});

export default styles;
