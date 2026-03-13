import React, { useState, useDeferredValue } from "react";
import { View, TextInput, FlatList, Text } from "react-native";

export default function eg_dv() {
  const [query, setQuery] = useState("");

  const deferredQuery = useDeferredValue(query);

  const products = Array.from({ length: 10000 }, (_, i) => `Product ${i}`);

  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <View style={{ marginTop: 80, padding: 20 }}>

      <TextInput
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
        style={{ borderWidth: 1, padding: 10 }}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

    </View>
  );
}