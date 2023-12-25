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
    height: width * 0.5,
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
  disabledUpperText:{
    fontSize:14,
    marginBottom:15
  },
  disabledLowerText:{
    marginTop:15,
    fontSize:12,

  },
  disabledLowerWarningText:{
    color: colors.red
  }


});

export default styles;