import { Text, View } from "react-native";
import { hometabsStyles } from "./hometabsStyles.ts";
import tw from "../../../lib/tailwind.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faGear,
  faInbox,
  faBarsProgress,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../../atoms/Header/Header.tsx";
import SettingsHeader from "../../atoms/SettingsHeader/SettingsHeader.tsx";
import HomeTabs__Home from "../HomeTabs__Home/HomeTabs__Home.tsx";
import HomeTabs__Tasks from "../HomeTabs__Tasks/HomeTabs__Tasks.tsx";
import HomeTabs__Settings from "../HomeTabs__Settings/HomeTabs__Settings.tsx";

const Tab = createBottomTabNavigator();

const Test = () => (
  <View>
    <Text>home</Text>
  </View>
);

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons: any = {
            Home: faHome,
            Tasks: faBarsProgress,
            Settings: faGear,
            Message: faInbox,
            Events: faNewspaper,
          };
          return (
            <FontAwesomeIcon
              icon={icons[route.name]}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: "rgb(239 68 68)",
        tabBarInactiveTintColor: "white",
        tabBarStyle: tw`bg-gray-800 h-[4rem] pb-2`,
        header: ({}) => <Header />,
      })}
    >
      <Tab.Screen name="Home" component={HomeTabs__Home} />
      <Tab.Screen
        name="Tasks"
        component={HomeTabs__Tasks}
        options={{ tabBarBadge: 1 }}
      />
      <Tab.Screen name="Message" component={Test} />
      <Tab.Screen name="Events" component={Test} />
      <Tab.Screen
        options={{ header: ({}) => <SettingsHeader /> }}
        name="Settings"
        component={HomeTabs__Settings}
      />
    </Tab.Navigator>
  );
}
