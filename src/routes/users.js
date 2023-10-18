const { Router} = require('express');
const router = Router();

router.get('/users'); // all users
router.get('/users/:id'); // one user

router.post('/users'); // one user

router.patch('/users'); // one user

router.delete('/users/:id'); // one user

module.exports = router;