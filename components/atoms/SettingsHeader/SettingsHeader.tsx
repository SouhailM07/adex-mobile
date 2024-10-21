import { Text, View, StatusBar } from "react-native";
import { settingsheaderStyles } from "./settingsheaderStyles.ts";
import tw from "../../../lib/tailwind.js";

export default function SettingsHeader() {
  return (
    <View
      style={tw` h-[4rem] px-[1rem] bg-white flex-row items-center justify-between`}
    >
      <Text style={tw`text-[1.3rem] font-medium`}>Settings</Text>
    </View>
  );
}
