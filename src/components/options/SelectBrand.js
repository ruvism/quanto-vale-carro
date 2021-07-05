import React, { useState, useEffect } from "react";

export const SelectBrand = props => {
  const [error, setError] = useState(null);
  const [brands, setBrands] = useState([]);
  const { selectedBrand, setSelectedBrand }  = props;
  
  const handleSelection = e => {
    setSelectedBrand(e.target.value); 
  }

  useEffect(
    () => {
      fetch("https://creditas-price-api.herokuapp.com/brands")
      .then(response => response.json())
      .then((result) => {
          setBrands(result);
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
        <label>Qual é a marca do seu carro?</label>
        <div className="option-div">
          <select  onChange={handleSelection} value={selectedBrand}>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}  
              </option>
              ) 
            )}
          </select>
        </div>
      </div>
    );
  }
};