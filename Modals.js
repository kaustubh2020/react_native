import React, { useState } from "react";
import { View, Text, Modal, Button } from "react-native";

export default function Modals() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button title="Open Modal" color="green" onPress={openModal} />

      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={{ padding: 60, flex: 1, backgroundColor: "wheat" }}>
          <Text style={{ textAlign: "center" }}>You are seeing a Modal</Text>
          <Button title="Close Modal" color="blue" onPress={closeModal} />
        </View>
      </Modal>
    </>
  );
}
