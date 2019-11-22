const userController = require('../controllers/userController');

module.exports = (app) => {
    app.post('/api/link/:id', userController.linkUser);
    app.post('/api/delete/:id',userController.deleteUser);
    app.post('/api/change/:id',userController.changeUser);
    app.post('/api/add-user',userController.addUser);
}