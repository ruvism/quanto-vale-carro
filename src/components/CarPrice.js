import React, { useState, useEffect } from "react";

export const CarPrice = props => {
  const [car, setCar] = useState([]);
  const { selectedBrand, selectedModel, selectedYear, selectedVersion } = props;
  
  useEffect(
    () => {
      if (selectedBrand && selectedModel && selectedYear && selectedVersion) {
      fetch(`https://creditas-price-api.herokuapp.com/brands/`+ selectedBrand + `/models/` + selectedModel + `/years/` + selectedYear + `/versions/`+ selectedVersion)
      .then(response => response.json())
      .then((result) => {
        setCar(result);
        }
      )}
  }, [ selectedBrand, selectedModel, selectedYear, selectedVersion ]);
  
  return (       
    <div className="car-price">
      <div>O valor médio do seu carro é </div>
      <div key={car.id}>R$ {car.precoMedio},00</div>
    </div>
  );
};