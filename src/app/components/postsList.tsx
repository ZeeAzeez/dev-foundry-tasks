import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import { formatDistanceToNowStrict } from 'date-fns';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Post } from '@/src/types/type';

type Props = {
  post: Post;
};

const PostsList: React.FC<Props> = ({ post }) => {
  const [upvotes, setUpvotes] = useState(post.upvotes);
  const [downvotes, setDownvotes] = useState(0);
  const [comments, setComments] = useState<string[]>(post.comments || []);
  const [commentText, setCommentText] = useState('');
  const [bookmarked, setBookmarked] = useState(false);

  const handleUpvote = () => setUpvotes((prev) => prev + 1);
  const handleDownvote = () => setDownvotes((prev) => prev + 1);
  const handleBookmark = () => setBookmarked((prev) => !prev);
  const handleComment = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };
  const handleRepost = () => {
    console.log('Repost pressed!');
    // Connect to backend later
  };

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: post.group.image }} style={styles.groupImage} />
        <Text style={styles.groupText}>{post.group.name}</Text>
        <Text style={styles.time}>
          {formatDistanceToNowStrict(new Date(post.created_at))} ago
        </Text>
      </View>

      {/* Title & Image */}
      <Text style={styles.title}>{post.title}</Text>
      {post.image && (
        <Image source={{ uri: post.image }} style={styles.postImage} />
      )}
      {post.description && <Text style={styles.desc}>{post.description}</Text>}

      {/* Footer */}
      <View style={styles.footer}>
        {/* Upvote */}
        <View style={styles.iconBox}>
          <Pressable onPress={handleUpvote}>
            <MaterialCommunityIcons name="arrow-up-bold-outline" size={19} />
          </Pressable>
          <Text style={styles.iconText}>{upvotes}</Text>
        </View>

        {/* Downvote */}
        <View style={styles.iconBox}>
          <Pressable onPress={handleDownvote}>
            <MaterialCommunityIcons name="arrow-down-bold-outline" size={19} />
          </Pressable>
          <Text style={styles.iconText}>{downvotes}</Text>
        </View>

        {/* Comment */}
        <View style={styles.iconBox}>
          <MaterialCommunityIcons name="comment-outline" size={19} />
          <Text style={styles.iconText}>{comments.length}</Text>
        </View>

        {/* Bookmark + Repost */}
        <View style={styles.actionIcons}>
          <Pressable onPress={handleBookmark} style={styles.roundButton}>
            <MaterialCommunityIcons
              name={bookmarked ? 'bookmark' : 'bookmark-outline'}
              size={19}
            />
          </Pressable>
          <Pressable onPress={handleRepost} style={styles.roundButton}>
            <MaterialCommunityIcons name="share-outline" size={19} />
          </Pressable>
        </View>
      </View>

      {/* Comment input */}
      <View style={styles.commentBox}>
        <TextInput
          placeholder="Add a comment..."
          value={commentText}
          onChangeText={setCommentText}
          style={styles.commentInput}
        />
        <Pressable onPress={handleComment}>
          <MaterialCommunityIcons name="send" size={20} color="#3B82F6" />
        </Pressable>
      </View>

      {/* Display comments */}
      {comments.map((c, i) => (
        <Text key={i} style={styles.comment}>
          - {c}
        </Text>
      ))}
    </View>
  );
};

export default PostsList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  groupImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  groupText: {
    fontWeight: 'bold',
    flex: 1,
  },
  time: {
    color: 'gray',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  postImage: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 10,
    marginBottom: 10,
  },
  desc: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 5,
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    padding: 6,
    borderRadius: 20,
    gap: 5,
  },
  iconText: {
    fontWeight: '500',
  },
  actionIcons: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 'auto',
  },
  roundButton: {
    padding: 6,
    backgroundColor: '#f3f3f3',
    borderRadius: 20,
  },
  commentBox: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
    alignItems: 'center',
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 10,
  },
  comment: {
    marginTop: 5,
    fontSize: 13,
    color: '#444',
  },
});
