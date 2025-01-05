import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";

export default function IndexScreen() {
  const BlogPosts = useContext(BlogContext);
  return (
    <View>
      <Text>IndexScreen</Text>
      <FlatList
        data={BlogPosts}
        keyExtractor={(BlogPosts) => BlogPosts.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
