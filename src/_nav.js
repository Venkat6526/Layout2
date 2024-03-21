import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Brightness3Icon from '@mui/icons-material/Brightness3';

const Data =[
    {
      url:'#',
      title:"Home",
      icon:<HomeIcon/>
  
    },
    {
      url:'#',
      title:"Pages",
      icon:  <ArticleIcon />
  
    },
    {
      url:'#',
      title:"Groups",
      icon:<GroupsIcon />,
      subMenu:[
      
        {
          name: "Whats App",
          url: "/whatsApp",
          icon: "icon-user-following",
        },
        {
          name: "Bulk WhatsApp",
          url: "/BulkwhatsApp",
          icon: "icon-user-following",
        },
        
      ]
    },
    {
      url:'#',
      title:"Markets",
      icon:<StorefrontIcon />
  
    },
    {
      url:'#',
      title:"Friends",
      icon:<PersonIcon />
  
    },
    {
      url:'#',
      title:"Settings",
      icon:<SettingsIcon />
  
    },
    {
      url:'#',
      title:"Profile",
      icon:<AccountBoxIcon />
  
    },
  ]

 export default Data;