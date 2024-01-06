// import React from 'react'
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="container-fluid bg-light pt-5 p-4">
      <section className="">
        <div className="row">
          <div className="col-4">
          <h2>Asov-tech</h2>
          <p>The decentralized future</p>
          <p>web3 digging</p>
          </div>
          <div className="col-4">
              <h5>Links</h5>
              <ul>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Imagesearch</Link>
                </li>
                <li>
                  <Link to="/">Urlshortner</Link>
                </li>
                <li>
                  <Link to="/">Qrcode</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-4">
            <h5> Socail Links</h5>
              <ul>
                <li>
                  <Link to="/">facebook</Link>
                </li>
                <li>
                  <Link to="/">twitter</Link>
                </li>
                <li>
                  <Link to="/">linkin</Link>
                </li>
                <li>
                  <Link to="/">instagram</Link>
                </li>
              </ul>
            </div>
        </div>

        <div className="col-xl-12">
          <div className="footer-bottom-wrapper">
            <div className="footer-copyright d-flex align-item-center justify-content-center">
              <small>
                Copyrights © 2024 Sparkfresh concept. Privacy Policy / Making
                Guide
              </small>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
