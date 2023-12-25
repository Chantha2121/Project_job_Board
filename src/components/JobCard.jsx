import {Link} from "react-router-dom";
import {QRCodeSVG} from 'qrcode.react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "../styles/JobCardStyle.css";

export default function JobCard(props){
  const {jobs}=props;	

  return (
    <>
        <div className="container-fluid mt-5">
            <ul className="jobcardRow row">
                {jobs.length > 0 &&
                    jobs.map((job) => (
                        <li
                            className="col-sm-6 col-md-4 col-lg-3 list-unstyled mt-4"
                            key={job.id}
                        >
                            <div className="position-relative">
                                <Link
                                    to={`/job-details/${job.id}`}
                                    className="jobtitle text-decoration-none"
                                >
                                    <img
                                        className="jobcardImg rounded-top shadow-sm"
                                        src={require(`../assets/${job.logoUrl}`)}
                                        alt="job_show"
                                    />
                                </Link>
                                {job.featured && (
                                    <div className="jobcardLabel text-center position-absolute">
                                        <div className="jobcardFeatured text-white rounded-top">
                                            Featured
                                        </div>
                                        <div className="arrow-top-right position-absolute end-0"></div>
                                    </div>
                                )}
                            </div>

                            <div className="pt-2 p-3 border shadow">
                                <p className="text-secondary m-0">{job.category}</p>
                                <Link
                                    to={`/job-details/${job.id}`}
                                    className="jobtitle text-decoration-none text-black"
                                >
                                    {job.title}
                                </Link>
                                <div className="d-flex align-items-center justify-content-between mt-3 mb-1">
                                    <p className="m-0">{job.address.city}</p>
                                    <p className="jobtype text-white rounded m-0">
                                        {job.jobType}
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center justify-content-between p-2 border bg-white shadow rounded-bottom">
                                <div className="d-flex">
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={
                                            <Tooltip id="button-tooltip">
                                                <QRCodeSVG
                                                    value={job.companyWebsite}
                                                    className="qrcodebg mt-3"
                                                />
                                                <p className="mt-3">Please scan the QRCode to detail</p>
                                            </Tooltip>
                                        }
                                    >
                                        <Button className="bg-white text-black border-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="qrcode w-6 h-6 mx-2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"
                                                />
                                            </svg>
                                        </Button>
                                    </OverlayTrigger>

                                    {job.isLike ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="likebtn"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            className="likebtn"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
                                            />
                                        </svg>
                                    )}
                                </div>

                                <div className="jobsalary">
                                    ${job.salary}
                                    <span> </span>
                                    <span className="jobsalaryextra">
                                        {job.salaryType === "annualy"
                                            ? "P.A"
                                            : job.salaryType === "monthly"
                                                ? "P.H"
                                                : "P.H"}
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    </>
)
}