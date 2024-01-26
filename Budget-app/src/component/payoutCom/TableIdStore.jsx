// import Link from "react-router-dom"

const TableIdStore = ({  title,   price, description, link}) => {
    return (
      <>
      <div className=" ">
        <div className="d-flex">
          <div className="bg-light m-2 p-2 payout_card_size">
          <p className=" m-0">{title}</p>
            <p className="m-0 fs-3">{price}</p>
            <p className="">{description}</p>
            <a to="/" className="d-flex align-items-end mt-auto">{link}</a>
          </div>
        </div>
        </div>
        </>
    );
  };
  
  export default TableIdStore;
  