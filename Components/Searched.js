import ing from './Images/ing.png'
import React, {useEffect, useState} from 'react'
import Skeleton,  { SkeletonTheme } from 'react-loading-skeleton';



const Searched = ({ match, setFilterItems }) => {
    
    
    const[data, setData] = useState([]);
    
    useEffect(() => {
        setFilterItems('')
        setData('')
        fetchNumber();
    }, [match.params.id])

    const fetchNumber = async () => {
        
        const data = await fetch(`https://shubhdeeps.herokuapp.com/api/e-numbers/${match.params.id}`)
        const num = await data.json();
        setData(num)
    }

    
    return(
        <>
        <div className='text-container'>
        <h1> {match.params.id}  </h1>
        <SkeletonTheme color="#DFDECC" highlightColor="#E9E8D8">
        <p> <span> Name: </span> {data.Name || <Skeleton width={500} height={15} /> } </p>
        <p> <span> Description: </span>  {data.Description || <Skeleton width={434} height={15} />} </p>
        <p> <span> Usage: </span>  {data.Use || <Skeleton width={495} height={15} /> } </p>
        <p> <span> Animal Based: </span> {data.Animal || <Skeleton width={405} height={15} />} </p>
        </SkeletonTheme>
        </div>
        <img id='ing' src={ing} width='600px' height='800px'/>
        
        </>
    )
}


export default Searched;