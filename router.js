const express = require('express');
const router = express.Router();
const path = require('path');

const user = require('./routes/api/user');
const post = require('./routes/api/post');
const workplace = require('./routes/api/workplace');
const auth = require('./routes/api/auth');

//use routes
router.use('/post', post);
router.use('/user', user);
router.use('/auth', auth);
router.use('/workplace', workplace);

// for prod
if (process.env.NODE_ENV == 'production') {
  router.use(express.static('connectsync_client/build'));
  router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = router;
