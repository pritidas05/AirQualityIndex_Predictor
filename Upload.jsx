import React, { useState } from 'react';
import axios from 'axios';
import './upload.css';
import Img from "../src/Image/img.png";
import PieChartComponent from './PieChartComponent';

const cities = [
  "Select City", "Ahmedabad", "Aizawl", "Amaravati", "Amritsar", "Bengaluru", 
  "Bhopal", "Brajrajnagar", "Chandigarh", "Chennai", "Coimbatore", "Delhi", 
  "Ernakulam", "Gurugram", "Guwahati", "Hyderabad", "Jaipur", "Jorakhpur", 
  "Kochi", "Kolkata", "Lucknow", "Mumbai", "Patna", "Shillong", "Talcher", 
  "Thiruvananthapuram", "Visakhapatnam"
];

const labels = [
  "PM25", "PM10", "NO", "NO2", "NOx", "NH3", "CO", "SO2", "O3", 
  "Benzene", "Toluene", "Xylene"
];

const Upload = () => {
  const [formData, setFormData] = useState({
    city: '',
    ...labels.reduce((acc, label) => ({ ...acc, [label]: '' }), {})
  });
  const [calculationResult, setCalculationResult] = useState('');
  const [isCitySelected, setIsCitySelected] = useState(false);
  const [extractedValues, setExtractedValues] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // console.log(name);
    // console.log(value);
    setIsCitySelected(value !== 'Select City');
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    if (!isCitySelected) {
      setCalculationResult('');
      return;
    }
  
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', formData);
      const result = response.data;
      setCalculationResult(result);

    
      const newExtractedValues = labels.slice(0).map(label => ({
        name: label,
        value: formData[label]
      }));
      setExtractedValues(newExtractedValues);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  // console.log(extractedValues);

  return (
    <div className="App container">
      <main>
        <section
          className="data-section"
          id="header"
          style={{
            backgroundImage: `url(${Img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            top: 0,
            left: 0,
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            minHeight: '100vh', 
            minWidth: '100%'
          }}
        >
          <h2>Air Quality Data</h2>
          <div className="data-container">
            <form onSubmit={handleFormSubmit} className="data-form">
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <select id="city" name="city" value={formData.city} onChange={handleInputChange} required>
                  {cities.map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                {!isCitySelected && (
                  <p className="error-text">Please select a city to proceed</p>
                )}
              </div>

              {labels.map(label => (
                <div className="form-group" key={label}>
                  <label htmlFor={label.toLowerCase()}>{label}:</label>
                  <input
                    type="text"
                    id={label.toLowerCase()}
                    name={label}
                    placeholder={`${label} Level`}
                    value={formData[label.toLowerCase()]}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              ))}

              {isCitySelected && (
                <button type="submit" className="btn">Calculate</button>
              )}
            </form>

            {/* Display the pie chart */}
            {isCitySelected && (
              <div className="result-box">
                <h2>Calculation Result:</h2>
                <p>{calculationResult}</p>
              </div>
            )}
          </div>
         
        </section>
      </main>
      <div className="chart-container">
            {isCitySelected && (
              <PieChartComponent extractedValues={extractedValues} />
            )}
          </div>
    </div>
  );
};

export default Upload;
