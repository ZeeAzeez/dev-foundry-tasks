import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import posts from '../../assets/data/posts.json';
import {formatDistanceToNowStrict} from 'date-fns';

export default function Index() {
  const post = posts[0];
  return (
    <View style={{paddingHorizontal: 15, paddingVertical: 10, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#e5e5e5'}}>
      <View style={{flexDirection: 'row', gap: 10}}>
      <Image source={{uri: post.group.image}} style={{width: 20, height: 20, borderRadius:10}}/>
      <Text style={{fontWeight: 'bold'}}>{post.group.name}</Text>
      <Text style={{color: 'grey'}}>{formatDistanceToNowStrict(new Date(post.created_at))}</Text>
      <View style={{marginLeft: 'auto'}}>
        <Text style={{backgroundColor: "#0d469b", color: 'white', paddingVertical: 2, paddingHorizontal: 7, borderRadius: 7, fontWeight: 'bold'}}>Follow</Text>
      </View>
      </View>
    </View>
  );
}

const styles= StyleSheet.create({

})
