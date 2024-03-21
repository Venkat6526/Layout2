// import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography, InputBase, Badge, Avatar, MenuItem, Menu, Switch, Box } from "@mui/material";
import React from "react";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Mail from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import {styled} from "@mui/material/styles"
import { useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';



function Navbar({mode,setMode}) {

  const [open ,setOpen]=useState(false)
  const [open1 ,setOpen1]=useState(false)

  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "4px",
    width: "40%",
  }));
  const Icons = styled("Box")(({ theme }) => ({
    // backgroundColor:"white"
    display:"none",
    gap:"20px",
    alignItems:"center",
    "&:hover": {                 //icons and avatar and notification display on tab and computer
      color: "red",
    },
    [theme.breakpoints.up("sm")]:{
      display:"flex "
    }
  }));
  const UserBox = styled("Box")(({ theme }) => ({
    // backgroundColor:"white"
    display:"flex", 
    gap:"20px",
    alignItems:"center",
    "&:hover": {
      color: "red",
    },
    [theme.breakpoints.up("sm")]:{
      display:"none " //responsive design of navbar user name and avatar display on mobile only
    }
  }));
  const handleClose=()=>{
    setOpen(false)
  }
  const handleClose1=()=>{
    setOpen1(false)
  }
  const handleMainNav=()=>{
    setOpen1(true)
  }
  return (
    // for navbar use appbar in material ui
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Template
        </Typography>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <LogoDevIcon  sx={{ display: { xs: "block", sm: "none" },marginRight:"10px" }} />
        <DehazeIcon sx={{ display: { xs: "block", sm: "none" } }} onClick={(e)=>handleMainNav()}/>
        </Box>
       
        <Search sx={{ display: { xs: "none", sm: "block" } }}>
          <InputBase placeholder="Search....." />
        </Search>
        <Icons >
          <Badge badgeContent={4} color="error">
            <Mail  />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" sx={{width:"30",height:"30"}} src="https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?w=740&t=st=1710852795~exp=1710853395~hmac=73e9ef4ce26f4470475f125c62db838ab38e39fac28538a3c80ce3475890835f" onClick={(e)=>setOpen(true)} />
        </Icons>
        <UserBox onClick={(e)=>setOpen(true)} >
         <Avatar alt="Remy Sharp" sx={{width:"30",height:"30"}} src="https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?w=740&t=st=1710852795~exp=1710853395~hmac=73e9ef4ce26f4470475f125c62db838ab38e39fac28538a3c80ce3475890835f" />
          <Typography variant="span">John</Typography>
        </UserBox>
       
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open1}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem > <HomeIcon title="Home"/></MenuItem>
        <MenuItem><ArticleIcon /></MenuItem>
        <MenuItem ><GroupsIcon /></MenuItem>
        <MenuItem ><StorefrontIcon /></MenuItem>
        <MenuItem ><PersonIcon /></MenuItem>
        <MenuItem ><SettingsIcon /></MenuItem>
        <MenuItem ><Switch onChange={(e)=>setMode(mode==="light"?"dark":"light")}/> </MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
