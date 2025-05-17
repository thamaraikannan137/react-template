// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';

// Third-party Imports
import classnames from 'classnames';

const StatisticsCard = ({ title, stats, icon, trend, trendDir, subtitle }) => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
          <Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              {title}
            </Typography>
            <Typography variant="h4">{stats}</Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.12),
              color: 'primary.main'
            }}
          >
            <i className={`bx ${icon}`} style={{ fontSize: '1.75rem' }} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="span"
            sx={{
              mr: 1,
              display: 'flex',
              alignItems: 'center',
              color: trendDir === 'up' ? 'success.main' : 'error.main'
            }}
          >
            <i
              className={classnames('bx', {
                'bx-chevron-up': trendDir === 'up',
                'bx-chevron-down': trendDir === 'down'
              })}
            />
            <Typography variant="body2" sx={{ color: 'inherit' }}>
              {trend}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {subtitle}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard; 