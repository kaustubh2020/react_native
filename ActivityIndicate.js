import { ActivityIndicator, View, Button } from "react-native";
import { useState } from "react";

export default function ActivityIndicate() {
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);
  return (
    <View style={{ flex: 1, padding: 30 }}>
      <ActivityIndicator
        size="large"
        color="black"
        animating={showActivityIndicator}
      />
      <Button
        title="show loader"
        onPress={() => setShowActivityIndicator(true)}
      />
      <Button
        title="Hide loader"
        onPress={() => setShowActivityIndicator(false)}
      />
    </View>
  );
}
