const Numbers = ({filter, people, del}) => {
    return (
        <div>
            {people
                .filter((person)=> person.name.toLowerCase().startsWith(filter.toLowerCase()))
                .map((person)=><Number key={person.name} person = {person} del = {del}/>)}
        </div>
    )
}

const Number = ({person, del}) => <p>{person.name}: {person.number} <button onClick={() => del(person)}>Delete</button></p>

export default Numbers