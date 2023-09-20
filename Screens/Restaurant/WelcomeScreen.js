import React from "react";
import { ImageBackground , StyleSheet , Text, TouchableOpacity, View} from "react-native";
import { Button } from "react-native-paper"
import colors from "../../config/Restaurant/colors"
import SPACING from "../../config/SPACING"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const WelcomeScreen = ({route , navigation}) => {

  const home = () => { 

    navigation.navigate('FoodDelivery')

  }

  return (
    <ImageBackground 
      style={{flex:1}} 
      source={require("../../assets/pexels-william-choquette-2641886.jpeg")}
    >
      <View style={{flex:1 , backgroundColor:colors.black , opacity:0.5}}/>
      <View 
        style={{ 
          position: "absolute", 
          height: "100%", 
          zIndex: 2,
          width: "100%",
          justifyContent: "flex-end",
          paddingHorizontal: SPACING*2,
          paddingBottom: SPACING*5
        }}
      >
        <View>

          <Text 
            style={{
              color: colors.white , 
              fontWeight:"800" , 
              fontSize:SPACING*4.5 , 
              textTransform:"capitalize"
            }}>
            Laissez votre nourriture préférée vous trouver
          </Text> 
 
          <Text 
            style={{
              color: colors.white , 
              fontWeight:"600" , 
              fontSize:SPACING*1.7
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio, cumque eaque excepturi
          </Text>

          <TouchableOpacity 
            style={{
              padding: SPACING*2 , 
              backgroundColor: colors.white , 
              borderRadius: SPACING*2 , 
              alignItems: "center" ,
              marginTop: SPACING*3 ,
            }}>

            <Button onPress={home} labelStyle={{color: colors.black , fontSize: SPACING*2 , fontWeight: "700"}}>
              Explorer maintenant
            </Button>
          </TouchableOpacity>

        </View>

      </View>

    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
