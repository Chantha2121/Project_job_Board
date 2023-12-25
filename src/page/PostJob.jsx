import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateAJob from "../components/CreateAJob";
import Descriptions from "../components/Descriptions";
import Details from "../components/Details";
import Media from "../components/Media";
function PostJob() {
  
  // button Logic save
  const handleSubmit = async () => {
    const job = {
      id: Date.now(),
      title,
      isOwnCompany,
      onBehalfOfOtherCompany,
      category,
      address,
      description,
      keywords,
      salary,
      salaryType,
      jobType,
      experience,
      companyName,
      companyWebsite,
      logoUrl,
      photoUrls,
      featured: false,
    };

    let response = {
      status: null,
    };

    if (
      title &&
      category &&
      keywords.length > 0 &&
      salary &&
      salaryType &&
      jobType &&
      logoUrl
    ) {
      console.log("Working!");
      response = await fetch("http://localhost:3001/jobs", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(job),
      });

      //submitted to database successfully (status code 201)
    }

    console.log(response);

    if (response.status === 201) {
      navigate("/");
    } else {
      setAlertWarning(true);
    }
  };

  let [displayComponent, setDisplayComponent] = useState(0);
  const handleIncreaseComponentIndex = () => {
    displayComponent += 1;
    setDisplayComponent(displayComponent);
  };

  const handleDecreaseComponentIndex = () => {
    displayComponent -= 1;
    setDisplayComponent(displayComponent);
  };

  const navigate = useNavigate();
  const [alertWarning, setAlertWarning] = useState(false);

  //start create a job state
  const [title, setTitle] = useState("");
  const handleSetTitle = (value) => {
    setTitle(value);
  };

  const [isOwnCompany, setIsOwnCompany] = useState(false);
  const toggleOwnCampany = () => {
    setIsOwnCompany(!isOwnCompany);
    setOnBehalf(false);
    setOnBehalfOfOtherCompany("");
  };

  const [onBehalf, setOnBehalf] = useState(false);
  const toggleOnBehalf = () => {
    setOnBehalf(!onBehalf);
    setIsOwnCompany(false);
    setOnBehalfOfOtherCompany("");
  };

  const [onBehalfOfOtherCompany, setOnBehalfOfOtherCompany] = useState("");
  const handleSetOnBehalf = (value) => {
    setOnBehalfOfOtherCompany(value);
  };

  const [category, setCategory] = useState("");
  const handleActiveCategory = ({ target }) => {
    setCategory(target.innerText);
  };

  const handleClearActiveCategory = () => {
    setCategory("");
  };

  const [address, setAddress] = useState({
    country: "Cambodia",
    city: "Phnom Penh",
  });

  const handleSetAddress = (location) => {
    setAddress((prev) => ({ ...prev, ...location }));
  };
  //end create a job state

  //start description state
  const [characterCount, setCharacterCount] = useState(0);
  const calculateCharacterCount = (characterLength) => {
    let maxLen = 200;
    maxLen -= characterLength;
    setCharacterCount(maxLen);
  };
  useEffect(() => {
    setCharacterCount(200);
  }, []);

  const [description, setDescription] = useState(null);
  const handleSetDescription = (value) => {
    setDescription(value);
  };

  const [keywords, setKeywords] = useState([]);
  const handleSetKeywords = (keywords) => {
    keywords = keywords.toLowerCase().split(",");
    setKeywords(keywords);
  };
  //end description state

  //start details state
  let [salary, setSalary] = useState(0);
  const handleSetSalary = (value) => {
    setSalary(value);
  };

  let [salaryType, setSalaryType] = useState("monthly");
  const handleSetSalaryType = (value) => {
    setSalaryType(value);
  };

  let [jobType, setJobType] = useState("full-time");
  const handleSetJobType = (value) => {
    setJobType(value);
  };

  let [experience, setExperience] = useState("bechelor-degree");
  const handleSetExperience = (value) => {
    setExperience(value);
  };

  let [companyName, setCompanyName] = useState("");
  const handleSetCompanyName = (value) => {
    setCompanyName(value);
  };

  let [companyWebsite, setCompanyWebsite] = useState("");
  const handleSetCompanyWebsite = (value) => {
    setCompanyWebsite(value);
  };
  //end details state

  //start media state
  const [logoUrl, setLogoUrl] = useState(null);
  const upLoadLogo = (value) => {
    setLogoUrl(value);
  };

  const [photoUrls, setPhotoUrls] = useState([]);
  const uploadPhoto = (url) => {
    setPhotoUrls((prev) => [...prev, url]);
  };

  const removePhoto = (url) => {
    setPhotoUrls((prev) => prev.filter((photoUrls) => photoUrls !== url));
  };
  //end media state
  return (
    <div>
      <div>
        {alertWarning && (
          <div
            className="alert alert-warning alert-dismissible fade show warningMargin"
            role="alert"
          >
            <strong>Warning</strong> You should check out all of those fields
            below
            <button
              onClick={() => setAlertWarning(false)}
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        <div className="bg-light mb-5 py-4">
          {/* dynamic components */}
          {displayComponent === 0 ? (
            <CreateAJob
              title={title}
              handleSetTitle={handleSetTitle}
              isOwnCompany={isOwnCompany}
              toggleOwnCompany={toggleOwnCampany}
              onBehalf={onBehalf}
              toggleOnBehalf={toggleOnBehalf}
              onBehalfOfOtherCompany={onBehalfOfOtherCompany}
              handleSetOnBehalf={handleSetOnBehalf}
              category={category}
              handleActiveCategory={handleActiveCategory}
              handleClearActiveCategory={handleClearActiveCategory}
              address={address}
              handleSetAddress={handleSetAddress}
            />
          ) : displayComponent === 1 ? (
            <Descriptions
              characterCount={characterCount}
              calculateCharacterCount={calculateCharacterCount}
              description={description}
              handleSetDescription={handleSetDescription}
              keywords={keywords}
              handleSetKeywords={handleSetKeywords}
            />
          ) : displayComponent === 2 ? (
            <Details
              salary={salary}
              handleSetSalary={handleSetSalary}
              salaryType={salaryType}
              handleSetSalaryType={handleSetSalaryType}
              jobType={jobType}
              handleSetJobType={handleSetJobType}
              experience={experience}
              handleSetExperience={handleSetExperience}
              companyName={companyName}
              handleSetCompanyName={handleSetCompanyName}
              companyWebsite={companyWebsite}
              handleSetCompanyWebsite={handleSetCompanyWebsite}
            />
          ) : (
            <Media
              logoUrl={logoUrl}
              upLoadLogo={upLoadLogo}
              photoUrls={photoUrls}
              uploadPhoto={uploadPhoto}
              removePhoto={removePhoto}
            />
          )}

          <div className="postjobBtn mt-2 d-flex align-items-center justify-content-between">
            <div>
              <button
                onClick={handleDecreaseComponentIndex}
                className={`${
                  displayComponent < 1
                    ? "visually-hidden"
                    : "btn btn-outline-danger"
                }`}
              >
                Back
              </button>
            </div>
            <div>
              <button
                onClick={handleIncreaseComponentIndex}
                className={`${
                  displayComponent > 2
                    ? "visually-hidden"
                    : "btn btn-outline-success"
                }`}
              >
                Next
              </button>
              {displayComponent > 2 && (
                <button onClick={handleSubmit}  className="btn btn-success">
                  Save
                </button>
              )}
            </div>
          </div>
        </div>

        {/* <PostJobSteps /> */}
      </div>
    </div>
  );
}

export default PostJob;
