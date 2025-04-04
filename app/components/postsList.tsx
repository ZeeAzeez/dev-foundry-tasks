import { Text, View, Image, StyleSheet } from "react-native";
import posts from '../../assets/data/posts.json';
import {formatDistanceToNowStrict} from 'date-fns';
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function postsList(){
    const post = posts[0];

    return(
       <View style={styles.headerContainer}>
             <View style={styles.rowContainer}>
               <Image source={{ uri: post.group.image }} style={styles.groupImage} />
               <Text style={styles.groupName}>{post.group.name}</Text>
       
               <Text style={styles.timestamp}>
                 {formatDistanceToNowStrict(new Date(post.created_at))}
               </Text>
       
               <View style={styles.followContainer}>
                 <Text style={styles.followButton}>Follow</Text>
               </View>
             </View>
       
             {/* content */}
             <Text style={styles.postTitle}>{post.title}</Text>
             {post.image && (
               <Image source={{ uri: post.image }} style={styles.postImage} />
             )}
             {!post.image && post.description && (
               <Text numberOfLines={4} style={styles.postDescription}>
               {post.description}
             </Text>
             )}
             
       
             {/* Footer */}
             <View style={styles.footerContainer}>
         {/* Upvote & Downvote */}
         <View style={styles.iconBox}>
           <MaterialCommunityIcons name="arrow-up-bold-outline" size={19} color="black" />
           <Text style={styles.iconText}>{post.upvotes}</Text>
           <View style={styles.divider} />
           <MaterialCommunityIcons name="arrow-down-bold-outline" size={19} color="black" />
         </View>
       
         {/* Comments */}
         <View style={styles.iconBox}>
           <MaterialCommunityIcons name="comment-outline" size={19} color="black" />
           <Text style={styles.iconText}>{post.nr_of_comments}</Text>
         </View>
       
         {/* Bookmark & Share */}
         <View style={styles.bookShareContainer}>
           <MaterialCommunityIcons name="bookmark-outline" size={19} color="black" style={styles.bookmarkIcon} />
           <MaterialCommunityIcons name="share-outline" size={19} color="black" style={styles.bookmarkIcon} />
         </View>
       </View>
       
       
       
           </View> 
    );
}


const styles = StyleSheet.create({
    headerContainer: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#e5e5e5',
    },
    rowContainer: {
      flexDirection: 'row',
      gap: 10,
    },
    groupImage: {
      width: 20,
      height: 20,
      borderRadius: 10,
    },
    groupName: {
      fontWeight: 'bold',
    },
    timestamp: {
      color: 'grey',
    },
    followContainer: {
      marginLeft: 'auto',
    },
    followButton: {
      backgroundColor: '#0d469b',
      color: 'white',
      paddingVertical: 2,
      paddingHorizontal: 7,
      borderRadius: 7,
      fontWeight: 'bold',
    },
    postTitle: {
      fontWeight: 'bold',
      fontSize: 17,
      letterSpacing: 0.5,
      marginTop: 10,
    },
    postImage: {
      width: '100%',
      aspectRatio: 4 / 3,
      borderRadius: 15,
      marginVertical: 10,
    },
    postDescription: {
      fontSize: 14,
      lineHeight: 20,
      color: '#333',
    },
    footerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: 'white',
    },
    iconBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f3f3f3',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 20,
      marginRight: 10,
    },
    iconText: {
      fontWeight: '500',
      marginLeft: 5,
    },
    divider: {
      width: 1,
      height: 14,
      backgroundColor: '#D4D4D4',
      marginHorizontal: 7,
    },
    bookShareContainer: {
      flexDirection: 'row',
      gap: 10,
      marginLeft: 'auto',
    },
    bookmarkIcon: {
      backgroundColor: '#f3f3f3',
      padding: 6,
      borderRadius: 20,
    },
  });