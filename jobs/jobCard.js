import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-details">
        <h2>{job.jobRole}</h2>
        <p>{job.jobDetailsFromCompany}</p>
        <p>Location: {job.location}</p>
        <p>Posted: {job.posted}</p>
        <p>Estimated Salary: {job.estimatedSalary}</p>
        <p>About Company: {job.aboutCompany}</p>
        <p>About Role: {job.aboutRole}</p>
        <button>Show more</button>
        <div>Minimum Experience: {job.minExperience}</div>
      </div>
    </div>
  );
};

export default JobCard;

