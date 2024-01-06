// import React from 'react'
// import gsir4 from "../assets/images/gsir4.png";
import Navhome from "../component/NavHome";
import HomeMain from "../component/HomeMain";
// import { Footer } from "../component/Footer";


const HomePage = () => {
  return (
    <>
      <Navhome />
      <HomeMain/>
      {/* <Footer/> */}

      {/* <div className="main_home ">
        <h1 className="fs-1 text-light">
          {" "}
          Hi Welcome to <em className="text-danger">Asov-tec :(</em>
        </h1>
        <div className="home_img">
          <img className="home_imge" src={gsir4} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">write up on Url</div>
            <div className="col-6">Image on Url </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">image</div>
            <div className="col-6">write up on Url </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">write up</div>
            <div className="col-6">image Url </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
