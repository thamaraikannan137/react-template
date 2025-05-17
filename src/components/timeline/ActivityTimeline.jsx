// MUI Imports
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import MuiTimeline from '@mui/lab/Timeline';
import { styled } from '@mui/material/styles';

// Styled Timeline component
const Timeline = styled(MuiTimeline)({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
});

const activities = [
  {
    title: 'Client Meeting',
    time: '1 hour ago',
    subtitle: 'Project discussion with John',
    color: 'primary',
    icon: 'bx-calendar'
  },
  {
    title: 'Create a new project',
    time: '3 hours ago',
    subtitle: 'New dashboard for client',
    color: 'success',
    icon: 'bx-file'
  },
  {
    title: 'Project Deployment',
    time: '5 hours ago',
    subtitle: 'Deploy to production server',
    color: 'info',
    icon: 'bx-server'
  },
  {
    title: 'Team Meeting',
    time: '6 hours ago',
    subtitle: 'Sprint planning and updates',
    color: 'warning',
    icon: 'bx-group'
  }
];

const ActivityTimeline = () => {
  return (
    <Timeline>
      {activities.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color={item.color}>
              <i className={`bx ${item.icon}`} style={{ fontSize: '1.25rem' }} />
            </TimelineDot>
            {index !== activities.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="body2" sx={{ mr: 2, fontWeight: 600, color: 'text.primary' }}>
                {item.title}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {item.time}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.subtitle}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ActivityTimeline; 