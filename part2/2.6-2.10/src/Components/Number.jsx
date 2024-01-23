const Numbers = ({filter, people}) => {
    return (
        <div>
            {people
                .filter((person)=> person.name.toLowerCase().startsWith(filter.toLowerCase()))
                .map((person)=><Number name={person.name} key={person.name} number={person.number}/>)}
        </div>
    )
}

const Number = ({name, number}) => <p>{name}: {number}</p>

export default Numbers