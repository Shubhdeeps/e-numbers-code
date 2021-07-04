import './App.css';
import React, { useEffect, useState } from 'react'
import Service from './Service/Servive'
import Home from './Components/Home';
import Header from './Components/Header'
import Searched from './Components/Searched'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {


  const [filterItems, setFilterItems] = useState([]);
  const [number, setNumber] = useState('')
  

  useEffect(() => {
    Service.getData(setNumber);
  }, [filterItems])

  return (
    
      <Router>
        <div className="App">
        <Header number={number}  setFilterItems={setFilterItems} filterItems={filterItems}  /> 
        <Switch>
           <Route path="/e-numbers" exact   component={Home} />
           <Route path="/:id"  render={(props) => (
               <Searched setFilterItems={setFilterItems}  {...props} />
               )}/> 
        </Switch>   
        </div>
      </Router>
     
   
  );
}



export default App;
