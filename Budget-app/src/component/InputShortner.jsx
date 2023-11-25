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
      <div className=" text-center  justify-content-center">
        <div className="text-center h1 p-3 justify-content-center">
          URL <span className="text-danger">Shortner</span>
        </div>
        <div className="m-3 p-2 d-flex justify-content-center align-item-center">
          <input
            type="text"
            placeholder="Paste URL here..."
            className="mt-1  px-3 py-0 border
                       border-primary rounded-2 text-primary"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-primary btn mt-1 ms-1"
          >
            TrimURL
          </button>
        </div>
      </div>
    </>
  );
};

export default InputShortner;
