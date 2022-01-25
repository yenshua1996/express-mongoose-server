import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const commentSchema = new mongoose.Schema({
  author: { type: String, default: "Anonymous", required: true },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
});

blogPostSchema.pre("save", () => {
  console.log("BEFORE MIDDLEWARE");
});

blogPostSchema.post("save", () => {
  console.log("AFTER MIDDLEWARE");
});

export const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export const Comment = mongoose.model("Comment", commentSchema);
