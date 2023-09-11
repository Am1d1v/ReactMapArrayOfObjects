import './Person.css'


function Person(props){

    const {firstName, id} = props

    return(
        
         <div className='person-card'>
                <h1>Name: {firstName}</h1>
                <h2>ID: {id}</h2>
        </div>
        
    )
}

export default Person;