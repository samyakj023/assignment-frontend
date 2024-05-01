import React, { useState, useEffect } from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2>{job.jobRole}</h2>
      <p>{job.jobDetailsFromCompany}</p>
      <p>Location: {job.location}</p>
      {/* Add more job details as needed */}
    </div>
  );
};

const MyComponent = () => {
  const [jobDetails, setJobDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(20); // Initial limit

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
        "limit": limit,
        "offset": jobDetails.length
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
      };

      try {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        const result = await response.json();
        setJobDetails(prevJobDetails => [...prevJobDetails, ...(result.jdList || [])]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [limit, jobDetails.length]);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const distanceFromBottom = documentHeight - (windowHeight + scrollTop);
    if (distanceFromBottom < 100 && !loading) {
      setLimit(prevLimit => prevLimit + 20);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      <div className="job-list">
        {jobDetails.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default MyComponent;








