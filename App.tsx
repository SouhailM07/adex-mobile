import { PaperProvider } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// components
import MainScreen from "./components/templates/MainScreen/MainScreen";
import { StatusBar } from "react-native";
import HomeTabs from "./components/templates/HomeTabs/HomeTabs";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // statusBarColor: "dark",
            // contentStyle: { marginTop: StatusBar.currentHeight },
          }}
        >
          <Stack.Screen name="/" component={MainScreen} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
