import React, { useState, useEffect } from "react";

export const SelectModel = props => {
  const [error, setError] = useState(null);
  const [models, setModels] = useState([]);
  const { selectedBrand, selectedModel, setSelectedModel }  = props;

  const handleSelection = ( e ) => {
    setSelectedModel(e.target.value)
  } 

  useEffect(
    () => {
      fetch(`https://creditas-price-api.herokuapp.com/brands/`+ selectedBrand + `/models`)
      // fetch(`https://creditas-price-api.herokuapp.com/brands/AUDI/models`)
      .then(response => response.json())
      .then((result) => {
        setModels(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [selectedBrand]);

  if (error) {
    return <div>Erro! Tente novamente.</div>;
  } else{
  
    return (       
      <div>
        <label>Qual é o modelo do seu carro?</label>
        <div className="option-div">
          <select onChange={handleSelection} value={selectedModel}>
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
  }
};