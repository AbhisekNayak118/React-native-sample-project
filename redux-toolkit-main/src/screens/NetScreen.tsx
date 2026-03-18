import React from "react";
import { View, Text } from "react-native";
import UseOnlineStatus from "./eg_useDebugValue";

export default function NetworkScreen() {
  const isOnline = UseOnlineStatus();

  return (
    <View style={{ marginTop: 100, alignItems: "center" }}>
      <Text>
        Network Status: {isOnline ? "Online" : "Offline"}
      </Text>
    </View>
  );
}