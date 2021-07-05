import React, { useState, useEffect } from "react";

const CarPrice = () => {
  const [error, setError] = useState(null);
  const [car, setCar] = useState([]);
  

  useEffect(
    () => {
      // fetch(`https://creditas-price-api.herokuapp.com/brands/${selectedBrand}/models/${selectedModel}/year/${selectedYear}versions/${versionSelected}`)
      fetch(`https://creditas-price-api.herokuapp.com/brands/AUDI/models/A1/years/2011/versions/1840d2e5294dd4624db066ef785f1315`)
      .then(response => response.json())
      .then((result) => {
        setCar(result);
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
      <div className="car-price">
        <div>O valor médio do seu carro é </div>
        <div key={car.id}>R$ {car.precoMedio},00</div>
      </div>
    );
  }
};
export default CarPrice;
