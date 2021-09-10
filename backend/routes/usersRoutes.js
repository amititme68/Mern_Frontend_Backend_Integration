const express = require('express');
const usersRoutes = require('../controllers/usersControllers');

const router = express.Router();

router.get('/',usersRoutes.usersControllers); 

module.exports = router;