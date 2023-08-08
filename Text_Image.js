import React from "react";
import { Text, Image } from "react-native";

// Import the logo image
const logo = require("./assets/adaptive-icon.png");

// Define the Text_Image component
export default function Text_Image() {
  return (
    <>
      {/* Display the logo image */}
      <Image source={logo} style={{ width: 300, height: 300 }} />

      {/* Display the text */}
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Pellentesque
        pulvinar pellentesque habitant morbi tristique senectus et. Sit amet
        commodo nulla facilisi nullam vehicula ipsum a arcu. Sed euismod nisi
        porta lorem mollis aliquam. Sed pulvinar proin gravida hendrerit. Nibh
        sit amet commodo nulla. Lobortis feugiat vivamus at augue. Mauris
        pellentesque pulvinar pellentesque habitant morbi tristique. Vivamus at
        augue eget arcu dictum varius. Orci nulla pellentesque dignissim enim
        sit amet venenatis. Maecenas ultricies mi eget mauris pharetra. Facilisi
        morbi tempus iaculis urna id volutpat lacus laoreet. Dignissim enim sit
        amet venenatis urna cursus eget. Donec et odio pellentesque diam
        volutpat commodo sed. Egestas congue quisque egestas diam in arcu cursus
        euismod. Gravida in fermentum et sollicitudin ac orci phasellus. Eu
        augue ut lectus arcu bibendum. Suspendisse faucibus interdum posuere
        lorem.
      </Text>

      {/* Display the second image */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1669841653344-8be26d70444f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80",
        }}
        style={{ width: 300, height: 300 }}
      />
    </>
  );
}
