const validatePost = (req, res, next) => {
  const { title, content, author } = req.body;
  const errors = [];

  if (!title || typeof title !== 'string' || title.trim().length < 3) {
    errors.push('Title must be at least 3 characters');
  }

  if (!content || typeof content !== 'string' || content.trim().length < 10) {
    errors.push('Content must be at least 10 characters');
  }

  if (!author || typeof author !== 'string' || !author.trim()) {
    errors.push('Author is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

module.exports = { validatePost };
