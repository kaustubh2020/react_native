import { Button, Pressable, Text } from "react-native";

// Define the Buttons component
export default function Buttons() {
  return (
    <>
      {/* Button component with title, color, and onPress event */}
      <Button
        title="Press Me!"
        color="purple"
        onPress={() => console.log("on press!")}
      />

      {/* Disabled Button component with title and color */}
      <Button title="disabled!" color="purple" disabled />

      {/* Pressable component with onPress, onLongPress, onPressOut, and onPressIn events */}
      <Pressable
        onPress={() => console.log("on press!")}
        onLongPress={() => console.log("on long press!")}
        onPressOut={() => console.log("on press out!")}
        onPressIn={() => console.log("on press in!")}
      >
        {/* Text component with style */}
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
