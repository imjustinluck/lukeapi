import React from "react";

const Search = ({item,setItem,handleSubmit}) => {

    const handleChange = e => {
        setItem({
            ...item,
            [e.target.name]:e.target.value
        })
    }

    return(
        <div>
            <form style={{
            display:"flex",
            alignItems:"center"
        }} onSubmit={handleSubmit}>
                <h1>Search For:</h1>
                <select name="search" value={item.search} onChange={handleChange}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <h1>ID:</h1>
                <input type="text" name="id" value={item.id} onChange={handleChange} />
                <button type="submit">Search</button>

            </form>
        </div>
    )
}

export default Search;