import { BlogPost, Comment } from "../model/model.js";

export const getBlogs = async (req, res, next) => {
  try {
    const blogs = await BlogPost.find().populate("comments");

    res.json(blogs.reverse());
  } catch (err) {
    console.log(err);
  }
};

export const createBlog = async (req, res, next) => {
  try {
    const { title, author, body } = req.body;

    const blog = new BlogPost({
      title,
      author,
      body,
    });

    const result = await blog.save();

    res.json(result);
  } catch (err) {
    console.log(err);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;

    const blog = await BlogPost.findByIdAndDelete(id);

    res.json(blog);
  } catch (err) {
    console.log(err);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, body } = req.body;

    const blog = await BlogPost.findByIdAndUpdate(
      id,
      {
        title,
        author,
        body,
      },
      { new: true }
    );

    res.json(blog);
  } catch (err) {
    console.log(err);
  }
};

export const getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find();

    res.json(comments.reverse());
  } catch (err) {
    console.log(err);
  }
};

export const createComment = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { author, body } = req.body;

    const blog = await BlogPost.findById(id);

    const newComment = await new Comment({
      author,
      body,
    });

    await blog.comments.push(newComment._id);

    const result = await newComment.save();

    const blogResult = await blog.save();

    res.json({ result, blogResult });
  } catch (err) {
    console.log(err);
  }
};

export const testError = (req, res, next) => {
  try {
    if (true) {
      throw new Error("Error occur! Please try again later.");
    }
  } catch (err) {
    next(err);
  }
};

export const errorMiddleware = (err, res, next) => {
  res.status(404);
};

const _id = "61eff18b77f402cf20485b45";
