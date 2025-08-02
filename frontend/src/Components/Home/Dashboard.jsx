import React, { useEffect, useState } from "react";
import axios from "axios";
import JobFilters from "./JobFilters.jsx";
import JobCard from "./JobCard.jsx";

function Dashboard() {
  const [jobData, setJobData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [salaryRange, setSalaryRange] = useState([0, 0]);

  useEffect(() => {
    axios
      .get("https://job-management-admin-interface-backend.onrender.com/jobs")
      .then((res) => setJobData(res.data))
      .catch((e) => console.log("Unable to fetch jobs ", e));
  }, []);

  const filteredJobs = jobData.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(searchQuery);
    const locationMatch = locationFilter
      ? job.location?.toLowerCase() === locationFilter
      : true;
    const jobTypeMatch = jobTypeFilter
      ? job.type?.toLowerCase() === jobTypeFilter
      : true;
    const salaryMatch =
      salaryRange[0] === 0 && salaryRange[1] === 0
        ? true
        : Number(job.maxsalary) >= salaryRange[0] &&
          Number(job.maxsalary) <= salaryRange[1];

    return titleMatch && locationMatch && jobTypeMatch && salaryMatch;
  });

  return (
    <>
      <JobFilters
        onSearchChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        onLocationChange={(e) => setLocationFilter(e.target.value.toLowerCase())}
        onJobTypeChange={(e) => setJobTypeFilter(e.target.value.toLowerCase())}
        onSalaryChange={setSalaryRange}
      />

      <section className="p-5 flex flex-wrap">
        {filteredJobs.length === 0 ? (
          <div className="text-center w-full">
            <p className="text-black font-semibold">No Jobs Found</p>
            <div className="mt-5">
              <a href="/" className="bg-blue-600 text-white p-2 rounded-lg">
                Go Home
              </a>
            </div>
          </div>
        ) : (
          filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
        )}
      </section>
    </>
  );
}

export default Dashboard;
