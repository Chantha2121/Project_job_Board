import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import JobDetail from "../components/JobDetail";
import JobCard from "../components/JobCard";
import "../styles/JobDetails.css";
function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    //fetch all data
    const res = await fetch("http://localhost:3001/jobs");
    //fetch by id
    const response = await fetch(`http://localhost:3001/jobs/${id}`);
    const jobs = await res.json();
    const job = await response.json();

    setJob(job);
    setJobs(jobs);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateJob = async () => {
    await fetch(`http://localhost:3001/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...job, featured: true }),
    });

    fetchData();
  };

  return (
    <div>
      {job && (
        <div className="jobDetailsContainer">
          <div>
            <Link to="/" className="btn btn-secondary mb-4">
              Back to Home
            </Link>
            <p className="bg-danger-subtle py-3 px-4 rounded shadow-sm">
              {job.category}
            </p>
          </div>

          <div>
            <JobDetail job={job} handleUpdateJob={handleUpdateJob} />
          </div>

          <div>
            <div>
              <h2>Recommended for you</h2>
              <JobCard jobs={jobs} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobDetails;



