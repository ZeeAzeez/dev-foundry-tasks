import { View, FlatList, Text, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PostsList from "../components/postsList";
import posts from '../../assets/data/posts.json';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const user = {
  name: "Chris",
  profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200"
};


const categories = [
  { label: 'Trading', icon: 'trending-up' },
  { label: 'Personal finance', icon: 'wallet' },
  { label: 'Business', icon: 'briefcase-outline' },
  { label: 'Crypto', icon: 'currency-btc' },
  { label: 'Real Estate', icon: 'home-city' },
];

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* User section */}
      <View style={styles.userHeader}>
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Hi, {user.name}</Text>
          <Text style={styles.subGreeting}>Welcome back Buddy</Text>
        </View>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
      </View>

      {/* Categories */}
      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <Pressable key={index} style={styles.categoryButton}>
              <MaterialCommunityIcons
                name={category.icon}
                size={16}
                color="#3B82F6"
                style={{ marginRight: 5 }}
              />
              <Text style={styles.categoryText}>{category.label}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Posts list */}
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostsList post={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  userHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  textContainer: {
    marginLeft: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subGreeting: {
    color: 'grey',
    fontSize: 14,
    marginTop: 3,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 15,
  },
  categorySection: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 10,
    backgroundColor: '#F9FAFB',
  },
  categoryText: {
    color: '#3B82F6',
    fontSize: 14,
    fontWeight: '500',
  },
  
});
