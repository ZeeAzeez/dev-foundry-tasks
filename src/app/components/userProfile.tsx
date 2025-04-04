import { View, FlatList, Text, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PostsList from "../components/postsList";
import posts from '../../assets/data/posts.json';
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface User {
  name: string;
  profileImage: string;
}

const user: User = {
  name: "Chris",
  profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
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
          <Text style={styles.greeting}>Hi, <Text style={styles.nameHighlight}>{user.name}</Text></Text>
          <Text style={styles.subGreeting}>Welcome back Buddy</Text>
          <View style={styles.lessonsBadge}>
            <Text style={styles.lessonsText}>You have 6 lessons today</Text>
          </View>
        </View>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
      </View>

      {/* Categories */}
      <View style={styles.categorySection}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollContainer}
        >
          {categories.map((category, index) => (
            <Pressable 
              key={index} 
              style={({ pressed }) => [
                styles.categoryButton,
                pressed && styles.categoryButtonPressed
              ]}
            >
              <MaterialCommunityIcons
                name={category.icon}
                size={18}
                color="#4F46E5"
                style={styles.categoryIcon}
              />
              <Text style={styles.categoryText}>{category.label}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Posts list */}
      <View style={styles.postsSection}>
        <Text style={styles.sectionTitle}>Your Lessons</Text>
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostsList post={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.postsListContent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 20,
  },
  userHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 24,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1F2937',
  },
  nameHighlight: {
    color: '#4F46E5',
    fontWeight: '700',
  },
  subGreeting: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 4,
  },
  lessonsBadge: {
    backgroundColor: '#E0E7FF',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  lessonsText: {
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: '500',
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#E0E7FF',
  },
  categorySection: {
    marginBottom: 20,
  },
  postsSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  categoryScrollContainer: {
    paddingHorizontal: 4,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  categoryButtonPressed: {
    backgroundColor: '#F3F4F6',
  },
  categoryIcon: {
    marginRight: 8,
  },
  categoryText: {
    color: '#4F46E5',
    fontSize: 14,
    fontWeight: '500',
  },
  postsListContent: {
    paddingBottom: 24,
  },
});