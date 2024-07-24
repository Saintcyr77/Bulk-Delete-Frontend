import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { progressContext } from './ProgressProvider';
import { useContext } from 'react';


export function LinearProgressWithLabel(props) {
    const {progress} = useContext(progressContext)
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
         progress,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}