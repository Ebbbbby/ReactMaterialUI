import React from "react";
import { AppBar, Toolbar, styled, Typography,Box, InputBase, Badge} from "@mui/material";
import YardIcon from "@mui/icons-material/Yard";
import Mail from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";


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
display:"flex",
gap:"20px",
alignItems:"center"
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          NATURe
        </Typography>
        <YardIcon sx={{ display: { xs: "block", sm: "none" } }} />
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
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://icon-library.com/images/avatar-icon/avatar-icon-8.jpg"
          />
          <Typography variant = "span">John</Typography>
        </UserBox>
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
