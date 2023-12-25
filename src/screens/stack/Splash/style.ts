import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

const {width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor:colors.snowWhite

      },
      box: {
        width: width ,
        height: width*.110,
        justifyContent: 'flex-end',
        alignItems: 'baseline',
      },
 
      animationContainer:{
        marginTop:width*.075,

     
      },
      buttonStyle:{
        backgroundColor: colors.snowWhite,
        shadowOpacity:0.8,
        width:width/2,
        height: width/8,

      },
      buttonText:{
        fontSize:20,
        fontWeight:'700',
        color:colors.darkred
      },
      buttonContainer:{
        width:width,
        height: width/6,
      }
})

export default styles;