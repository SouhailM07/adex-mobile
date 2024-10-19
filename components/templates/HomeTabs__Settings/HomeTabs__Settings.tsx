import { Image, Text, View } from "react-native";
import { hometabs__settingsStyles } from "./hometabs__settingsStyles.ts";
import { Switch } from "react-native-paper";
import { useState } from "react";
import tw from "../../../lib/tailwind.js";

export default function HomeTabs__Settings() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={tw`justify-between h-full `}>
      <View style={tw`m-3 p-3 flex-row items-center justify-between`}>
        <Text style={tw`text-[1rem]`}>Dark Mode : </Text>
        <Switch
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          color="rgb(239 68 68)"
        />
      </View>
      <View
        style={tw`bg-gray-500 flex-row justify-between items-center px-3 py-1`}
      >
        <Text style={tw`text-[1rem] text-white`}>© All rights reserved</Text>
        <Image
          style={tw`h-[3rem] w-[10rem]`}
          source={require("../../../assets/adex-logo.png")}
        />
      </View>
    </View>
  );
}
