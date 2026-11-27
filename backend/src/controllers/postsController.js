const store = require('../data/store');

const getAllPosts = (req, res) => {
  res.json(store.posts);
};

const getPostById = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const post = store.posts.find((p) => p.id === id);

  if (!post) {
    const err = new Error('Post not found');
    err.statusCode = 404;
    return next(err);
  }

  res.json(post);
};

const createPost = (req, res) => {
  const { title, content, author } = req.body;

  const newPost = {
    id: store.nextPostId++,
    title: title.trim(),
    content: content.trim(),
    author: author.trim(),
    createdAt: new Date().toISOString(),
    likes: 0,
  };

  store.posts.push(newPost);
  res.status(201).json(newPost);
};

const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const postIndex = store.posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    const err = new Error('Post not found');
    err.statusCode = 404;
    return next(err);
  }

  const { title, content } = req.body;
  store.posts[postIndex] = {
    ...store.posts[postIndex],
    title: typeof title === 'string' && title.trim() ? title.trim() : store.posts[postIndex].title,
    content: typeof content === 'string' && content.trim() ? content.trim() : store.posts[postIndex].content,
    updatedAt: new Date().toISOString(),
  };

  res.json(store.posts[postIndex]);
};

const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const postIndex = store.posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    const err = new Error('Post not found');
    err.statusCode = 404;
    return next(err);
  }

  store.posts.splice(postIndex, 1);
  res.status(204).send();
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
