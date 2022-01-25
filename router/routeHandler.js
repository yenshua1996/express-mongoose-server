import { BlogPost, Comment } from "../model/model.js";

export const getBlogs = async (req, res, next) => {
  try {
    const blogs = await BlogPost.find();

    res.json(blogs);
  } catch (err) {
    console.log(err);
  }
};

export const createBlog = async (req, res, next) => {
  try {
    const blog = new BlogPost({
      title: "Updating Test Data",
      author: "Updarm Doe",
      body: "Performing my first update with these application!",
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

    const blog = await BlogPost.findByIdAndUpdate(
      id,
      {
        title: "UPDATE",
        author: "UPDATE DOE",
        body: "PERFORMING AN UPDATE USING THESE ROUTES!",
      },
      { new: true }
    );

    res.json(blog);
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
