//import stylesHome from "./Home.module.css";
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function Home() {
  const [surveyData, setSurveyData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const fetchSurveyData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/responses"); 
      console.log(response.data)
      setSurveyData(response.data);
    } catch (error) {
      console.error('Error fetching survey data:', error);
    }
  };

  const handleOptionChange = (questionId, optionId) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/responses', selectedOptions); // Replace with your API endpoint
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting survey:', error);
    }
  };

  return (
    <div className="App">
      <h1>Survey App</h1>
      {surveyData ? (
        <div>
          <h2>Survey Questions</h2>
          {surveyData.questions.map((question) => (
            <div key={question.id}>
              <h3>{question.text}</h3>
              <ul>
                {question.options.map((option) => (
                  <li key={option.id}>
                    <label>
                      <input
                        type="radio"
                        name={`question_${question.id}`}
                        value={option.id}
                        checked={selectedOptions[question.id] === option.id}
                        onChange={() => handleOptionChange(question.id, option.id)}
                      />
                      {option.text}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button onClick={handleSubmit}>Submit</button>
          {submitted && <p>Survey submitted successfully!</p>}
        </div>
      ) : (
        <button onClick={fetchSurveyData}>Load Survey</button>
      )}
    </div>
  );
}

export default Home;
