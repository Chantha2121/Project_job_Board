import { useState,useEffect } from "react";
import JobCard from "../components/JobCard";
import Map from "../components/MapBanner"
export default function Home(){
	const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3001/jobs");
    const jobs = await res.json();

    setJobs(jobs);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return(
		<>
		 <div><Map/></div>
		 <div> <JobCard jobs={jobs}/></div>
		</>
	);
}