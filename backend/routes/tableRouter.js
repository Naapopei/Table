const tableController = require('../controllers/tableController');
module.exports = (app) => {
    app.get('/api/kek', tableController.getUser);
}