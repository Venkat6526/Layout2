
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";
import Add from "./Components/Add";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import SidebarDrawer from "./Components/SidebarDrawer";
import './App.css'

function App() {
  const [mode,setMode]=useState("light")
  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
 <Box bgcolor={"background.default"} color={"text.primary"}>
       <Navbar  setMode={setMode} mode={mode}/>
      {/* box is acting like a div in material ui */}
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        {/* stack is working display flux  of components */}
        <Sidebar setMode={setMode} mode={mode}/>
       {/* <SidebarDrawer setMode={setMode} mode={mode}/> */}
        <Feed />
        <Rightbar />
      
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
   
  );
}

export default App;
