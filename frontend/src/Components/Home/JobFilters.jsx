import SalarySlider from "./SalarySlider";
const JobFilters = ({
  onSearchChange,
  onLocationChange,
  onJobTypeChange,
  onSalaryChange,
}) => {
  return (
    <div className="search-filter mt-10 flex justify-around shadow-sm py-4">
      <div className="p-5">
        <div className="flex space-x-5">
          <img src="/img/search.svg" />
          <input
            type="text"
            className="border-none outline-none"
            placeholder="Search By Job Title, Role"
            onChange={onSearchChange}
          />
        </div>
      </div>

      <div className="p-5">
        <div className="flex space-x-5">
          <img src="/img/Location.svg" />
          <select onChange={onLocationChange}>
            <option value="">Preferred Location</option>
            <option value="delhi">Hyderabad</option>
            <option value="bangalore">Bangalore</option>
            <option value="chennai">Chennai</option>
          </select>
        </div>
      </div>

      <div className="p-5">
        <div className="flex space-x-5">
          <img src="/img/Job.svg" />
          <select onChange={onJobTypeChange}>
            <option value="">Job type</option>
            <option value="fulltime">Full-Time</option>
            <option value="parttime">Part-Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
      </div>

      <div>
        <SalarySlider onSalaryChange={onSalaryChange} />
      </div>
    </div>
  );
};

export default JobFilters;