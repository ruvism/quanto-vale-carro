import React, { useState, useEffect } from "react";

export const SelectYear = props => {
  const [error, setError] = useState(null);
  const [years, setYears] = useState([]);
  const { selectedBrand, selectedModel, selectedYear, setSelectedYear } = props;

  const handleSelection = ( e ) => {
    setSelectedYear(e.target.value);
  } 

  useEffect(
    () => {
      fetch(`https://creditas-price-api.herokuapp.com/brands/`+ selectedBrand + `/models/` + selectedModel + `/years`)
      // fetch(`https://creditas-price-api.herokuapp.com/brands/AUDI/models/A7/years`)
      .then(response => response.json())
      .then((result) => {
        setYears(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [selectedBrand,  selectedModel ]);

  if (error) {
    return <div>Erro! Tente novamente.</div>;
  } else{
  
    return (       
      <div>
          <label>Qual é o ano do seu carro?</label>
          <div className="option-div">
            <select onChange={handleSelection} value={selectedYear}>
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
  }
};