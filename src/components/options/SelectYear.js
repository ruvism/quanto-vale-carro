import React, { useState, useEffect } from "react";

export const SelectYear = props => {
  const { selectedBrand, selectedModel, selectedYear, setSelectedYear } = props;
  const [years, setYears] = useState([]);

  const handleSelection = ( e ) => {
    setSelectedYear(e.target.value);
  } 

  useEffect(
    () => {
      if (selectedBrand && selectedModel) {
      fetch(`https://creditas-price-api.herokuapp.com/brands/`+ selectedBrand + `/models/`+ selectedModel + `/years`)
      .then(response => response.json())
      .then((result) => {
        setYears(result);
        }
      )}
  }, [ selectedBrand, selectedModel ]);

  return (       
    <div>
        <label>Qual é o ano do seu carro?</label>
        <div className="option-div">
          <select onChange={handleSelection} value={selectedYear}>
            <option value="">Ano</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}  
              </option>
              ) 
            )}
          </select>
        </div>
    </div>
  );
};