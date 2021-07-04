import './CSS/filter.css'
import { Link } from 'react-router-dom';



const Filter = ({filterItems}) => {

    return(
      <div id='parent-filter'>
      <div id='filter-container'>
         {filterItems.map(x =>{
          return(
           
               <p id='filter' key={x.Number}>
                  <Link to={`/${x.Number}`} style={{ textDecoration: 'none'  }}>
                 {x.Number} <span> {x.Name} </span>
                 </Link>
              </p>
          ) 
             
         })}
      </div>
      </div>
    )
}

export default Filter;