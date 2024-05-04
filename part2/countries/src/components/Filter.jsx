const Filter = ({filter, setFilter}) => {
    return (
    <div>
        find countries:  
        <input content={filter} onChange={(event) => {
            setFilter(event.target.value)
            console.log(event.target.value)}}>
        </input>
    </div>)
}

export default Filter   