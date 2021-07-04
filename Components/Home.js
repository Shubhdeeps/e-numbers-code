import React from 'react'
import product from './Images/product.png'
import Svgs from './Svgs';

const Home = () => {


    return(
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
        
        </>
    )
}

export default Home;