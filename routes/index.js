const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form');
});

router.post('/new', function (req, res, next) {
  // Extract data from the form submission
  const messageText = req.body.message;
  const messageUser = req.body.author;

  // Push the new message into the messages array
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  // Redirect users back to the index page after submitting a new message
  res.redirect('/');
});

module.exports = router;
