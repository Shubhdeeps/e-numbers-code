import './CSS/filter.css'




const Filter = ({filterItems, setValue}) => {

  const handleClick = (e) => {

  
   
    setValue(e.target.firstChild.wholeText.replace(/ /g, ""))

  }
  const handleClick1 = (e) => {
    e.stopPropagation();
  setValue(e.target.parentNode.firstChild.wholeText.replace(/ /g, ""))
  }


    return(
      <div id='parent-filter'>
      <div id='filter-container'>
         {filterItems.map(x =>{
            return(
               <p id='filter' key={x.Number}
               onClick={(e) => handleClick(e)}
               > {x.Number} <span  onClick={(e) => handleClick1(e)}> {x.Name} </span> 
              </p> 
              )
         })}
      </div>
      </div>
    )
}

export default Filter;