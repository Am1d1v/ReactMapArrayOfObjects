import './PersonStyle.css'


function Person(props){

    const {firstName, id, email, img} = props

    return(
        

        <div className='person-card'>
                <h1>Name: {firstName}</h1>
                <img src={img} />
                <h2>ID: {id}</h2>
                <h2>Email: {email}</h2>
        </div>
        
    )
}

export default Person;