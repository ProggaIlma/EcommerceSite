import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default function TextRating() {
  const value = 3.5;

  return (
    <Box sx={{  display: 'flex', alignItems: 'center' }}>
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        size="small"
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
        <Typography sx={{color:"#9e9e9e",fontSize:"12px"}}>(200)</Typography>
    </Box>
  );
}
