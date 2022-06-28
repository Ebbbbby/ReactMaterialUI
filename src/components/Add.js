import React, {useState} from 'react'

import { Tooltip, Fab, Typography, Modal } from '@mui/material';
import {Box} from "@mui/system"
import AddIcon from "@mui/icons-material/Add";


const Add = () => {
    const [open , setOpen] =useState(false)
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add comment"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25)", md: 30 },
        }}
      >
        <Fab color="dark" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
       hello
        </Box>
      </Modal>
    </>
  );
}

export default Add