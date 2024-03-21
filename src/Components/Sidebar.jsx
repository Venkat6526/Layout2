import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Data from '../_nav'
function Sidebar({mode,setMode}) {
 
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position={"fixed"}>
      {/* <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#home'>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#Pages'>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#Groups'>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#Markets'>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Markets" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#Friends'>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#Settings'>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#Profile'>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#Profile'>
                <Brightness3Icon />
              </ListItemIcon>
              <Switch onChange={(e)=>setMode(mode==="light"?"dark":"light")}/>
             
            </ListItemButton>
          </ListItem>
          </List> */}

        <List>
          {Data.map((a)=>(
            <ListItem sx={{"&:hover":{backgroundColor:"pink",color:"black"},"&:active":{backgroundColor:"pink",color:"black"}}}>
        <ListItemIcon component='a' href={a.url} sx={{"&:hover":{backgroundColor:"pink",color:"black"},"&:active":{backgroundColor:"pink",color:"black"}}}>
               {a.icon}
              </ListItemIcon>
              <ListItemText primary={a.title} />
        </ListItem>
          ))}
        
        <ListItem >
            <ListItemButton>
              {/* <ListItemIcon component='a' href='#Profile'>
                <Brightness3Icon />
              </ListItemIcon> */}
              <Switch onChange={(e)=>setMode(mode==="light"?"dark":"light")}/>
             
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      
    </Box>
  )
}

export default Sidebar