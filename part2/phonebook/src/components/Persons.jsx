import Entry from "./Entry"

const Persons = ({ persons,newSearch }) => {
    return (
        <ul>
            {persons.map(person => (
                <Entry key={person.name} name={person.name} number={person.number} search={newSearch}/>
            ))}
        </ul>
    )
}

export default Persons