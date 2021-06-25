import ing from './Images/ing.png'



const Searched = ({singleComponent}) => {

   

    return(
        <>
        <div className='text-container'>
        <h1> {singleComponent.Number} </h1>
        <p> <span> Name: </span> {singleComponent.Name} </p>
        <p> <span> Description: </span> {singleComponent.Description} </p>
        <p> <span> Usage: </span> {singleComponent.Use} </p>
        <p> <span> Animal Based: </span> {singleComponent.Animal ? 'Likely to be present' : 'Not present'} </p>
        </div>
        <img id='ing' src={ing} width='600px' height='800px'/>
        
        </>
    )
}


export default Searched;