import React from 'react'
import SearchIcon from '../../Assests/icons8-search.svg'
import { StyledSearchBar } from './SearchBar.styles'


const SearchBar = ({onSearchChange, onSearchSubmit}) => {
   const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onSearchSubmit(e)
        }
      }
    return (
        <StyledSearchBar>
        <div className='searchInput'>
           <img src={SearchIcon} alt='search icon' onClick={onSearchSubmit} className='searchIcon'/>
           <input placeholder='Search users' onKeyPress={handleKeyPress} onChange={onSearchChange}/>
         
        </div>
        </StyledSearchBar>
    )
}


export default SearchBar;