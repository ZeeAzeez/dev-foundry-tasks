import { View, FlatList} from "react-native";
import PostsList from "../components/postsList";
import posts from '../../assets/data/posts.json';

export default function Index() {
  return (
    <View>
      <FlatList
      data={posts}
      renderItem={({ item }) => <PostsList post={item}/>}
      /> 
    </View>
  );
}


