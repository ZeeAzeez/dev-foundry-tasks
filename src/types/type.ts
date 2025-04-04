export type Post = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  created_at: string;
  upvotes: number;
  downvotes: number;
  nr_of_comments: number;
  group: {
    name: string;
    image: string;
  };
  user: {
    name: string;
    image: string | null;
  };
  comments?: string[];
};

  export type Comment = {
    id: number;
    post_id: number;
    user_id: number;
    parent_id: number | null;
    comment: string;
    created_at: string;
    upvotes: number;
    user: User;
    replies: Comment[]; 
  };
  
  export type Group = {
    id: number;
    name: string;
    image: string;
  };
  
  export type User = {
    id: number;
    name: string;
    image: string | null;
  };
  