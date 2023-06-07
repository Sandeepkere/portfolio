import {
  Box, Grid, List, ListItem, ListItemText, Stack,
} from '@mui/material';
import React from 'react';
import chopperGif from '../images/chopper_gif_3.gif';
import { Item } from '../style/styled';

function Home() {
  return (
    <Stack spacing={10}>
      <Box>
        <Box sx={{ typography: 'h5' }}>👋 Hi  </Box>
        <Item sx={{ padding: '20px' }}>
          <Box sx={{ typography: 'body1' }}>
            as a App Developer,IOT Developer, Cyber Security Enthusiast and Digital Marketer based in Bengaluru and recent Post Graduate
            of Master of Computer Applications with specialization of Networking from PES University,
            I specialize in building Android Application with
            {' '}
            <b>Flutter</b>
            {' '}
            and developing sophisticated
            {' '}
            <b>IOT</b>
            {' '}
            Projects.
            <br />
            <br />
            i&apos;m particularly passionate about IOT and
            Network Security, dedicating most of my time to furthering my
            knowledge in it.

            <br />
            <br />
            my inbox is always open so feel free to contact me whenever :)
          </Box>
        </Item>
      </Box>
      <Box flexDirection="column">
        <Box>
          <Box sx={{ typography: 'h5' }}> 💻 I&apos;m currently ...  </Box>
          <Item sx={{ padding: '20px', paddingRight: '50px' }}>
            <Grid container spacing={1.5}>
              <Grid item xs={7}>
                <Box sx={{ typography: 'body1' }}>
                  <List sx={{ listStyleType: 'disc', pl: 4 }}>
                    <ListItem sx={{ display: 'list-item', listStyleType: '-', pl: 1 }}>
                      <ListItemText
                        primary="Working as CTO for New You Solutions, Bengaluru Based Training and Development Startup"
                      />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: '-', pl: 1 }}>
                      <ListItemText
                        primary="Learning Network Security and Digital Marketing"
                      />
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: '-', pl: 1 }}>
                      <ListItemText
                        primary="Doing small research projects"
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box sx={{ textAlign: 'right' }}>
                  <img src={chopperGif} alt="chopper gif" width="35%" />
                </Box>
              </Grid>
            </Grid>
          </Item>
        </Box>
      </Box>
    </Stack>
  );
}

export default Home;
