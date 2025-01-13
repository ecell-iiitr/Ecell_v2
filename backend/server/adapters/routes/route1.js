// Import controller
const Controller = require('../controllers/Controller');

// Create router instance
const router = require('express').Router();

// Define routes
router.get('/resource', Controller.getAll);
router.get('/resource/:id', Controller.getOne);
router.post('/resource', Controller.create);
router.put('/resource/:id', Controller.update);
router.delete('/resource/:id', Controller.delete);

// Export router
module.exports = router;
