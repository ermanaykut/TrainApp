import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../../../../constants/colors";



const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({

 
  seatContainer:{
    borderWidth:1,
    borderColor:colors.darkred,
    width:width *  0.10,
    height:width *  0.10,
    marginHorizontal:width * 0.0125,
    marginVertical:5,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:2,
    borderTopRightRadius:15,
    borderTopLeftRadius:15, 
    
  },
  disabledSeatContainer:{
    borderWidth:1,
    borderColor:colors.darkred,
    width:width *  0.15,
    height:width *  0.15,
    marginLeft:width/7,
    marginVertical:5,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:2,
    borderTopRightRadius:15,
    borderTopLeftRadius:15, 
    
  },
  rotateSeatContainer:{
    borderWidth:1,
    transform: [{rotate: '-180deg'}],
    borderColor:colors.darkred,
    width:width *  0.10,
    height:width *  0.10,
    marginHorizontal:width * 0.0125,
    marginVertical:5,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:2,
    borderTopRightRadius:15,
    borderTopLeftRadius:15, 
  },

  hallwayContainer: {

    
  },

  nullContainer: {
    borderWidth:0,
    marginVertical:-width/25
  },
  nullContainerTable: {
    borderWidth:0,
  },

  leftTable:{
    width:width *  0.20 + width * 0.025,
    height:width *  0.07,
    backgroundColor:colors.dottedGrey + 50,
    borderRadius:15,
    borderWidth:1,
    borderColor:colors.darkred,
    marginLeft:width * 0.095,
    marginBottom:width * 0.03


  },
  rightTable:{
    marginRight:width * 0.13,
    width:width *  0.20 + width * 0.025,
    height:width *  0.07,
    backgroundColor:colors.dottedGrey + 50,
    borderRadius:15,
    borderWidth:1,
    borderColor:colors.darkred,
    marginBottom:width * 0.03
  },
  iconContainer:{

    justifyContent:'center',
    alignItems:'center',
    marginBottom:12

  },
  rotateIcon:{
    transform: [{rotate: '-180deg'}],

  },
  seatNumberContainer:{
    width:'100%',
    borderColor:colors.darkred,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderTopWidth:1,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    position:'absolute',
    bottom:0,
    justifyContent:'center',
    alignItems:'center'

  },
  numberText:{
    fontSize:10,
    fontWeight:'500',
    color: colors.darkred




  },
  rotateNumberText:{
    fontSize:10,
    fontWeight:'500',
    transform: [{rotate: '-180deg'}],
    writingMode: 'vertical-rl',
    color: colors.darkred

  },

})

export default styles;