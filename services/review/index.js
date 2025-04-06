const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '../../data/mock_db.json');

// Load tickets from the JSON file
const tickets = require('../../data/mock_db.json');

function saveToFile() {
    try {
      fs.writeFileSync(dbPath, JSON.stringify(tickets, null, 2));
      console.log('Saved tickets to file');
    } catch (err) {
      console.error('❌ Failed to write to file:', err);
    }
  }

const ticket_service = {
  getAll() {
    return tickets;
  },

  getById(id) {
    return tickets.find(ticket => ticket.id === id);
  },

  create(data) {
    const newTicket = { id: generateId(), ...data };
    tickets.push(newTicket);
    saveToFile();
    return newTicket;
  },

  update(id, newData) {
    const index = tickets.findIndex(ticket => ticket.id === id);
    if (index !== -1) {
      tickets[index] = { ...tickets[index], ...newData };
      saveToFile();
      return { message: 'Ticket updated', ticket: tickets[index] };
    }
    return { message: 'Ticket not found' };
  },

  delete(id) {
    console.log('Deleting ticket with ID:', id); // ✅ Add this line

    const index = tickets.findIndex(ticket => ticket.id === id);
    if (index !== -1) {
        const deleted = tickets.splice(index, 1);
        saveToFile();
        return { message: 'Ticket deleted', ticket: deleted[0] };
    }
    return { message: 'Ticket not found' };
}
};

// Helper to generate a simple unique ID
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports = ticket_service;