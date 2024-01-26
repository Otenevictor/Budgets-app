import PriceTag from "../component/payoutCom/priceTag";
import TableId from "../component/payoutCom/TableId";
import NavHome from "../component/NavHome";
import SideNav from "../component/SideNav";
import MonthsDateSelect from "../component/MonthDate";


function Payout() {
  return (
    <>
      <NavHome />

      <div className="container-fluid  bg-black global_bg" id="mm-m">
        <div className="row  container-fluid ">
          <div className="col-md-2   bg-black container-fuild">
            <SideNav />
          </div>

          <div className="col-md-10 ml-0 container-fluid  bg-primary ">
            <div className=" d-flex bg-warning payout_btw align-item-center p-3">
              <span className=" d-flex ">
              <h3> Payouts</h3>
                <i>
                  <span>©</span>
                </i>
                How it works
              </span>
              <div className="d-flex justify-content-center align-item-center">
                <span>search</span>
                <input
                  className="payout_input p-2 rounded-pill"
                  placeholder="Search features, tutorials, etc"
                />
              </div>
              <span></span>
              <div>
                <span>message</span>
                <span>select</span>
              </div>
            </div>
            <div className="d-flex  m-2 grey_color_payout payout_btw">
              <h3>Overview</h3>
              <div>
              <MonthsDateSelect/>
              </div>
            </div>

            <div className="">
              <PriceTag />
            </div>
            <h4 className="mb-4 mt-4 text-light">Tansactions | This Month</h4>
            <div className="mb-4 ">
              {" "}
              <span className="rounded-pill p-2 bg-light mt-4">
                Payouts (22)
              </span>
              <span className="rounded-pill p-2 bg-warning m-2">
                {" "}
                Refunds (6)
              </span>
            </div>
            <div>
              <input
                type="text"
                placeholder="Order ID or transaction ID"
                className="mt-4 p-2 rounded-pill"
              />
            </div>
            <div className="table_style mt-4">
              <TableId />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payout;
