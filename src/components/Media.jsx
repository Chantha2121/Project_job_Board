import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faFileImage,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Media.css";


const types = ["image/jpg", "image/jpeg", "image/png", "image/svg"];

export default function Media(props) {
  const { logoUrl, upLoadLogo, photoUrls, uploadPhoto, removePhoto } = props;

  const handleUploadImage = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type) && e.target.id === "logo") {
      upLoadLogo(selected.name);
      e.target.value = null;
    }

    if (selected && types.includes(selected.type) && e.target.id === "photo") {
      if (photoUrls.includes(selected.name)) {
        alert("Already added");
      } else {
        uploadPhoto(selected.name);
      }
      e.target.value = null;
    }
  };

  const handleRemoveImage = (url) => {
    if (!url) {
      upLoadLogo(null);
    } else {
      removePhoto(url);
    }
  };

  return (
    <div>
      <div className="createajobContainer">
        <div className="d-flex align-items-center mb-3">
          <div className="createajobCircle d-flex align-items-center justify-content-center rounded-circle text-white">
            04
          </div>
          <h5 className="m-0 mx-3">Media</h5>
        </div>

        <div className="my-2">
          <div>
            <p className="createajobText mt-5">Company Logo</p>
            <hr />
          </div>

          {logoUrl ? (
            <div>
              <label htmlFor="" className="position-relative">
                <img
                  src={require(`../assets/${logoUrl}`)}
                  alt={logoUrl}
                  className="mediaImage"
                />
                <FontAwesomeIcon
                  onClick={() => handleRemoveImage(null)}
                  icon={faTrashCan}
                  id={logoUrl}
                  className="mediaIcon teal-color mx-3 position-absolute MediaIconDelete"
                />
                <input
                  onChange={handleUploadImage}
                  type="file"
                  className="form-control mt-2"
                  id="logo"
                />
              </label>
            </div>
          ) : (
            <label
              htmlFor=""
              className="d-flex align-items-start justify-content-center flex-column"
            >
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faFileImage}
                  className="mediaIcon teal-color mb-2 mx-3"
                />
                <span>Select a photo</span>
              </div>
              <input
                onChange={handleUploadImage}
                type="file"
                className="form-control mt-2"
                id="logo"
              />
            </label>
          )}
        </div>

        <div>
          <div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="createajobText m-0">My Photos</p>
              <p className="createajobText text-end m-0">
                <span className="teal-color">{photoUrls.length}</span>/6
              </p>
            </div>
            <hr />
          </div>

          <div>
            <label
              htmlFor=""
              className="d-flex align-items-start justify-content-center flex-column"
            >
              <div className="d-flex align-items-center">
                {photoUrls.length >= 6 ? (
                  <FontAwesomeIcon
                    icon={faBan}
                    className="mediaIcon teal-color mb-2 mx-3"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faFileImage}
                    className="mediaIcon teal-color mb-2 mx-3"
                  />
                )}
                <span>Add new</span>
              </div>
              {photoUrls.length < 6 ? (
                <input
                  type="file"
                  className="form-control mt-2"
                  id="photo"
                  onChange={handleUploadImage}
                />
              ) : (
                <input
                  type="file"
                  disabled
                  className="form-control mt-2"
                  id="photo"
                  onChange={handleUploadImage}
                />
              )}
            </label>
            <span className="text-warning">
              we support .jpg, .jpeg, .png and .svg images only
            </span>
          </div>

          <ul className="list-unstyled container mt-4">
            <div className="row">
              {photoUrls.map((url) => (
                <li key={url} className="col-sm-6 col-md-2">
                  <img
                    src={require(`../assets/${url}`)}
                    alt={url}
                    className="photoUrlMedia"
                  />
                  <div
                    id="photo"
                    onClick={() => handleRemoveImage(url)}
                    className="btn btn-danger my-3"
                  >
                    Remove
                  </div>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
