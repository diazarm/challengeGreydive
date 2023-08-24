const { sequelize, Response } = require('../db');

async function createResponse(req, res) {
  try {
    const { full_name, email, birth_date, country_of_origin, terms_and_conditions } = req.body;

    const response = await Response.create({
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
      const responses = await Response.findAll();
  
      res.status(200).json(responses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving responses' });
    }
  }
  
  module.exports = { createResponse, getResponses };
  