import { Box, Stack } from '@mui/material';
import React from 'react';
import { CustomCard, Item, SkillsList } from '../style/styled';
import uOLogo from '../images/PESU-new-logo.png';

function About() {
  return (
    <Stack spacing={4}>
      <Box>
        <Box sx={{ typography: 'h5' }}>🎯 Skills </Box>
        <Item sx={{ padding: '20px' }}>
          <Stack spacing={1}>
            <Box>
              <Box sx={{ typography: 'h6' }}>Languages:</Box>
              <SkillsList
                skills={[
                  'Python',
                  'Flutter',
                  'PHP',
                  'C/C++',
                  'Java',
                ]}
              />
            </Box>
            <Box>
              <Box sx={{ typography: 'h6' }}>Frameworks:</Box>
              <SkillsList skills={['Laravel','Node.js']} />
            </Box>
            <Box>
              <Box sx={{ typography: 'h6' }}>Developer Tools:</Box>
              <SkillsList
                skills={[
                  'Git',
                  'Docker',
                  'PostgreSQL',
                  'Kubernetes',
                  'AWS EC2',
                ]}
              />
            </Box>
            <Box>
              <Box sx={{ typography: 'h6' }}>Libraries:</Box>
              <SkillsList skills={['Pandas', 'NumPy', 'Matplotlib', 'scikit-learn']} />
            </Box>
          </Stack>
        </Item>
      </Box>
      <Box>
        <Box sx={{ typography: 'h5' }}> 🎓 Education ‍</Box>
        <CustomCard
          mainTitle="PES University"
          date="Nov 2021 – June 2023"
          secondaryTitle="Master of Computer Applications in Networking"
          location="Bengaluru, ON"
          plainDescription={[
            <b>Certification Courses: </b>,
            'Advance Program in Ethical Hacking and Cyber security,Diploma in Information Technology,Databases,Essential 101: Certification Program in Cyber Security',
          ]}
          logo={uOLogo}
          logoAlt="uOttawa Logo"
        />
      </Box>
    </Stack>
  );
}

export default About;
