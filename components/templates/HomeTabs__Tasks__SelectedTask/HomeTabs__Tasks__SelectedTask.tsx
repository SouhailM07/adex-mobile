import { Text, TouchableOpacity, View } from "react-native";
import { hometabs__tasks__selectedtaskStyles } from "./hometabs__tasks__selectedtaskStyles.ts";
import tw from "../../../lib/tailwind.js";

export default function HomeTabs__Tasks__SelectedTask() {
  return (
    <View style={tw`p-3 pb-7 m-3 justify-between h-full`}>
      <View style={tw`gap-y-3`}>
        <Text style={tw`text-[1.5rem]`}>Build Adex App</Text>
        <Text style={tw`text-[1rem]`}>
          From : <Text style={tw`text-red-500 font-bold`}>Zoheir DJENNANE</Text>
        </Text>
        <View style={tw`gap-y-3 border-2 border-gray-500 p-3 rounded-md`}>
          <Text style={tw`text-[1.1rem]`}>Description : </Text>
          <Text style={tw`text-[1rem] leading-[1.7rem]`}>
            Adex Technology requires an app to streamline task management and
            simplify employee communication.
          </Text>
        </View>
      </View>
      <TouchableOpacity style={tw`bg-red-500 p-3 rounded-md`}>
        <Text style={tw`text-white text-center text-[1.2rem]`}>Start Task</Text>
      </TouchableOpacity>
    </View>
  );
}
