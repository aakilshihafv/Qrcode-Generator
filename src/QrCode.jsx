import React, { useState } from "react";
import "./css/Qrcode.css";

const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("www.google.com");
  const [qrSize, setQrSize] = useState("150");

  async function generateQr() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
        qrData
      )}`;
      // const url = `https://www.rajalakshmi.org/QRCode/img/${qrData}.jpg`
     

      setImg(url);
    } catch (error) {
      console.error("Error is", error);
    } finally {
      setLoading(false);
    }
  }

  function downloadQr() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("ERROR WHILE DOWNLOADING", error);
      });
  }
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>Please Wait....</p>}
      {img && <img className="qr-code-image" src={img} alt="an image"></img>}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR code:
          <input
            type="text"
            id="dataInput"
            placeholder="Enter data for QR code"
            value={qrData}
            onChange={(e) => setQrData(e.target.value)}
          ></input>
        </label>
        <label htmlFor="sizeInput" className="input-label">
          Image Size (eg.. 150):
          <input
            type="text"
            id="sizeInput"
            placeholder="Enter Img Size"
            value={qrSize}
            onChange={(e) => setQrSize(e.target.value)}
          ></input>
        </label>
        <button
          className="generate-button"
          disabled={loading}
          onClick={generateQr}
        >
          Generate QrCode
        </button>
        <button className="download-button" onClick={downloadQr}>
          Download QrCode
        </button>
      </div>
      <p className="footer">Designed by: Worthez</p>
    </div>
  );
};

export default QrCode;
