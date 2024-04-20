import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

type BasicRatingProps = {
  v: number
  fixed?: boolean
}

export const BasicRating:React.FC<BasicRatingProps> = ({v, fixed = false}) => {
  const [value, setValue] = React.useState<number | null>(v);
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) =>setValue(newValue)}
        size='small'
        readOnly={fixed}
      />
    </Box>
  );
}