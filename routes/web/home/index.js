const express = require('express');
const router = express.Router();
const home_controller = require('../../../controllers/web/home');

// Define routes
router.get('/', home_controller.index);      // Home route
router.get('/add', home_controller.add);     // Add event route
router.get('/update', home_controller.update); // Update event route

module.exports = router;