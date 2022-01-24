import BlogPost from "../model/model.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find();

    res.json(blogs);
  } catch (err) {
    console.log(err);
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = new BlogPost({
      title: "Test Data",
      author: "John Doe",
      body: "Lorem Ipsum dolor lex rodent moreese!",
    });

    const result = await blog.save();

    res.json(result);
  } catch (err) {
    console.log(err);
  }
};

export const deleteBlog = (req, res) => {
  res.json({ msg: "Delete" });
};

export const updateBlog = (req, res) => {
  res.json({ msg: "Update" });
};
