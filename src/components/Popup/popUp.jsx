import { useState } from "react";
import "./pop.css";

const Pop = ({ onClose, onJustExport, onExportAndCreate }) => {
  return (
    <div className="popup-overlay">
      <div className="rounded-md p-5 bg-white popup flex flex-col justify-between">
        <div className="flex flex-col-reverse justify-between">
          <h2 className="text-xl justify-center align-middle text-center flex">
            How do you want to export <br /> this to Figma?
          </h2>
          <div className="img">
            <img src="/images/question.png" alt="" />
          </div>
          <button
            className="text-start text-2xl cursor-pointer ex"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div className="cta-btn flex gap-5">
          <button className="rounded-md p-3 btn-1" onClick={onJustExport}>
            Just export
          </button>
          <button className="rounded-md p-3 btn-2" onClick={onExportAndCreate}>
            Export & Create style
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pop;