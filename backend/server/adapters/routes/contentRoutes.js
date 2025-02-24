const express = require('express');
const router = express.Router();
const ContentController = require('../controllers/contentController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Gallery routes
router.post('/gallery', upload.single('image'), ContentController.addGalleryItem);
router.get('/gallery', ContentController.getGalleryItems);
router.get('/gallery/:category', ContentController.getGalleryByCategory);

// Speaker routes
router.post('/speakers', upload.single('image'), ContentController.addSpeaker);
router.get('/speakers', ContentController.getSpeakers);

// Initiative routes
router.post('/initiatives', upload.single('image'), ContentController.addInitiative);
router.get('/initiatives', ContentController.getInitiatives);

// Testimonial routes
router.post('/testimonials', upload.single('image'), ContentController.addTestimonial);
router.get('/testimonials', ContentController.getTestimonials);

// Team member routes
router.post('/team', upload.single('image'), ContentController.addTeamMember);
router.get('/team', ContentController.getTeamMembers);

module.exports = router; 