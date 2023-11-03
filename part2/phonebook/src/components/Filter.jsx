const Filter = ({ newSearch, handleSearch }) => {
    return (
        <div>
            Search: <input value={newSearch} onChange={handleSearch}/>
        </div>
    )
}

export default Filter