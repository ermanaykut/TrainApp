import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../../constants/colors";

const {width} = Dimensions.get('screen')

const styles = StyleSheet.create({

    tabContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:width*1.6,
        backgroundColor: colors.white,
        marginTop:width/50,
        marginBottom:width/25

    },
    vagonSubTabContainer:{
        marginLeft:5,
        marginVertical:5,
        width:width*0.25,
        height:width*0.09,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:8,
        backgroundColor:colors.darkred +40
    },
    activeVagonSubTabContainer:{
        backgroundColor: colors.darkred,
    },
    subTabText:{
        fontSize:12,
    },
    activeSubTabText:{
        color: colors.white,
        fontWeight:'600'
    }

})

export default styles;