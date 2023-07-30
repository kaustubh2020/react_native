import { View, ScrollView, StatusBar, Button } from "react-native";
import { useState } from "react";

import Text_Image from "./Text_Image";
import Buttons from "./Buttons";
import Modals from "./Modals";
import ActivityIndicate from "./ActivityIndicate";

const logo = require("./assets/adaptive-icon.png");

export default function App() {
  const [setstatusBarVisibility, setSetstatusBarVisibility] = useState(false);
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <StatusBar
          backgroundColor="midnightblue"
          barStyle={"light-content"}
          hidden={setstatusBarVisibility}
        />
        <ActivityIndicate/>
        <Button
          title="hide status bar"
          color="orange"
          onPress={() => setSetstatusBarVisibility(true)}
        />
        <Button
          title="show status bar"
          color="red"
          onPress={() => setSetstatusBarVisibility(false)}
        />
        <Buttons />
        <Modals />
        <Text_Image />
      </View>
    </ScrollView>
  );
}
