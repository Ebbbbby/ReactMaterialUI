import React from 'react'
import {Box} from '@mui/material'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleTwoToneIcon from "@mui/icons-material/PeopleTwoTone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Switch from "@mui/material/Switch";
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Sidebar = ({mode, setMode}) => {
  return (
    <Box
      bgcolor={"#FF5F1F"}
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" }, padding: "0 20px 0 20px" }}
    >
      <Box sx={{ position: "fixed" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#Pages">
              <ListItemIcon>
                <AutoStoriesIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <GroupIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketplace">
              <ListItemIcon>
                <StorefrontIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <PeopleTwoToneIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountBoxIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <ModeNightIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode=="light"? "dark":"light")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar