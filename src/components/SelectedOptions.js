import React, { useState } from "react";
import SelectBrand from "./options/SelectBrand";
import SelectModel from "./options/SelectModel";
import SelectYear from "./options/SelectYear";
import SelectVersion from "./options/SelectVersion";
import '../styles/options.css';

const SelectedOptions = (props) => {
  const {brand, model, year, version } = props;

  const [selectedBrand, setSelectedBrand]  = useState("");
  const [selectedModel, setSelectedModel]  = useState("");
  const [selectedYear, setSelectedYear]  = useState("");
  const [selectedVersion]  = "versionId";

  return (
    <div className="selected-options">
      < SelectBrand brand={brand} setSelectedBrand={setSelectedBrand} />
      < SelectModel selectedBrand={selectedBrand} model={model} setSelectedModel={setSelectedModel} />
      < SelectYear selectedBrand={selectedBrand} selectedModel={selectedModel} year={year} setSelectedYear={setSelectedYear} />
      < SelectVersion selectedBrand={selectedBrand} selectedModel={selectedModel} version={version} selectedYear={selectedYear} selectedVersion={selectedVersion} />
    </div>
  );
};


export default SelectedOptions;