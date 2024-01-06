import { useState } from "react";

// eslint-disable-next-line react/prop-types
const InputShortner = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };
  return (
    <>
      <div className=" text-center d-flex  justify-content-center align-item-center ">
        <div className="text-center h1 p-3 justify-content-center">
          URL <span className="text-danger">Shortner</span>
        </div>
        <div className="m-3 p-2 d-flex justify-content-center align-item-center">
          <input
            type="text"
            placeholder="Paste URL here..."
            className="
                       border-primary rounded-0 p-2 text-primary"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <span className=""> 
          <button
            onClick={handleClick}
            type="button"
            className="btn p-2 btn-primary rounded-0 btn"
          >
            TrimURL
          </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default InputShortner;
