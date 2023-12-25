import "../styles/CreateAJob.css";

function Descriptions(props) {
  const {
    characterCount,
    calculateCharacterCount,
    description,
    handleSetDescription,
    keywords,
    handleSetKeywords,
  } = props;

  const handleOnChange = ({ target }) => {
    calculateCharacterCount(target.value.length);
    handleSetDescription(target.value); 
  };

  return (
    <div>
      <div className="createajobContainer">
        <div className="d-flex align-items-center mb-3">
          <div className="createajobCircle d-flex align-items-center justify-content-center rounded-circle text-white">
            02
          </div>
          <h5 className="m-0 mx-3">Description</h5>
        </div>

        <div>
          <p className="text-end">
            <span className="teal-color mx-2">{characterCount}</span>
            Characters ramaining
          </p>
          <p className="createajobText">Description</p>
          <textarea
            onChange={handleOnChange}
            maxLength={200}
            value={description ? description : ""}
            name=""
            id=""
            cols="30"
            rows="10"
            className="form-control"
          ></textarea>
        </div>

        <div className="my-2">
          <p className="createajobText mt-2">Keywords</p>
          <input
            onChange={({ target }) => handleSetKeywords(target.value)}
            type="text"
            value={keywords ? keywords : ""}
            className="form-control"
          />
          <span>Seperate each keyword with a coma.</span>
        </div>
      </div>
    </div>
  );
}

export default Descriptions;
