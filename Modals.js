import { View, Text, Modal, Button } from "react-native";
import { useState } from "react";

export default function Modals() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Button
        title="invoke Modal"
        color="green"
        onPress={() => setIsModalVisible(true)}
      />

      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={{ padding: 60, flex: 1, backgroundColor: "wheat" }}>
          <Text style={{ textAlign: "center" }}>You are seeing a Modal</Text>
          <Button
            title="Close Modal"
            color="blue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </>
  );
}
