import React from "react";
import { formatDistanceToNow } from "date-fns";

function formatToLPA(salary) {
  if (!salary) return "";
  return `${(salary / 100000).toFixed(1)} LPA`;
}

const JobCard = ({ job }) => {
  return (
    <div className="my-4 w-[316px] h-[360px] me-5 shadow-md rounded-[12px] bg-white p-5 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div className="w-[83px] h-[82px] bg-white shadow rounded-[13px] flex items-center justify-center">
          <img
            src={`https://logo.clearbit.com/${job.company}.com`}
            alt="Company logo"
            className="w-[65px] h-[65px] rounded-full"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRdca4id8aW02SQNJovpX6bxZR8yiIlGm1OVXAy1gQKtync9yGqtjUHvkJeQy5QLfwHiTxnGPZK8XLrlyVM-uc8weTAksnOWpQX0YqCzp1gMK_btwBAk_ppKRtubK8mSgLt-0bZ3qHq_-NkrQx8Il8XmlFDbZ08IhJLAF6muzXxJVGLxBA83WC0QINE7E/s46/logo.png";
            }}
          />
        </div>
        <div className="bg-[#B0D9FF] text-[#000] px-3 py-1 rounded-[10px] text-sm font-medium">
          {formatDistanceToNow(new Date(job.createdAt), { addSuffix: true })}
        </div>
      </div>
      <h1 className="text-[20px] font-semibold text-[#1D1D1D] mt-2">{job.title}</h1>
      <div className="font-[500] flex gap-4 mt-1 text-sm text-[#5A5A5A]">
        <div className="flex items-center gap-1">
          <img src="/img/exp.svg" alt="Exp" className="w-4 h-4" />
          <span>{job.experience}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/img/onsite.svg" alt="Onsite" className="w-4 h-4" />
          <span>{job.mode}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/img/package.svg" alt="Package" className="w-4 h-4" />
          <span>{formatToLPA(job.maxsalary)}</span>
        </div>
      </div>
      <ul className="font-[500] text-[13px] text-[#555555] mt-2 list-disc pl-5 leading-[18px]">
        <li>{job.description}</li>
      </ul>
      <button className="bg-[#00A5FF] hover:bg-[#008DE0] text-white font-medium rounded-[8px] py-[10px] mt-3">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
