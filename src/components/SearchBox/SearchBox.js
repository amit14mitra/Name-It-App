import React from 'react'
import './SearchBox.css'

const SearchBox = ({onInputChange}) => {
    return (
        <div className='search-container'>
            <input onChange={(event)=>onInputChange(event.target.value)} placeholder='Type here' className='search-text'/>
        </div>
    )
}

export default SearchBox