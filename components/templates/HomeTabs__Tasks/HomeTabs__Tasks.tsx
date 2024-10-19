import { Pressable, Text, View } from "react-native";
import { hometabs__tasksStyles } from "./hometabs__tasksStyles.ts";
import tw from "../../../lib/tailwind.js";
import HomeTabs__Tasks__SelectedTask from "../HomeTabs__Tasks__SelectedTask/HomeTabs__Tasks__SelectedTask.tsx";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function HomeTabs__Tasks() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="/" component={MainTaskPage} />
      <Stack.Screen
        name="SelectedTask"
        component={HomeTabs__Tasks__SelectedTask}
      />
    </Stack.Navigator>
  );
}

const MainTaskPage = () => {
  const navigation: any = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("SelectedTask")}
      style={tw`m-3 p-3`}
    >
      <View
        style={tw`flex-row px-3 justify-between items-center border-2 border-gray-500 w-full h-[4rem] rounded-lg`}
      >
        <View style={tw`gap-y-1`}>
          <Text style={tw`text-[1rem] font-bold`}>Build Adex App</Text>
          <Text style={tw`text-[0.8rem]`}>
            From : <Text style={tw`font-bold`}>Zoheir DJENNANE</Text>
          </Text>
        </View>
        <Text style={tw`bg-red-500 text-white p-1 rounded-lg`}>
          Not Started
        </Text>
      </View>
    </Pressable>
  );
};
