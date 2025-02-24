const Gallery = require('../../infrastructure/db/models/gallery');
const Speaker = require('../../infrastructure/db/models/speaker');
const { uploadImage } = require('../../infrastructure/cloudinary');
const Initiative = require('../../infrastructure/db/models/initiative');
const Testimonial = require('../../infrastructure/db/models/testimonial');
const TeamMember = require('../../infrastructure/db/models/teamMember');
const fs = require('fs').promises;

class ContentController {
  static async addGalleryItem(req, res) {
    try {
      const imageUrl = await uploadImage(req.file.path);
      const galleryItem = new Gallery({
        imageUrl,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        order: req.body.order
      });
      await galleryItem.save();
      await fs.unlink(req.file.path).catch(console.error);
      res.status(201).json(galleryItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getGalleryItems(req, res) {
    try {
      const items = await Gallery.find().sort('order');
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getGalleryByCategory(req, res) {
    try {
      const items = await Gallery.find({ category: req.params.category }).sort('order');
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async addSpeaker(req, res) {
    try {
      const imageUrl = await uploadImage(req.file.path);
      const speaker = new Speaker({
        name: req.body.name,
        title: req.body.title,
        imageUrl,
        testimonial: req.body.testimonial
      });
      await speaker.save();
      await fs.unlink(req.file.path).catch(console.error);
      res.status(201).json(speaker);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getSpeakers(req, res) {
    try {
      const speakers = await Speaker.find();
      res.json(speakers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async addInitiative(req, res) {
    try {
      const imageUrl = await uploadImage(req.file.path);
      const initiative = new Initiative({
        title: req.body.title,
        description: req.body.description,
        imageUrl,
        date: req.body.date,
        stats: JSON.parse(req.body.stats),
        order: req.body.order
      });
      await initiative.save();
      await fs.unlink(req.file.path).catch(console.error);
      res.status(201).json(initiative);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getInitiatives(req, res) {
    try {
      const initiatives = await Initiative.find().sort('order');
      res.json(initiatives);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async addTestimonial(req, res) {
    try {
      const imageUrl = await uploadImage(req.file.path);
      const testimonial = new Testimonial({
        name: req.body.name,
        position: req.body.position,
        imageUrl,
        message: req.body.message,
        order: req.body.order
      });
      await testimonial.save();
      await fs.unlink(req.file.path).catch(console.error);
      res.status(201).json(testimonial);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTestimonials(req, res) {
    try {
      const testimonials = await Testimonial.find().sort('order');
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async addTeamMember(req, res) {
    try {
      const imageUrl = await uploadImage(req.file.path);
      const teamMember = new TeamMember({
        name: req.body.name,
        position: req.body.position,
        imageUrl,
        socialLinks: JSON.parse(req.body.socialLinks),
        category: req.body.category,
        order: req.body.order
      });
      await teamMember.save();
      await fs.unlink(req.file.path).catch(console.error);
      res.status(201).json(teamMember);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getTeamMembers(req, res) {
    try {
      const category = req.query.category;
      const query = category ? { category } : {};
      const teamMembers = await TeamMember.find(query).sort('order');
      res.json(teamMembers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ContentController; 