import React from 'react'
import {  Box ,} from "@mui/material";
import Posts from './Posts';


function Feed() {
  return (
    <Box bgcolor={"green"} flex={4} p={2} >
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
    </Box>
    // p is padding sx is internal css
  )
}

export default Feed