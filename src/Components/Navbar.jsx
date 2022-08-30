import React from 'react'
import {Link} from 'react-router-dom'
import {logo} from '../utils/constant';
import  SearchBar  from './SearchBar';
import {Stack} from '@mui/material'
const Navbar = () => {
  return (
    <>
      <Stack direction="row" alignItems="center" p={5} sx={{ positon:'sticky',background:'#000',top:0, justifyContent:'space-between'}}>

    <Link to='/' style={{display:'flex',alignItems:'center'}}>
      <img src={logo} alt="logo/img" height={50}/>
    </Link>
      <SearchBar/>
      </Stack>
    </>
  )
}

export default Navbar
