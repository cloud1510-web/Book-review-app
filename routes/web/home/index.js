const express = require('express');
const router = express.Router();
const ticket_service = require('../../../services/review');

// READ - Show all tickets
router.get('/', (req, res) => {
  const tickets = ticket_service.getAll();
  res.render('home/index', { tickets });
});

// CREATE - Show add form
router.get('/add', (req, res) => {
  res.render('home/add_update', {
    isEdit: false,
    review: { title: '', author: '', genre: '', rating: '', _id: null }
  });
});

// CREATE - Handle form submit for new ticket
router.post('/add', (req, res) => {
  const { title, author, genre, rating } = req.body;
  ticket_service.create({ title, author, genre, rating });
  res.redirect('/');
});

// UPDATE - Show edit form
router.get('/edit/:id', (req, res) => {
  const review = ticket_service.getById(req.params.id);
  if (!review) {
    return res.status(404).send('Review not found');
  }

  res.render('home/add_update', {
    isEdit: true,
    review
  });
});


router.post('/update/:id', (req, res) => {
  const { title, author, genre, rating } = req.body;
  ticket_service.update(req.params.id, { title, author, genre, rating });
  res.redirect('/');
});


router.post('/delete/:id', (req, res) => {
  ticket_service.delete(req.params.id);
  res.redirect('/');
});

module.exports = router;