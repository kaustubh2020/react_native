// Import necessary components and hooks from react-native and react
import { View, ScrollView, StatusBar, Button } from "react-native";
import { useState } from "react";

// Import custom components
import Text_Image from "./Text_Image";
import Buttons from "./Buttons";
import Modals from "./Modals";
import ActivityIndicate from "./ActivityIndicate";
import Alerts from "./Alerts";
import Custom_Greet from "./Custom_Greet";
import Styles from "./Styles";

// Import logo image
const logo = require("./assets/adaptive-icon.png");

// Define main app component
export default function App() {
  // Define state hook for status bar visibility
  const [statusBarVisibility, setStatusBarVisibility] = useState(false);

  // Render app UI
  return (
    <ScrollView>
      <View style={{ backgroundColor: "plum", padding: 60 }}>
        {/* Display status bar with specified properties */}
        <StatusBar
          backgroundColor="midnightblue"
          barStyle={"light-content"}
          hidden={statusBarVisibility}
        />

        {/* Display custom greetings and other components */}
        <Custom_Greet name={"Average"} />
        <Custom_Greet name={"Shroud"} />
        <Alerts />
        <ActivityIndicate />
        <Button
          title="hide status bar"
          color="orange"
          onPress={() => setStatusBarVisibility(true)}
        />
        <Button
          title="show status bar"
          color="red"
          onPress={() => setStatusBarVisibility(false)}
        />
        <Buttons />
        <Modals />
        <Styles />
        <Text_Image />
      </View>
    </ScrollView>
  );
}
