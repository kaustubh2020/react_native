import { Alert, View, Button } from "react-native";

const Alerts = () => {
  // Function to handle default alert
  const handleDefaultAlert = () => {
    Alert.alert("Default", "message as 2nd parameter");
  };

  // Function to handle custom button alert
  const handleCustomButtonAlert = () => {
    Alert.alert("Default", "message as 2nd parameter", [
      {
        text: "Cancel",
        onPress: () => console.log("cancel alert"),
      },
      {
        text: "OK",
        onPress: () => console.log("OK alert"),
      },
    ]);
  };

  return (
    <View>
      <Button color="red" title="Default Alert" onPress={handleDefaultAlert} />
      <Button
        color="orange"
        title="Custom Button Alert"
        onPress={handleCustomButtonAlert}
      />
    </View>
  );
};

export default Alerts;
