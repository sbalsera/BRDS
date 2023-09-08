const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import InputsRegularDefault from "./components/InputsRegularDefault";
import LOGINPAGE3 from "./screens/LOGINPAGE3";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="LOGINPAGE3"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="LOGINPAGE3"
              component={LOGINPAGE3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
