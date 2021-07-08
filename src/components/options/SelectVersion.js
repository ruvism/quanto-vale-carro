import React, { useState, useEffect } from "react";

export const SelectVersion = props => {
  const { selectedBrand, selectedModel, selectedYear, selectedVersion, setSelectedVersion } = props;
  const [versions, setVersion] = useState([]);

  const handleSelection = ( e ) => {
    setSelectedVersion(e.target.value);
    return selectedVersion;
  } 

  useEffect(
    () => {
      if (selectedBrand && selectedModel && selectedYear) {
      fetch(`https://creditas-price-api.herokuapp.com/brands/`+ selectedBrand + `/models/`+ selectedModel + `/years/`+ selectedYear + `/versions`)
      // fetch(`https://creditas-price-api.herokuapp.com/brands/AUDI/models/A1/years/2011/versions`)
      .then(response => response.json())
      .then((result) => {
        setVersion(result);
        }
      )}
  }, [selectedBrand, selectedModel, selectedYear]);

  return (       
    <div>
      <label>Qual é a versão do seu carro?</label>
      <div className="option-div">
        <select onChange={handleSelection} value={selectedVersion}>
            <option value="">Versão</option>
          {versions.map((item, index) => (
            <option key={index} value={item.versionId}>
              {item.version}  
            </option>
            ) 
          )}
        </select>
      </div>
    </div>
  );
};