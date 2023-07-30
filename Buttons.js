import { Button, Pressable, Text } from "react-native";

export default function Buttons() {
  return (
    <>
      <Button
        title="Press Me!"
        color="purple"
        onPress={() => console.log("on press!")}
      />
      <Button title="disabled!" color="purple" disabled />
      <Pressable
        onPress={() => console.log("on press!")}
        onLongPress={() => console.log("on long press!")}
        onPressOut={() => console.log("on press out!")}
        onPressIn={() => console.log("on press in!")}
      >
        <Text
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            padding: 10,
            margin: 10,
          }}
        >
          I am Text, You can Press me too!
        </Text>
      </Pressable>
    </>
  );
}
