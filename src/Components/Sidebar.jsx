import React from 'react'
import {Stack} from '@mui/material';
import { categories } from '../utils/constant';

const Sidebar = ({selectedCategroy,setSelectedCategory}) => {
  return(
    <>
    <Stack direction='row' sx={{overflow:'auto',height:{sx:'auto',md:'95%'},flexDirection:{md:'column'},}} >
        {
            categories.map((category)=>(
                <button className='category-btn' onClick={()=>
                  setSelectedCategory(category.name)
                } 
                style={{background:category.name === selectedCategroy && '#FC1503',color:'white',textTransform:'uppercase'}} key={category.name}>
                    <span style={{color:category.name===selectedCategroy ? 'white' : 'red', marginRight: '20px'}}>{category.icon}</span>
                    <span style={{opacity:category.name === selectedCategroy ? '1' : '0.8'}}>{category.name}</span>
                </button>
            ))
        }
    </Stack>
    </>
  )
 
}

export default Sidebar
