import React, { useState, useEffect } from "react";

export const SelectModel = props => {
  const { selectedBrand, selectedModel, setSelectedModel }  = props;
  const [models, setModels] = useState([]);

  const handleSelection =  e  => {
    setSelectedModel(e.target.value)
  } 
  
  useEffect(
    () => {
      if (selectedBrand) {
      fetch(`https://creditas-price-api.herokuapp.com/brands/`+selectedBrand+`/models`)
        .then(response => response.json())
        .then((result) => {
          setModels(result);
        }
      )}
    }, [selectedBrand]);
  
  return (       
    <div>
      <label>Qual é o modelo do seu carro?</label>
      <div className="option-div">
        <select onChange={handleSelection} value={selectedModel}>
            <option value="">Modelo</option>
            {models.map((model, index) => (
            <option key={index} value={model} >
              {model}  
            </option>
            ) 
          )}
        </select>
      </div>
    </div>
  );
};