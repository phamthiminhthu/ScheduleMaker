import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DateRangeIcon from '@mui/icons-material/DateRange';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Typography from '@mui/material/Typography';
import {Container, Row} from 'react-bootstrap';
import demo from '../../../assets/footer-bg.jpeg'

export default function MyScheduleDemo() {
    return (
       <div className="details-my-schedule-demo-image margin-items">
            <div className="bg-light">
            <Container>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            My Schedule
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                            <TimelineDot color="primary">
                               <DateRangeIcon ></DateRangeIcon>
                            </TimelineDot>
                            <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                               <img src={demo} style={{'width':'700px', 'height': '400px'}}></img>
                            </Typography>
    
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                           Create Schedule
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                            <TimelineDot color="secondary">
                                <NoteAddIcon/>
                            </TimelineDot>
                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                            <img src={demo} style={{'width':'700px', 'height': '400px'}}></img>
                            </Typography>
                          
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

            </Container>
        </div>
       </div>
    );
}