import React, { useState, useEffect } from "react";
// import { selectedBrand } from "../SelectedOptions";

const SelectModel = () => {
  const [error, setError] = useState(null);
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel]  = useState("");
  // const { selectedBrand } = useState(props)

  const handleSelection = ( selectedModel ) => {
    setSelectedModel(selectedModel) 
    return selectedModel;
  } 

  useEffect(
    () => {
      // fetch(`https://creditas-price-api.herokuapp.com/brands/${selectedBrand}/models`)
      fetch(`https://creditas-price-api.herokuapp.com/brands/AUDI/models`)
      .then(response => response.json())
      .then((result) => {
        setModels(result);
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
        <label>Qual é o modelo do seu carro?</label>
        <div className="option-div">
          <select onChange={handleSelection}>
            {models.map(model => (
              <option key={model.id} value={model} selected={selectedModel === model}>
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

export default SelectModel;