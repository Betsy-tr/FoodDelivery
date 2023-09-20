import React from "react";
import WelcomeScreen from "./Screens/Restaurant/WelcomeScreen";
import HomeScreen from "./Screens/Restaurant/HomeScreen"
import RecipeDetailScreen from "./Screens/Restaurant/RecipeDetailScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

const App = () => {
  // return <WelcomeScreen />;
  // return <HomeScreen />;
  // return <RecipeDetailScreen recipe={DATA[0].recipes[1]}/>;

  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen screenOptions={{headerShown: false}} name="BIENVENUE" component={WelcomeScreen} />
        <Stack.Screen name="FoodDelivery" component={HomeScreen} />
        <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )

};
export default App;
