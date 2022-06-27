import React from "react";
import { Box ,Typography } from "@mui/material";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar1 from "./images/avatar1.jpg";
import Avatar2 from "./images/avatar2.jpg";
import Avatar3 from "./images/avatar3.jpg";
import Avatar4 from "./images/avatar4.jpg";



const Rightbar = () => {
  return (
    <Box
      bgcolor={"lightcoral"}
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box sx={{ position: "fixed" }}>
        <Typography variant="h6" fontWeight="300">
          Online Friends
        </Typography>

        <AvatarGroup total={7}>
          <Avatar alt="Remy Sharp" src={Avatar1} />
          <Avatar alt="Travis Howard" src={Avatar2} />
          <Avatar alt="Agnes Walker" src={Avatar3} />
          <Avatar alt="Trevor Henderson" src={Avatar4} />
        </AvatarGroup>

        <Typography variant="h6" fontWeight="300">
          Latest Photos
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
