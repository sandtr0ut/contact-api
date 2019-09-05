const db = require('../models');

module.exports = function(app) {
  // Get all contacts
  app.get('/api/contacts/', function(req, res) {
    db.Contact.findAll({}).then(function(dbContact) {
      res.json(dbContact);
    });
  });

  // Add a new contact

  // Delete a contact

  // Update a contact
};
