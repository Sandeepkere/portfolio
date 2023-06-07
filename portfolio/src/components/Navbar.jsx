import { Grid, Box } from '@mui/material';
import React from 'react';
import { ModeButton, Nav, NavLink } from '../style/styled';

function Navbar(props) {
  // eslint-disable-next-line react/prop-types
  const { colorMode, theme, mode } = props;

  return (
    <Grid container alignItems="center">
      <Grid item xs={10}>
        <Nav>
          <Box display="flex" flexDirection="row" gap={4}>
            <NavLink toProp="/" buttonText="Home" />
            <NavLink toProp="/about" buttonText="About" />
            <NavLink toProp="/experience" buttonText="Experience" />
            <NavLink toProp="/projects" buttonText="Projects" />
            {/* <NavLink toProp="/extra" buttonText="Extra" /> */}
          </Box>
        </Nav>
      </Grid>
      <Grid item xs={2}>
        <ModeButton colorMode={colorMode} theme={theme} mode={mode} />
      </Grid>
    </Grid>
  );
}

export default Navbar;
