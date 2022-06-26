import {React, useState} from "react";
import { AppBar, Toolbar, styled, Typography,Box, InputBase, Badge,Menu} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Mail from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";


const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"40%"
}));

const Icons = styled(Box)(({ theme }) =>  ({
display:"none",
gap:"20px",
alignItems:"center",
[theme.breakpoints.up("sm")] :{
  display:"flex"

}
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")] :{
  display:"none",
}
}));

const Navbar = () => {
  const [open , setOpen]= useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          FOODIe.
        </Typography>
        <FastfoodIcon sx={{ display: { xs: "block", sm: "none",color: "orange"} }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://icon-library.com/images/avatar-icon/avatar-icon-8.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://icon-library.com/images/avatar-icon/avatar-icon-8.jpg"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
