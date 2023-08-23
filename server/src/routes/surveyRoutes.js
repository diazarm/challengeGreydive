const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');

// Ruta para almacenar respuestas de encuesta
router.post('/responses', surveyController.createResponse);

// Ruta para obtener respuestas almacenadas
router.get('/responses', surveyController.getResponses);

module.exports = router;
