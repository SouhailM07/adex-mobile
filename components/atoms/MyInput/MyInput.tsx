import { Text, View } from "react-native";
import { myinputStyles } from "./myinputStyles.ts";
import tw from "../../../lib/tailwind.js";
import { useState } from "react";
import { TextInput } from "react-native-paper";

export default function MyInput({ label }: { label: string }) {
  const [text, setText] = useState("");
  // label
  return (
    <TextInput
      style={tw`w-[18rem]`}
      outlineColor="red"
      mode="outlined"
      label={label}
      value={text}
      theme={{
        colors: {
          primary: "red", // Outline and label color when focused
          text: "red", // Text color
          placeholder: "red", // Placeholder color
          background: "white", // Background color
        },
      }}
      onChangeText={(text) => setText(text)}
    />
  );
}
