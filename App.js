import { View, ScrollView } from "react-native";
import Text_Image from "./Text_Image";
import Buttons from "./Buttons";
import Modals from "./Modals";

const logo = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
        <Buttons />
        <Modals />
        <Text_Image />
      </View>
    </ScrollView>
  );
}
