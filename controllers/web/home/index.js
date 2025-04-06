const home_controller = {
  index: async (req, res) => {
    res.render('home/index', { reviews });
  },

  add: async (req, res) => {
    res.render('home/add_update', { isEdit: false, review: null });
  },

  create: async (req, res) => {
    const { title, author, genre, rating } = req.body;

    const newReview = {
      id: uuid.v4(),
      title,
      author,
      genre,
      rating,
    };

    reviews.push(newReview);
    res.redirect('/');
  },

  update: async (req, res) => {
    const review = reviews.find((r) => r.id === req.params.id);
    res.render('home/add_update', { isEdit: true, review });
  },

  delete: async (req, res) => {
    const index = reviews.findIndex((r) => r.id === req.params.id);
    if (index !== -1) {
      reviews.splice(index, 1);
    }
    res.redirect('/');
  },
};

module.exports = home_controller;