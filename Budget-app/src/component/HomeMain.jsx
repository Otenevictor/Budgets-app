// import React from 'react'
import { Link } from "react-router-dom";
import gsir4 from "../assets/images/gsir4.png";
import q from "../assets/images/url.png";
import qr from "../assets/images/qr.jpg";
import wm from "../assets/images/wm3.png";
import nature from "../assets/images/nature.jpg";
import { Footer } from "../component/Footer";

// import rose1 from "../assets/images/rose1.jpg";

const HomeMain = () => {
  return (
    <>
      <div className="main_home ">
        <div className="main-home1">
          <div className="main-home-img ml-0 pb-5 p-4 ">
            <div className="container-fluid ml-0">
              <img
                className="img-homemain"
                src={wm}
                width="700px"
                height="600px"
              />
            </div>
            <h1 className="fs-1 text-light">
              {" "}
              Hi Welcome to <em className="text-danger">Asov-tec :(</em>
            </h1>
            <div className="home_img col-6 d-flex justify-content-center align-item-center">
              <img className="home_imge" src={gsir4} />
              <div className="btn_home">
                <button className="bg-light mainhome_btn text-danger p-3">
                  <Link className="text-danger" to="login">Learn More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-3">
          <div className="row ">
            <div className="col-6">
              <h3 className=" bg-danger border-light text-light p-3 mb-0">
                {" "}
                URL Shortener
              </h3>
              <p className=" bg-primary text-light p-5 mt-0">
                {" "}
                Best free custom URL shortener. Manage Bio Links Professionally.
                Generate shorten links, QRCODE, shorten world platform is world
                wide solution to manage links, bio links for everything you`re
                promoting. Boost your brand by using thousand premium domain
                names from our marketplace. of course you can easy generate
                massive passive income form your unused domain.
              </p>
            </div>
            <div className="col-6">
              <img className="img-shape" src={q} width="700px" height="200px" />
            </div>
          </div>
        </div>
        <div className="container mb-3 mt-3">
          <div className="row">
            <div className="col-6  d-flex justify-content-center align-item-center">
              <img
                className="img-shape"
                src={qr}
                alt="QRCODE"
                width="700px"
                height="200px"
              />
            </div>
            <div className="col-6">
              {" "}
              <h3 className=" bg-danger text-light p-3 mb-0"> QR CODE </h3>
              <p className="bg-primary text-light p-5 mt-0">
                {" "}
                QR Codes stands for quick response They were created in 1994 by
                Denso Wave to track vehicles during manufacturing. They quickly
                gain popularity when it spread to smartphones. You can now even
                scan QRCODE from your phone camera.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-3 mb-3">
          <div className="row">
            <div className="col-6">
              <h3 className=" bg-danger text-light p-3 mb-0"> Image Search </h3>
              <p className="bg-primary text-light p-5 mt-0">
                {" "}
                The Image Search App utilizes the Unsplash API to provide users
                with a platform to search for images base on various keywords.
                The app dynamically fetches images from the API and displays
                them for collection.
              </p>
            </div>
            <div
              className="col-6 d-flex justify-content-center align-item-center"
              width="700px"
            >
              <img
                className="img-shape"
                src={nature}
                alt="IMGSEARCH"
                width="700px"
                height="200px"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeMain;
