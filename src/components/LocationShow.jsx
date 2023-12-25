import "../styles/LocationShow.css";


export default function LocationForm(props) {
    const { toggleLocationShow, address, handleSetAddress } = props;
  
    return (
      <div className="locationFormcontainer">
        <form onSubmit={(e) => e.preventDefault()} className="locationFormInner">
          <h3 className="mb-4">Location</h3>
  
          <div>
            <label htmlFor="" className="locationFormLabel">
              Address
            </label>
            <input
              type="text"
              disabled
              className="form-control"
              placeholder={`${
                address.city && address.country
                  ? `${address.city}, ${address.country}`
                  : "Phnom Penh, Cambodia"
              }`}
            />
          </div>
  
          <div className="d-flex align-items-center">
            <div className="locationFormflex">
              <label htmlFor="" className="locationFormLabel">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                placeholder={address.country}
                onChange={({ target }) =>
                  handleSetAddress({ country: target.value })
                }
              />
            </div>
  
            <div className="locationFormflex">
              <label htmlFor="" className="locationFormLabel">
                City
              </label>
              <input
                type="text"
                className="form-control"
                placeholder={address.city}
                onChange={({ target }) =>
                  handleSetAddress({ city: target.value })
                }
              />
            </div>
          </div>
  
          <button onClick={toggleLocationShow} className="btn btn-success">
            Continue
          </button>
        </form>
      </div>
    );
  }
  