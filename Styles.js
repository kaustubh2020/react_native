import { StyleSheet, Text, View } from "react-native";
import React from "react";

// Define the component
export default function Styles() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Light-pink Box</Text>
      </View>
      <View style={[styles.box, styles.lightYellowBg]}>
        <Text>Light-yellow Box</Text>
      </View>
      <View style={[styles.box, styles.lightBlueBg]}>
        <Text>Light-blue Box</Text>
      </View>
    </View>
  );
}

// Define the styles using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 40,
    marginTop: 20,
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    backgroundColor: "pink",
  },
  lightBlueBg: {
    backgroundColor: "blue",
  },
  lightYellowBg: {
    backgroundColor: "yellow",
  },
});
