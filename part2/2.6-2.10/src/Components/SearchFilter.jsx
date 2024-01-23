const SearchFilter = ({filter, setFilter}) => { 
    return <p>Filter shown with <input onChange={(event)=>setFilter(event.target.value)} value={filter}/></p>
}

export default SearchFilter