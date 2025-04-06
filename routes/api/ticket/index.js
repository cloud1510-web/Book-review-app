const express = require('express');
const router = express.Router();
const ticket_controller = require('../../../controllers/api/ticket');


router.get('/', ticket_controller.getAll);
router.get('/:id', ticket_controller.getById);
router.post('/', ticket_controller.create);
router.put('/:id', ticket_controller.update);
router.delete('/:id', ticket_controller.remove); 


module.exports = router;