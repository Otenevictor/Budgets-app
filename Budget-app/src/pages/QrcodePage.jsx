import { useState } from "react";
import QRCode from "qrcode";
import Navbar from "../component/NavBar";

const QrcodePage = () => {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#000000ff",
          light: "#ffffffff",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <>
    <Navbar/>

    <div className="d-flex   justify-content-center align-item-center " >
      <div className="home-qr m-3 flex-column  d-flex ">
        <h1 className="text-primary m-3 "> QR Code Generator </h1>
        <div className="qr_input d-flex flex-column  justify-content-center align-item-center">
          <div className=" d-flex  justify-content-center align-item-center">
            <input
              className="p-1  border-primary px-2"
              type="text"
              placeholder="e.g. https://google.com"
              value={url}
              onChange={(evt) => setUrl(evt.target.value)}
            />
            <button
              className="btn bg-primary text-white"
              onClick={GenerateQRCode}
            >
              {" "}
              Generate
            </button>
          </div>
          <div className=" d-flex flex-column  justify-content-center align-item-center">
            {qrcode && (
              <>
                {" "}
                <img src={qrcode} />
                <a href={qrcode} download="qrcode.png" className="d-flex fs-4 justify-content-center align-item-center">
                  {" "}
                  Download
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default QrcodePage;
