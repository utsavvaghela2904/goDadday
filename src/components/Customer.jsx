import React from "react";
import "../index.css";
import img from "../img/Raheim-Thompson-D.webp";
import img1 from "../img/Raheim-Thompson-site.webp";
import img2 from "../img/Raheim-Thompson-M.webp";
function Customer() {
  return (
    <>
      <section className="tw-container tw-w-full">
        <div className="tw-mx-5 tw-mb-8">
          <h1 className="tw-text-3xl tw-font-bold tw-w-96" id="Style-text">
            Onward and upward with our customers.
          </h1>
        </div>
        <div className="tw-mx-3">
          <div className="tw-relative">
            <img src={img} className="tw-rounded-3xl" id="Img" />
            <img src={img2} className="tw-rounded-3xl" id="Img1" />
            <div
              className="tw-absolute tw-top-8 tw-float-right tw-right-5 tw-bg-slate-100 tw-p-10"
              id="Div"
            >
              <div>
                <h1 className="tw-text-3xl tw-font-bold">
                  “GoDaddy's Website Builder is super-convenient for somebody
                  who has an idea of what they're trying to create, but might
                  not have any technical skills.”
                </h1>
              </div>
              <div className="tw-mt-12 tw-flex tw-justify-between" id="Div-1">
                <div>
                  <p className="tw-font-light">Products used by</p>
                  <h1 className="tw-font-extrabold tw-text-xl">Roletape:</h1>
                  <a
                    href=""
                    className="tw-block tw-top-4 tw-relative hover:tw-underline-offset-2"
                  >
                    Domain
                  </a>
                  <a
                    href=""
                    className="tw-block tw-top-4 tw-relative hover:tw-underline-offset-2"
                  >
                    Online Store
                  </a>
                  <a
                    href=""
                    className="tw-block tw-top-4 tw-relative hover:tw-underline-offset-2"
                  >
                    SSL Certificates
                  </a>
                </div>
                <div className="Hiden-img">
                  <img src={img1} className="tw-w-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Customer;
