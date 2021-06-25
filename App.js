import './App.css';
import React, { useEffect, useState } from 'react'
import Service from './Service/Servive'
import Svgs from './Components/Svgs';
import Header from './Components/Header'
import product from './Components/Images/product.png'
import Searched from './Components/Searched'

import Filter from './Components/Filter';

function App() {

 
  const [value, setValue] = useState('')

  let [filterItems, setFilterItems] = useState([]);
  
  const [number, setNumber] = useState('')
  const [singleComponent, setSingleComponent] = useState('')

  useEffect(() => {
    Service.getData(setNumber);
  }, [])

  return (
    <div className="App">
      <Header number={number}  setFilterItems={setFilterItems} setSingleComponent={setSingleComponent} value={value}/>
      {singleComponent ? <Searched singleComponent={singleComponent[0]} /> :  
      <>
      <img id='product' src={product} />
      <Svgs />
      <h1> See what’s hidden behind those codes </h1>
      <p> <span> Fact: </span> Many of these additives were once of natural origin. However, most are now prepared/produced synthetically as these are often less expensive than the natural product. </p>
      <ul>
        <li>• E100s are generally colours.</li>
        <li>• E200 to E282 are mainly preservatives and acids.</li>
        <li>• E300 to E341 are mainly antioxidants and acid regulators.</li>
        <li>• E400s include emulsifiers, stabilisers, thickeners, anti-caking agents, release agents and bulking agents.</li>
        <p>To know more about an E number, search it using search box.</p>
      </ul>
      {filterItems.length!==0 ? <Filter filterItems={filterItems.slice(0,8)} setValue={setValue} /> : null} 
      </>}
    </div>
  );
}

export default App;
