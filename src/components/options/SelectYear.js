import React, { useState, useEffect } from "react";
// import {selectedBrand, selectedModel} from '../SelectedOptions';

const SelectYear = () => {
  const [error, setError] = useState(null);
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear]  = useState("");
  // const {selectedBrand, selectedModel} = useState(props);

  const handleSelection = ( selectedYear ) => {
    setSelectedYear(selectedYear) 
    return selectedYear;
  } 

  useEffect(
    () => {
      // fetch(`https://creditas-price-api.herokuapp.com/brands/${selectedBrand}/models/${selectedModel}/year`)
      fetch(`https://creditas-price-api.herokuapp.com/brands/AUDI/models/A7/years`)
      .then(response => response.json())
      .then((result) => {
        setYears(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erro! Tente novamente.</div>;
  } else{
  
    return (       
      <div>
          <label>Qual é o ano do seu carro?</label>
          <div className="option-div">
            <select onChange={handleSelection}>
              {years.map(year => (
                <option key={year.id} value={year} selected={selectedYear === year}>
                  {year}  
                </option>
                ) 
              )}
            </select>
          </div>
      </div>
    );
  }
};
export default SelectYear;