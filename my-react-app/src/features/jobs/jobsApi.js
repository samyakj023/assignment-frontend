// src/features/jobs/jobsAPI.js
const fetchJobs = async (limit, offset) => {
    const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ limit, offset })
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }
    return response.json();
  };
  