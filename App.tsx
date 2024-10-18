import { PaperProvider } from "react-native-paper";
// components
import MyContainer from "./components/MyContainer/MyContainer";

export default function App() {
  return (
    <PaperProvider>
      <MyContainer />
    </PaperProvider>
  );
}
