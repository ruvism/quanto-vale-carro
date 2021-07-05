import React, { useState, useEffect } from "react";
// import {selectedBrand, selectedModel, selectedYear} from '../SelectedOptions';


const SelectVersion = () => {
  const [error, setError] = useState(null);
  const [versions, setVersion] = useState([]);
  const [selectedVersion, setSelectedVersion]  = useState("");

  const handleSelection = ( selectedVersion ) => {
    setSelectedVersion(selectedVersion) 
    return selectedVersion;
  } 

  useEffect(
    () => {
      // fetch(`https://creditas-price-api.herokuapp.com/brands/${selectedBrand}/models/${selectedModel}/year${selectedYear}versions`)
      fetch(`https://creditas-price-api.herokuapp.com/brands/AUDI/models/A1/years/2011/versions`)
      .then(response => response.json())
      .then((result) => {
        setVersion(result);
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
        <label>Qual é a versão do seu carro?</label>
        <div className="option-div">
          <select onChange={handleSelection}>
            {versions.map(version => (
              <option key={version.id} value={version} selected={selectedVersion === version}>
                {version.version}  
              </option>
              ) 
            )}
          </select>
        </div>
      </div>
    );
  }
};
export default SelectVersion;