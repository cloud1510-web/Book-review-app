const ticket_service = require('../../../services/review');

const ticket_controller = {
  getAll(req, res) {
    const tickets = ticket_service.getAll();
    res.json(tickets);
  },

  getById(req, res) {
    const ticket = ticket_service.getById(req.params.id);
    if (ticket) {
      res.json(ticket);
    } else {
      res.status(404).json({ message: 'Ticket not found' });
    }
  },

  create(req, res) {
    const newTicket = ticket_service.create(req.body);
    res.status(201).json(newTicket);
  },

  update(req, res) {
    const result = ticket_service.update(req.params.id, req.body);
    if (result.ticket) {
      res.json(result);
    } else {
      res.status(404).json(result);
    }
  },

  remove(req, res) { // <-- make sure it's remove
    const result = ticket_service.delete(req.params.id);
    if (result.ticket) {
      res.json(result);
    } else {
      res.status(404).json(result);
    }
  }
};

module.exports = ticket_controller; // ✅ This line is critical