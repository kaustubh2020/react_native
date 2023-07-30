import { Alert, View, Button } from "react-native";

const Alerts = () => {
  return (
    <>
      <View>
        <Button
          color="red"
          title=" default Alert"
          onPress={() => Alert.alert("Default", "message as 2nd parameter")}
        />
        <Button
          color="orange"
          title="custom button Alert"
          onPress={() =>
            Alert.alert("Default", "message as 2nd parameter", [
              {
                text: "Cancel",
                onPress: () => console.log("cancel alert"),
              },
              {
                text: "OK",
                onPress: () => console.log("OK alert"),
              },
            ])
          }
        />
      </View>
    </>
  );
};

export default Alerts;
