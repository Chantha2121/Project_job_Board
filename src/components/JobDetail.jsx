import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function JobDetail(props) {
  const { job, handleUpdateJob } = props;

  return (
    <div className="d-flex flex-row gap-4">
      <div className="jobDetailFlex">
        <div className="border p-3 rounded shadow-sm mb-4">
          <div className="border p-3 mb-3 rounded shadow-sm d-flex align-items-center justify-content-between">
            <h5>Description</h5>
            {job.featured ? (
              <button className="btn btn-primary">Checked Verify</button>
            ) : (
              <button onClick={handleUpdateJob} className="btn btn-success">
                Verify
              </button>
            )}
          </div>

          <div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                consequatur veniam, odio quia rem saepe et repellat itaque ipsam
                praesentium harum eligendi, temporibus voluptate unde quaerat
                sequi fuga. Quae, consectetur.
              </p>
              <h5>Responsibility</h5>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                consequatur veniam, odio quia rem saepe et repellat itaque ipsam
                praesentium harum eligendi, temporibus voluptate unde quaerat
                sequi fuga. Quae, consectetur.
              </p>
              <h5>Qualification</h5>
            </div>
          </div>
        </div>

        <div className="border p-2 rounded shadow-sm d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 jobDetailIcon teal-color"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <div>
              <p className="m-0 jobDetailFont">Employer details</p>
              <p className="m-0">Lorem ipsum dolor sit amet consectetur</p>
              <p className="m-0">Lorem ipsum dolor sit amet consectetur</p>
              <p className="m-0 jobDetailFont">Channa, 3 days ago</p>
            </div>
          </div>
          <button className="btn btn-success">Message</button>
        </div>
      </div>

      <div className="jobDetailFlex">
        <div>
          <h5>{job.title}</h5>
          <hr />
        </div>

        <div className="mb-3">
          <button className="w-100 btn btn-success">Apply Now</button>
        </div>

        <div className="border shadow-sm p-4 rounded mb-3">
          <div className="d-flex align-items-center justify-content-between">
            <p>salary</p>
            <p>${job.salary}</p>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <p>Country</p>
            <p>{job.address.country}</p>
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <p className="m-0">City</p>
            <p className="m-0">{job.address.city}</p>
          </div>
        </div>

        <div className="shadow-sm mb-3">
          <p className="border p-2 m-0 rounded ">Location</p>
          <p className="border p-2 m-0 rounded ">
            {job.address.city}, {job.address.country}
          </p>
        </div>

        <div className="border p-4 rounded shadow-sm">
          <p>Share these links via:</p>
          <ul className="list-unstyled d-flex gap-4">
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faYoutube} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTiktok} />
            </li>
          </ul>
          <p>Or Copylink: </p>
          <div>
            <p>{job.companyWebsite}</p>
            <button
              className="btn btn-primary"
              onClick={() => navigator.clipboard.writeText(job.companyWebsite)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
