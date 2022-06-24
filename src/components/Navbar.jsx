import React from "react";
import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import YardIcon from "@mui/icons-material/Yard";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
}));
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <StyledToolBar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            NATURe
          </Typography>
          <YardIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>search</Search>
        </StyledToolBar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
