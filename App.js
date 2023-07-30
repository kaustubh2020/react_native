import { View, Text, Image, ImageBackground } from "react-native";

const logo = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Text>Hello World</Text>
      <Image source={logo} style={{ width: 300, height: 300 }}></Image>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1669841653344-8be26d70444f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80",
        }}
        style={{ width: 300, height: 300 }}
      ></Image>

      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1669841653344-8be26d70444f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80",
        }}
        style={{ flex: 1 }}
      >
        <Text>Cool assets</Text>
      </ImageBackground>
    </View>
  );
}
