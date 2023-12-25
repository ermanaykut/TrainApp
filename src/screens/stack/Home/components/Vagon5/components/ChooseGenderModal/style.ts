import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../../../../../../constants/colors';

const {width}= Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  modalContainer: {
    width: width * 0.6,
    height: width * 0.4,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent:'center'
  },
  gender: {

    width:width*0.2,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },


});

export default styles;