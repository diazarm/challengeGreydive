import { useState } from 'react';
import axios from 'axios';
import "../Home/styles.css";

function Home() {
  const [surveyData, setSurveyData] = useState(null);

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    birth_date: '',
    country_of_origin: '',
    terms_and_conditions: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Si es un checkbox, manejamos el valor "checked" en lugar de "value"
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/responses', formData);
      console.log('Form submitted');
      fetchSurveyData();
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  const fetchSurveyData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/responses');
      setSurveyData(response.data);
    } catch (error) {
      console.error('Error fetching survey data:', error);
    }
  };

  const handleClean = () => {
    setSurveyData(null);
  };

  return (
    <div className="container">
      <div>
        <h1>Survey app</h1>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="birth_date"
            placeholder="Birth Date"
            value={formData.birth_date}
            onChange={handleInputChange}
          />
          <select
            name="country_of_origin"
            value={formData.country_of_origin}
            onChange={handleInputChange}
          >
            <option value="">Select a country</option>
            <option value="argentina">Argentina</option>
            <option value="brasil">Brasil</option>
            <option value="chile">Chile</option>
            <option value="colombia">Colombia</option>
            <option value="mexico">México</option>
            <option value="peru">Perú</option>
            <option value="uruguay">Uruguay</option>
            <option value="venezuela">Venezuela</option>
          </select>
          <input
            type="checkbox"
            name="terms_and_conditions"
            checked={formData.terms_and_conditions}
            onChange={handleInputChange}
          />
          <label htmlFor="terms_and_conditions">
            I accept the terms and conditions
          </label>
          <button type="submit">Submit</button>
        </form>
        <button onClick={handleClean}>Clear List</button>
      </div>
      {surveyData ? (
          <div>
          <h2>Survey Responses</h2>
          <div className="responses">
          {surveyData.map((response) => (
            <div key={response.id} className="response">
              <h3>Full Name: {response.full_name}</h3>
              <h3>Id number: {response.id}</h3>
              <p>Email: {response.email}</p>
              <p>Birth Date: {new Date(response.birth_date).toLocaleDateString()}</p>
              <p>Country of Origin: {response.country_of_origin}</p>
              <p>Terms and Conditions: {response.terms_and_conditions ? 'Accepted' : 'Not Accepted'}</p>
            </div>
          ))}
          </div>
        </div>
      ) : (
        <div>
          <button onClick={fetchSurveyData}>Load Survey</button>
        </div>
      )}
    </div>
  );
}

export default Home;

