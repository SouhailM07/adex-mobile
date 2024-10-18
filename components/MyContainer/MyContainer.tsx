import { Text, View } from "react-native";
import { mycontainerStyles } from "./mycontainerStyles.ts";
import tw from "../../lib/tailwind.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function MyContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="/" component={MyContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
