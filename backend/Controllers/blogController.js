const Blog = require('../Models/blog');

// Créer un nouveau blog
exports.createBlog = async (req, res) => {
  const { titre, content, auteur, tags} = req.body;
  
  try {
    const newBlog = await Blog.create({ titre,content,auteur, tags });
    res.status(200).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer tous les blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('auteur', 'name email');
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un blog par ID
exports.getBlogById = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id).populate('auteur', 'name email');
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un blog
exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { titre, auteur, tags,content } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, { titre, content,auteur,tags, updatedAt: Date.now() }, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer un blog
exports.deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
