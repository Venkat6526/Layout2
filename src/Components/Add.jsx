import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
 
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,

  VideoCameraBack,
} from "@mui/icons-material";
import Modal from '@mui/material/Modal';

const StyledModal = styled(Modal)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const UserBox = styled(Modal)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
}));

function Add() {
  const [open, setOpen] = useState(false);

  return (
    <>
    
      <Tooltip
        title="Add"
        
        sx={{
            
          position:"fixed",  bottom: 20,
          left: { xs: "calc(50%-25px)"},md:30
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" sx={{ marginRight: "5px" }} aria-label="add">
          <AddIcon />
        </Fab>
       
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        
        <Box
       
        width={400}
        height={300}
        bgcolor={"background.default"} color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color={"gray"} textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
          <Box>
          <Avatar
              alt="Remy Sharp"
              sx={{ width: "30", height: "30" }}
              src="https://img.freepik.com/free-vector/man-with-mustache_1308-83591.jpg?w=740&t=st=1710852795~exp=1710853395~hmac=73e9ef4ce26f4470475f125c62db838ab38e39fac28538a3c80ce3475890835f"
            />
            <Typography variant="span" fontWeight={"500"}>
              {" "}
              John
            </Typography>
          </Box>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            label="Multiline"
            sx={{width:"100%"}}
            multiline
            rows={3}
            placeholder="What's On Your Mind"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />

            {/* <EmojiEmotions/>
            <EmojiEmotions/>
            <EmojiEmotions/>
            <EmojiEmotions/> */}
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100%" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
  
      </StyledModal>
      
    </>
  );
}

export default Add;
