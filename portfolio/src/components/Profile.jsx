import {
  Box, IconButton, Button, Stack,
} from '@mui/material';
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import pic from '../images/sandeep.png';
import { ProfileArea } from '../style/styled';

function Profile() {
  return (
    <ProfileArea spacing={2}>
      <Stack spacing={1}>
        <Box sx={{ typography: 'h4' }}>Sandeep Kere</Box>
        <Box>
          <img
            style={{ width: '50%', height: 'auto' }}
            src={pic}
            alt="profile-img"
          />
        </Box>

        <Stack direction="row" justifyContent="center" spacing={1}>
          <IconButton
            variant="contained"
            aria-label="linkedin link"
            href="https://www.linkedin.com/in/sandeep-k-3987a6179/"
            target="__blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color="white" />
          </IconButton>
          <IconButton
            variant="contained"
            aria-label="github link"
            href="https://github.com/Sandeepkere"
            target="__blank"
            rel="noopener noreferrer"
          >
            <FaGithub color="white" />
          </IconButton>
          <IconButton
            variant="contained"
            aria-label="email"
            href="mailto:sandeepkere651@gmail.com"
            rel="noopener noreferrer"
          >
            <FaEnvelope color="white" />
          </IconButton>
        </Stack>
        <Box padding="15px">
          <Button
            variant="contained"
            color="secondary"
            href="https://drive.google.com/file/d/13FYuo4VBJ6iP-MNEfHva2EmjouOPlMpN/view?usp=sharing"
            target="__blank"
            rel="noopener noreferrer"
          >
            Resume
          </Button>
        </Box>
      </Stack>
    </ProfileArea>
  );
}

export default Profile;
