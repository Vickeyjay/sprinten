import { useState } from "react";
import "./popMobile.css";

const PopMobile = ({ onClose, onJustExport, onExportAndCreate }) => {
  return (
    <div className="popup-overlay-mobile">
      <div className="rounded-md p-5 bg-white popup flex  flex-col justify-between ">
        <div className="flex flex-col-reverse justify-between">
          <h2 className="text-xl justify-center align-middle text-center flex">
           Connect to your desktop to <br />export to figma
          </h2>
          <div className="img">
            <img src="/images/caution.png" alt="" />
          </div>
          <button
            className="text-start text-2xl cursor-pointer ex"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div className="cta-btn flex gap-5">
          <button className="rounded-md p-3 btn-3" onClick={onExportAndCreate}>
            Export as pdf instead
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopMobile;

