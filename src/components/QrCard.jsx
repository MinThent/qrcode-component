import React from "react";

export default function QrCard() {
  return (
    <div className="flex flex-col justify-center bg-white rounded-2xl w-80 text-center">
      <div className="flex justify-center p-3">
        <img className="rounded-xl w-full max-w-xs" src="image-qr-code.png"></img>
      </div>
      <div className="flex flex-col justify-center p-3 pt-0 w-full">
        <h3 className="p-2 pb-0 font-bold text-2xl text-slate-900">Improve your front-end skills by building projects</h3>
        <p className="p-3 font-light text-base text-slate-500">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}
