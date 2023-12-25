import "../styles/Details.css";

export default function Details(props) {
    const {
      salary,
      handleSetSalary,
      salaryType,
      handleSetSalaryType,
      jobType,
      handleSetJobType,
      experience,
      handleSetExperience,
      companyName,
      handleSetCompanyName,
      companyWebsite,
      handleSetCompanyWebsite,
    } = props;
  
    return (
      <div>
        <div className="createajobContainer">
          <div className="d-flex align-items-center mb-3">
            <div className="createajobCircle d-flex align-items-center justify-content-center rounded-circle text-white">
              03
            </div>
            <h5 className="m-0 mx-3">Details</h5>
          </div>
  
          <div className="my-2">
            <div>
              <p className="createajobText mt-5">Details</p>
              <hr />
            </div>
  
            <div className="d-flex align-items-center gap-2">
              <div className="detailFlex">
                <label className="createajobText my-2">Salary</label>
                <div className="input-group">
                  <span className="input-group-text">$</span>
                  <input
                    onChange={({ target }) => handleSetSalary(target.value)}
                    type="text"
                    className="form-control"
                    placeholder={salary}
                  />
                </div>
              </div>
  
              <div className="detailFlex">
                <label className="createajobText my-2">Salary Pricing</label>
                <select
                  value={salaryType}
                  onChange={({ target }) => handleSetSalaryType(target.value)}
                  name=""
                  id=""
                  className="form-select"
                >
                  <option value="hourly">Hourly Rate</option>
                  <option value="monthly">Fixed Salary (monthly)</option>
                  <option value="annually">Fixed Salary (annually)</option>
                </select>
              </div>
            </div>
  
            <div className="d-flex align-items-center gap-2">
              <div className="detailFlex">
                <label className="createajobText my-2">Job Type</label>
                <select
                  onChange={({ target }) => handleSetJobType(target.value)}
                  value={jobType}
                  name=""
                  id=""
                  className="form-select"
                >
                  <option value="part-time">Part-time</option>
                  <option value="full-time">Full-time</option>
                  <option value="internship">Internship</option>
                  <option value="contract">Contract</option>
                </select>
              </div>
  
              <div className="detailFlex">
                <label className="createajobText my-2">Experience</label>
                <select
                  onChange={({ target }) => handleSetExperience(target.value)}
                  value={experience}
                  name=""
                  id=""
                  className="form-select"
                >
                  <option value="high-school-degree">
                    High school deploma or equivalent
                  </option>
                  <option value="associate-degree">Associate's degree</option>
                  <option value="bechelor-degree">Bechelor's degree</option>
                  <option value="master-degree">Master's degree</option>
                </select>
              </div>
            </div>
          </div>
  
          <div className="my-2 mb-4">
            <div>
              <p className="createajobText mt-5">Company Details</p>
              <hr />
            </div>
  
            <div className="d-flex align-items-center gap-2">
              <div className="detailFlex">
                <label className="createajobText my-2">Company Name</label>
                <input
                  onChange={({ target }) => handleSetCompanyName(target.value)}
                  type="text"
                  className="form-control"
                  placeholder={`${companyName ? companyName : "Campany name"}`}
                />
              </div>
  
              <div className="detailFlex">
                <label className="createajobText my-2">Company Website</label>
                <input
                  onChange={({ target }) => handleSetCompanyWebsite(target.value)}
                  type="url"
                  className="form-control"
                  placeholder={`${
                    companyWebsite ? companyWebsite : "Campany website"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  