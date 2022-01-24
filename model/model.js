import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
  comments: [mongoose.Schema.Types.ObjectId],
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;
