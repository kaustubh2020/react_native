import { ActivityIndicator, View, Button } from "react-native";
// Import useState hook from react
import { useState } from "react";

// Define a functional component named ActivityIndicate
export default function ActivityIndicate() {
  // Define state variable showActivityIndicator and its setter function setShowActivityIndicator
  const [showActivityIndicator, setShowActivityIndicator] = useState(false);

  // Render the component
  return (
    // Use a View component as the root element with flex: 1 style
    <View style={{ flex: 1 }}>
      {/* Render an ActivityIndicator component */}
      <ActivityIndicator
        size="large"
        color="black"
        animating={showActivityIndicator}
      />

      {/* Render a Button component to show the loader */}
      <Button
        title="show loader"
        onPress={() => setShowActivityIndicator(true)}
      />

      {/* Render a Button component to hide the loader */}
      <Button
        title="Hide loader"
        onPress={() => setShowActivityIndicator(false)}
      />
    </View>
  );
}