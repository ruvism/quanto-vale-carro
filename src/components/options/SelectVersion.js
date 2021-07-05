import React, { useState, useEffect } from "react";

export const SelectVersion = props => {
  const [error, setError] = useState(null);
  const [versions, setVersion] = useState([]);
  const { selectedBrand, selectedModel, selectedYear, selectedVersion, setSelectedVersion } = props;

  const handleSelection = ( e ) => {
    setSelectedVersion(e.target.value);
  } 

  useEffect(
    () => {
      fetch(`https://creditas-price-api.herokuapp.com/brands/`+ selectedBrand + `/models/` + selectedModel + `/years/` + selectedYear + `/versions`)
      // fetch(`https://creditas-price-api.herokuapp.com/brands/AUDI/models/A1/years/2011/versions`)
      .then(response => response.json())
      .then((result) => {
        setVersion(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [selectedBrand, selectedModel, selectedYear]);

  if (error) {
    return <div>Erro! Tente novamente.</div>;
  } else{
  
    return (       
      <div>
        <label>Qual é a versão do seu carro?</label>
        <div className="option-div">
          <select onChange={handleSelection} value={selectedVersion}>
            {versions.map((version, index) => (
              <option key={index} value={version.versionId}>
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