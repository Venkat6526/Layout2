import { Box, List, ListItem, ListItemButton, ListItemIcon, Switch } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


function SidebarDrawer({mode,setMode}) {
  return (
 
      <Box  flex={2}  sx={{ display: { xs: "block", sm: "none" } }}>
      <Box position={"fixed"}>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='/'>
                <HomeIcon />
              </ListItemIcon>
              
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#Pages'>
                <ArticleIcon />
              </ListItemIcon>
             
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#Groups'>
                <GroupsIcon />
              </ListItemIcon>
             
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#Markets'>
                <StorefrontIcon />
              </ListItemIcon>
             
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#Friends'>
                <PersonIcon />
              </ListItemIcon>
             
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#Settings'>
                <SettingsIcon />
              </ListItemIcon>
             
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#Profile'>
                <AccountBoxIcon />
              </ListItemIcon>
              
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              
              <Switch onChange={(e)=>setMode(mode==="light"?"dark":"light")}/>
             
            </ListItemButton>
          </ListItem>
          </List>
      </Box>
      
    </Box>
  
  )
}

export default SidebarDrawer