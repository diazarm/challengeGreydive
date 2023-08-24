//import stylesHome from "./Home.module.css";
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function Home() {
    
    const [surveyData, setSurveyData] = useState(null);
    const [submitted, setSubmitted] = useState(null);

    const fetchSurveyData = async () => {
        try {
          const response = await axios.get("http://localhost:3001/responses"); 
          console.log(response.data)
          setSurveyData(response.data);
        } catch (error) {
          console.error('Error fetching survey data:', error);
        }
      };

      const handlerClean = () =>{setSurveyData(null)};
      
      const handleSubmit = async () => {
        try {
          await axios.post('http://localhost:3001/responses', selectedOptions);
          setSubmitted(true);
        } catch (error) {
          console.error('Error submitting survey:', error);
        }
      };
      const createSurvey = () => {
        handleSubmit()  
      }
  return(
<div>
    <div>
        <h1>Survey app</h1>
    </div>
    <div>
            <button onClick={createSurvey}>Create survey</button>
    </div>
    {surveyData ? (
   
    <div>
          <h2>Survey Responses</h2>
          {surveyData.map((response) => (
            <div key={response.id}>
              <h3>Full Name: {response.full_name}</h3>
              <h3>Id number: {response.id}</h3>
              <p>Email: {response.email}</p>
              <p>Birth Date: {response.birth_date}</p>
              <p>Country of Origin: {response.country_of_origin}</p>
              <p>Terms and Conditions: {response.terms_and_conditions ? 'Accepted' : 'Not Accepted'}</p>
            </div>
          ))}
            <button onClick={handlerClean}>clear list</button>

    </div>) : (
         <div>
            <button onClick={fetchSurveyData}>Load Survey</button>
        </div>
    )}
</div>
  )
  
}


export default Home;


