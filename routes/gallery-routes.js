const express = require('express');
const galleryRoutes = express.Router();

const galleryController = require('../controllers/gallery-controller')

galleryRoutes.get('/', galleryController.index);

module.exports = galleryRoutes;