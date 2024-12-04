import React from "react";
import "../index.css";
import img from "../img/mrq-Guide-IN-PK-Suraiya-desktop.webp";
import img2 from "../img/mrq-Guide-IN-PK-Suraiya-tablet.webp";
import img3 from "../img/mrq-Guide-IN-PK-Suraiya-mobile.webp";
import img1 from "../img/gd-guides-logo.svg";

function CustomerServices() {
  return (
    <>
      <section className="tw-w-full tw-top-14 tw-relative tw-h-96">
        <div className="tw-w-full tw-relative" id="Ser">
          <img src={img} className="tw-h-96" id="Img" />
          <img src={img2} className="tw-h-96 tw-w-full" id="IImg1" />
          <img src={img3} className="tw-h-96 tw-w-full" id="IImg" />
        </div>
        <div
          className="tw-absolute tw-float-right tw-right-16 tw-top-10"
          id="Ser1"
        >
          <div className="tw-p-7">
            <img src={img1} alt="" />
            <h1 className="tw-text-5xl tw-font-bold tw-mt-7">
              We love to help. Seriously.
            </h1>
            <p className="tw-font-semibold tw-mt-5">
              Still not sure what you need? We’re happy to help, even if you’re
              not a customer. Contact us and we'll chat — or get back to you as
              soon as we can.
            </p>
            <button className="tw-bg-black tw-text-white tw-font-semibold tw-py-3 tw-px-3 tw-rounded-lg tw-mt-7">
              Get Help
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerServices;
