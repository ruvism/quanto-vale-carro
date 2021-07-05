import React, { useState, useEffect } from "react";

const SelectBrand = ( ) => {
  const [error, setError] = useState(null);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand]  = useState("");
  
  const handleSelection = ( selectedBrand ) => {
    setSelectedBrand(selectedBrand) 
    return selectedBrand;
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
          <select  onChange={handleSelection}>
            {brands.map(brand => (
              <option key={brand.id} value={brand} selected={selectedBrand === brand}>
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

export default SelectBrand;