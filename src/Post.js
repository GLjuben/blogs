import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "./Post.css";

const Post = ({ posts }) => {
  const PostCard = posts.map((post) => {
    console.log(post.imgUrl);
    return (
      <Card
        sx={{
          maxWidth: "400px",
          background: "#fff 0% 0% no-repeat padding-box",
        }}
        className="post"
        key={post.id}
        raised={true}
      >
        <CardMedia
          style={{ height: 0, paddingTop: "17.3%" }}
          component="img"
          height="80px"
          image={post.imgUrl}
          alt={post.title}
          src={post.imgUrl}
        />
        <CardHeader title={post.title} component="h3"></CardHeader>
        <CardContent component="p">{post.content}</CardContent>
      </Card>
    );
  });
  return <div className="post_list">{PostCard}</div>;
};

export default Post;
