import { View, Text } from "react-native";

// Custom_Greet component that displays a dynamic name
const CustomGreet = ({ name }) => {
  return <Text>Dynamic name here: {name}</Text>;
};

export default CustomGreet;