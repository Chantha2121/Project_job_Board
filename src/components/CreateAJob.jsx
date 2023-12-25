import { useState } from "react";
import CategoryList from "./CategoryList";
import LocationShow from "./LocationShow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faFlag } from "@fortawesome/free-solid-svg-icons";
import "../styles/CreateAJob.css";
export default function CreateAJob(props) {
  const {
    title,
    handleSetTitle,
    isOwnCompany,
    toggleOwnCompany,
    onBehalf,
    toggleOnBehalf,
    OnBehalfOfOtherCompany,
    handleSetOnBehalf,
    category,
    handleActiveCategory,
    handleClearActiveCategory,
    address,
    handleSetAddress,
  } = props;

  const [categoryShow, setCategoryShow] = useState(false);
  const toggleCategoryShow = () => {
    setCategoryShow(!categoryShow);
  };

  const [locationShow, setLocationShow] = useState(false);
  const toggleLocationShow = () => {
    setLocationShow(!locationShow);
  };

  return (
    <div>
      <div className="container createajobContainer">
        <div className="d-flex align-items-center mb-3">
          <div className="createajobCircle d-flex align-items-center justify-content-center rounded-circle text-white">
            01
          </div>
          <h5 className="m-0 mx-3">Create A Job</h5>
        </div>

        <div>
          <p className="createajobText">Create a title for your ad.</p>
          <input
            type="text"
            placeholder={`${title ? title : "Ex. Full-time Staff"}`}
            required
            className="createajobInput form-control"
            onChange={({ target }) => handleSetTitle(target.value)}
          />
        </div>

        <div>
          <p className="createajobText my-2">This is for </p>
          <div className="d-flex align-items-center gap-4">
            <button
              onClick={toggleOwnCompany}
              className="btn btn-outline-secondary d-flex align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`${
                  isOwnCompany ? "createajobicon w-6 h-6" : "d-none"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="createajobbtn m-0 mx-2">My own company</p>
            </button>
            <button
              onClick={toggleOnBehalf}
              className="btn btn-outline-secondary d-flex align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`${onBehalf ? "createajobicon w-6 h-6" : "d-none"}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="createajobbtn m-0 mx-2">
                On behalf of other company
              </p>
            </button>
          </div>

          <div className={`${onBehalf ? "mt-3" : "d-none"}`}>
            <input
              type="text"
              className="form-control"
              placeholder={`${
                OnBehalfOfOtherCompany ? OnBehalfOfOtherCompany : "Campany name"
              }`}
              onChange={({ target }) => handleSetOnBehalf(target.value)}
            />
          </div>
        </div>

        <div>
          <p className="createajobfontbold mt-2">
            Where do you want your ad displayed?
          </p>
          <div>
            <div className="d-flex align-items-center">
              <button
                onClick={toggleCategoryShow}
                className="btn btn-outline-secondary d-flex align-items-center"
              >
                <p className="m-0">Category</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="createajobplusicon w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className="mx-3">
                {category && (
                  <div>
                    <button className="btn btn-outline-secondary d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="createajobicon w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="createajobbtn m-0 mx-2">{category}</p>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/*Category show*/}
            <div className={`${categoryShow ? "mt-4" : "d-none"}`}>
              <CategoryList
                toggleCategoryShow={toggleCategoryShow}
                category={category}
                handleActiveCategory={handleActiveCategory}
                handleClearActiveCategory={handleClearActiveCategory}
              />
            </div>

            <div></div>
          </div>
        </div>

        <div>
          <p className="createajobfontbold mt-2">Where are you located?</p>
          <div className="d-flex align-items-center gap-4">
            <button
              onClick={toggleLocationShow}
              className="createajoblastbtn border p-5"
            >
              <FontAwesomeIcon icon={faFlag} />
              <p>{address.country}</p>
            </button>
            <button
              onClick={toggleLocationShow}
              className="createajoblastbtn border p-5"
            >
              <FontAwesomeIcon icon={faLocationDot} />
              <p>{address.city}</p>
            </button>
          </div>

          {/*Location show*/}
          <div className={`${locationShow ? "mt-4" : "d-none"}`}>
            <LocationShow
              toggleLocationShow={toggleLocationShow}
              address={address}
              handleSetAddress={handleSetAddress}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
