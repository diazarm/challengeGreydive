const { sequelize, Responses } = require('../models/response');

async function createResponse(req, res) {
  try {
    const { full_name, email, birth_date, country_of_origin, terms_and_conditions } = req.body;

    const response = await Responses.create({
      full_name,
      email,
      birth_date,
      country_of_origin,
      terms_and_conditions,
    });

    res.status(201).json({ message: 'Response created successfully', response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating response' });
  }
}



async function getResponses(req, res) {
    try {
      const responses = await Responses.findAll();
  
      res.status(200).json(responses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving responses' });
    }
  }
  
  module.exports = { createResponse, getResponses, createResponse };
  