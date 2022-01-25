import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
  comments: [mongoose.Schema.Types.ObjectId],
});

export const BlogPost = mongoose.model("BlogPost", blogPostSchema);

const commentSchema = new mongoose.Schema({
  author: { type: String, default: "Anonymous" },
  body: String,
  date: { type: Date, default: Date.now },
});

export const Comment = mongoose.model("Comment", commentSchema);
