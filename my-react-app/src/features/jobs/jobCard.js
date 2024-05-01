// src/features/jobs/JobCard.js
import { Card, CardContent, Typography, Button } from '@material-ui/core';

const JobCard = ({ job }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{job.title}</Typography>
      <Typography variant="subtitle1">{job.company}</Typography>
      <Typography variant="body2">{job.location}</Typography>
      <Typography variant="body1">{job.description}</Typography>
      <Button variant="contained" color="primary">Apply</Button>
    </CardContent>
  </Card>
);
