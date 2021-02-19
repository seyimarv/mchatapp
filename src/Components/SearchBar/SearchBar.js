import React, { useState } from 'react'
import SearchIcon from '../../Assests/icons8-search.svg'
import { StyledSearchBar } from './SearchBar.styles'


const SearchBar = ({ onSearchChange }) => {

    
    return (
        <StyledSearchBar>
            <div className='searchInput'>
                <img src={SearchIcon} style={{
                    height: '20px'
                }}
               alt='search icon'
                 className='searchIcon' />
                <input placeholder='Search users' onChange={onSearchChange} />

            </div>
        </StyledSearchBar>
    )
}


export default SearchBar;