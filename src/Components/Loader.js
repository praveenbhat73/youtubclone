import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () =>  {
  return(
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='100vh' color="gray" fontSize="25px">
      <span style={{color:'white' ,fontSize:'30px' ,textTransform:'uppercase'}}>Loading.....!Its Taking Time</span>
      <CircularProgress />
    </Stack>
  </Box>
 
);
}

export default Loader;