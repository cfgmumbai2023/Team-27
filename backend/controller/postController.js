//Post model
const Post=require('../model/PostModel');


// Function to fetch all posts
const getPosts = async (req, res) => {
    try {
      console.log("we are going in!");
      const posts = await Post.find();
      console.log("hello hi");
      console.log(posts);
      return res.json(posts);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
  // Function to add a new post
  const addPost = async (req, res) => {
    try {
      const {
        title,
        url,
        email,
        summary,
        tags,
      } = req.body;
  
      const newUser = new User({
        title,
        url,
        email,
        summary,
        tags,
        isAccepted:false,
      });
  
      const savedUser = await newUser.save();
  
      return res.json(ok);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
  
  // Function to update a post
    const updatePost = async (req, res) => {
    try {
      const id=req.params.id;
      console.log(id);
      const post = await Post.findOne({ _id: id });
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      post.isAccepted = true;
      await post.save();
  
      return res.json({"post":post});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
  // Function to delete a post
  const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;

    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

  
  module.exports = {
    getPosts,
    addPost,
    updatePost,
    deletePost
  };