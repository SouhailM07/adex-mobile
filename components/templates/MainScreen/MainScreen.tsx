import { Text, View, Image, TouchableOpacity } from "react-native";
import { mainscreenStyles } from "./mainscreenStyles.ts";
import tw from "../../../lib/tailwind.js";
import MyInput from "../../atoms/MyInput/MyInput.tsx";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function MainScreen() {
  const navigation: any = useNavigation();
  return (
    <View
      style={tw`bg-gray-800 items-center justify-evenly min-h-full py-[3rem]`}
    >
      <Image
        style={tw`h-[3rem] w-[10rem] mx-auto `}
        source={require("../../../assets/adex-logo.png")}
        alt="img"
      />
      <View style={tw`h-[15rem] items-center justify-between`}>
        <View style={tw`gap-y-[1rem]`}>
          <MyInput label="Email" />
          <MyInput label="Password" />
        </View>
        <TouchableOpacity
          onPressIn={() => navigation.navigate("HomeTabs")}
          style={tw`bg-red-500 w-[10rem] py-3 rounded-full`}
          onPress={() => console.log("Pressed")}
        >
          <Text style={tw`text-white text-[1.3rem] text-center`}>Enter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
