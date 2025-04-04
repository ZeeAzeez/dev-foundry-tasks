import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
import posts from '../../assets/data/posts.json';

export default function Index() {
  const post = posts[0];
  return (
    <View>
      <Image source={{uri: post.group.image}} style={{width: 20, height: 20, borderRadius:10}}/>
      <Text>{post.group.name}</Text>
    </View>
  );
}
