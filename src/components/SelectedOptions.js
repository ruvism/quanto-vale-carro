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
  const [selectedVersion, setSelectedVersion] = useState("");

  return (
    <>
    <div className="selected-options">
      < SelectBrand selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
      < SelectModel  selectedBrand={selectedBrand} selectedModel={selectedModel} setSelectedModel={setSelectedModel}/>
      < SelectYear selectedBrand={selectedBrand} selectedModel={selectedModel} selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      < SelectVersion selectedBrand={selectedBrand} selectedModel={selectedModel} selectedYear={selectedYear} selectedVersion={selectedVersion} setSelectedVersion={setSelectedVersion} />
    </div>
    <CarPrice selectedBrand={selectedBrand} selectedModel={selectedModel} selectedYear={selectedYear} selectedVersion={selectedVersion} />
    </>
  );
};