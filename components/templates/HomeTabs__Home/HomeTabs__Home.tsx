import { Text, View } from "react-native";
import { hometabs__homeStyles } from "./hometabs__homeStyles.ts";
import tw from "../../../lib/tailwind.js";
import getFormattedDate from "../../../lib/getTime.ts";

export default function HomeTabs__Home() {
  let userData: { label: string; value: number }[] = [
    { label: "Tasks", value: 1 },
    { label: "Messages", value: 0 },
    { label: "Events", value: 0 },
  ];
  return (
    <View style={tw`border-2 gap-y-4 border-gray-500 rounded-md p-3 m-3`}>
      <Text style={tw`text-[1.4rem]`}>{getFormattedDate()}</Text>
      <Text style={tw`text-[1rem]`}>Hello User , You Got : </Text>
      <View style={tw`gap-y-5 mt-2`}>
        {userData.map((e, i) => (
          <View key={i} style={tw`flex-row justify-between items-center`}>
            <Text style={tw`font-bold text-[1rem]`}>{e.label}</Text>
            <Text style={tw`text-red-500 font-medium text-[1rem]`}>
              {e.value}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
