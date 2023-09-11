import persons from "../Data/Persons"
import Person from "./Person"



function Persons(){

    return(
        <div className="PersonsGrid">
            {persons.map((person, index) => {
            return <Person {...person} key={index}/>
          })}
        </div>
    )
}

export default Persons;


