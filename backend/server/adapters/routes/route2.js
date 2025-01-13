// Import controller
const Controller = require('../controllers/Controller');

// Initialize router
const router = require('express').Router();

// Define routes
router.get('/all', Controller.all);
router.get('/:id', Controller.getOne);
router.post('/', Controller.create);
router.put('/:id', Controller.update);
router.delete('/:id', Controller.delete);

// Export router
module.exports = router;