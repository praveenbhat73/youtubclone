import React from 'react';
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () =>  {
  const { searchTerm } = useParams();
  return(
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='100vh' color="gray" fontSize="25px">
      <span style={{color:'white' ,fontSize:'30px' ,textTransform:'uppercase'}}>
    { 
      searchTerm?
      (<h1>Searching Results for {searchTerm}</h1>)
      :
      (
        <h1>Loading.....</h1>
      )
  } 
    </span>
      <CircularProgress />
    </Stack>
  </Box>
 
);
}

export default Loader;
