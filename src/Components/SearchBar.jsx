import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper component='form' onSubmit={onhandleSubmit} sx={{border: '1px solid #e9e9e9',pl: 2,borderRadius: 20,boxShadow: 'none',mr: { sm: 5 },
      }}
    >
      <input className='search-bar' placeholder='Search Here' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} style={{marginTop:'7px'}}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;