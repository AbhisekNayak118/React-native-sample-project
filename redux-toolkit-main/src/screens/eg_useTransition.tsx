import React, { useState, useTransition } from "react";
import { View, TextInput, Text, FlatList, ActivityIndicator } from "react-native";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const products = Array.from({ length: 10000 }, (_, i) => `Product ${i}`);

  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (text: string) => {
    startTransition(() => {
      setQuery(text);
    });
  };

  return (
    <View style={{ marginTop: 80, padding: 20 }}>

      <TextInput
        placeholder="Search product..."
        onChangeText={handleSearch}
        style={{ borderWidth: 1, padding: 10 }}
      />

      {isPending && <ActivityIndicator />}

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />

    </View>
  );
}