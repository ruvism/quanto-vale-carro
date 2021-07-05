import React, { useState } from "react";
import { SelectBrand } from "./options/SelectBrand";
import { SelectModel } from "./options/SelectModel";
import { SelectYear } from "./options/SelectYear";
import { SelectVersion } from "./options/SelectVersion";
import { CarPrice } from "./CarPrice";
import '../styles/options.css';

export default function SelectedOptions () {

  const [selectedBrand, setSelectedBrand]  = useState("");
  const [selectedModel, setSelectedModel]  = useState("");
  const [selectedYear, setSelectedYear]  = useState("");
  const [selectedVersion]  = "versionId";

  return (
    <div className="selected-options">
      < SelectBrand selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
      < SelectModel {...{selectedBrand, selectedModel, setSelectedModel}} />
      < SelectYear {...{selectedBrand, selectedModel, selectedYear, setSelectedYear}} />
      < SelectVersion {...{selectedBrand, selectedModel, selectedYear, selectedVersion}} />
      <CarPrice />
    </div>
  );
};
