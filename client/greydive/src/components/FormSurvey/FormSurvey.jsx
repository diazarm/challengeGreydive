import React from 'react'
import axios from 'axios';
//import { useState } from 'react';
//import { useDispatch, useSelector } from "react-redux";

const ResponseList = () => {
    
    //const dispatch = useDispatch();
    //const [surveyData, setSurveyData] = useState(null);

  const fetchSurveyData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/responses"); 
      console.log(response.data)
  //    setSurveyData(response.data);
    } catch (error) {
      console.error('Error fetching survey data:', error);
    }
  };

  return (
    <div>
        <h1>Survey app</h1>
        (<button onClick={fetchSurveyData}>Load Survey</button>)
    </div>
  )
}

export default ResponseList