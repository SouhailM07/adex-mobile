import { Image, View, StatusBar } from "react-native";
import { headerStyles } from "./headerStyles.ts";
import tw from "../../../lib/tailwind.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <View
      style={tw` h-[4rem] px-[1rem] bg-gray-800 flex-row items-center justify-between`}
    >
      <Image
        style={tw`h-[2.8rem] w-[10rem]`}
        source={require("../../../assets/adex-logo.png")}
      />
      <FontAwesomeIcon
        icon={faUserCircle}
        style={tw`text-red-500 border-2 border-red-500 `}
        size={30}
      />
    </View>
  );
}
