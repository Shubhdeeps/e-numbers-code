import React from 'react';
import './CSS/header.css'
import { Link } from 'react-router-dom';

import Filter from './Filter';


const Header = ({number, setFilterItems, filterItems}) => {

    
  

    const handleChange = (e) => {
      
        let temp = e.target.value.charAt(0).toUpperCase().concat(e.target.value.slice(1,5))
      if(number)
      {
      const Items = number.filter(x => {
            return(x.Number.match(temp))
        })
        setFilterItems(Items.slice(0,8))
        if(Items.length > 300){
            setFilterItems('');
        }
       
    }
    }

  
   
    return(
        <>
        <div id='appbar'>
          <Link to={'/e-numbers'}> <h1> <span> E </span>NUMBERS</h1> </Link> 
            <div id='inputBox' >
            <input onChange={(e) => handleChange(e)} placeholder="Search" />
            <svg id='icon' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#05004E"/>
             </svg>
            </div>
        </div>
        {filterItems ? <Filter filterItems={filterItems.slice(0,8)}  /> : null} 
      </>
    )
}

export default Header;