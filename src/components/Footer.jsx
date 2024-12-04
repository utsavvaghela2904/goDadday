import React from "react";
import "../index.css";
import logo from "../img/logo.png";

function Footer() {
  return (
    <>
      <footer className="tw-relative tw-top-20 tw-bg-black tw-mt-32">
        <a className="navbar-brand tw-m-6" href="#">
          <img src={logo} className="tw-w-44" id="Footer-logo" />
        </a>
        <hr class="tw-border-white tw-border-t tw-border-solid" />
        <div className="tw-container tw-px-5 tw-py-10 tw-mx-auto">
          <div className="tw-flex tw-flex-wrap md:tw-text-left tw-text-center -tw-mb-10 -tw-mx-4">
            <div className="lg:tw-w-1/6 md:tw-w-1/2 tw-w-full tw-px-4">
              <h2 className="tw-title-font tw-font-medium tw-text-white tw-tracking-widest tw-text-sm tw-mb-3">
                About GoDaddy
              </h2>
              <nav className="tw-list-none tw-mb-10">
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer hover:tw-underline-offset-8">
                    About Us
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Annual Returns
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Careers
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Contact Us
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    GoDaddy Blog
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Investor Relations
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Legal
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Newsroom
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Trust Center
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:tw-w-1/6 md:tw-w-1/2 tw-w-full tw-px-4">
              <h2 className="tw-title-font tw-font-medium tw-text-white tw-tracking-widest tw-text-sm tw-mb-3">
                Support
              </h2>
              <nav className="tw-list-none tw-mb-10">
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer hover:tw-underline-offset-8">
                    Product
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Report Abuse
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Resources
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:tw-w-1/6 md:tw-w-1/2 tw-w-full tw-px-4">
              <h2 className="tw-title-font tw-font-medium tw-text-white tw-tracking-widest tw-text-sm tw-mb-3">
                Resources
              </h2>
              <nav className="tw-list-none tw-mb-10">
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer hover:tw-underline-offset-8">
                    Webmail
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    WHOIS
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    ICANN Confirmation
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Designers & Developers
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Redeem Code
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Product Catalog
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Customer Testimonials
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Business Name
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Generator
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:tw-w-1/6 md:tw-w-1/2 tw-w-full tw-px-4">
              <h2 className="tw-title-font tw-font-medium tw-text-white tw-tracking-widest tw-text-sm tw-mb-3">
                Partner Programs
              </h2>
              <nav className="tw-list-none tw-mb-10">
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer hover:tw-underline-offset-8">
                    Affiliates
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Reseller Programs
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    GoDaddy Pro
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:tw-w-1/6 md:tw-w-1/2 tw-w-full tw-px-4">
              <h2 className="tw-title-font tw-font-medium tw-text-white tw-tracking-widest tw-text-sm tw-mb-3">
                Account
              </h2>
              <nav className="tw-list-none tw-mb-10">
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer hover:tw-underline-offset-8">
                    My Products
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Renewals
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Billing
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Create Account
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:tw-w-1/6 md:tw-w-1/2 tw-w-full tw-px-4">
              <h2 className="tw-title-font tw-font-medium tw-text-white tw-tracking-widest tw-text-sm tw-mb-3">
                Shopping
              </h2>
              <nav className="tw-list-none tw-mb-10">
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer hover:tw-underline-offset-8">
                    Buy a Domain
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Websites
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    WordPress
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Hosting
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Web Security
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Logo
                  </a>
                </li>
                <li className="tw-leading-8">
                  <a className="tw-text-gray-400 hover:tw-text-gray-100 hover:tw-cursor-pointer">
                    Generator
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div class="tw-container tw-mx-auto tw-flex tw-items-center tw-justify-between tw-px-4 tw-text-white tw-mt-10">
            {/* <!-- Logo --> */}
            <div class="tw-flex tw-items-center">
              <img src={logo} alt="GoDaddy Logo" class="tw-h-8 tw-mr-2" />
            </div>

            {/* <!-- Dropdown Options --> */}
            <div class="tw-hidden md:tw-flex tw-items-center tw-space-x-6">
              <div class="tw-flex tw-items-center tw-space-x-1 tw-cursor-pointer tw-group">
                <span>India - English</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="tw-w-4 tw-h-4 tw-text-gray-400 tw-group-hover:tw-text-gray-200"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="tw-flex tw-items-center tw-space-x-1 tw-cursor-pointer tw-group">
                <span>INR ₹</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="tw-w-4 tw-h-4 tw-text-gray-400 tw-group-hover:tw-text-gray-200"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* <!-- Social Icons --> */}
            <div class="tw-flex tw-items-center tw-space-x-4">
              <a href="#" class="tw-text-gray-400 tw-hover:tw-text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="tw-h-5 tw-w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.847v-3.622h2.973V8.413c0-2.934 1.792-4.533 4.409-4.533 1.253 0 2.33.093 2.644.135v3.065h-1.813c-1.42 0-1.695.675-1.695 1.664v2.181h3.392l-.443 3.622h-2.949V24h5.777c.732 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" class="tw-text-gray-400 tw-hover:tw-text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="tw-h-5 tw-w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.98 2H7.02C3.14 2 2 3.14 2 7.02v9.96C2 20.86 3.14 22 7.02 22h9.96C20.86 22 22 20.86 22 16.98V7.02C22 3.14 20.86 2 16.98 2zM12 17.59a5.59 5.59 0 1 1 5.59-5.59A5.6 5.6 0 0 1 12 17.59zm6.4-10.79a1.3 1.3 0 1 1-1.3-1.3 1.3 1.3 0 0 1 1.3 1.3zM12 8.23a3.77 3.77 0 1 0 3.77 3.77A3.77 3.77 0 0 0 12 8.23z" />
                </svg>
              </a>
              <a href="#" class="tw-text-gray-400 tw-hover:tw-text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="tw-h-5 tw-w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.174a3.005 3.005 0 0 0-2.114-2.115C19.935 3.6 12 3.6 12 3.6s-7.935 0-9.384.46a3.006 3.006 0 0 0-2.114 2.115C0 7.622 0 12 0 12s0 4.378.502 5.826a3.005 3.005 0 0 0 2.114 2.114c1.448.462 9.384.462 9.384.462s7.935 0 9.384-.462a3.006 3.006 0 0 0 2.114-2.114c.502-1.448.502-5.826.502-5.826s0-4.378-.502-5.826zM9.545 15.454V8.546L15.454 12l-5.91 3.454z" />
                </svg>
              </a>
            </div>

            {/* <!-- Mobile Menu Toggle --> */}
            <button
              class="tw-flex md:tw-hidden tw-items-center tw-text-gray-400 tw-hover:tw-text-white"
              id="menu-toggle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="tw-w-6 tw-h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <hr class="tw-border-white tw-border-t tw-border-solid tw-mt-9" />

          <div className="tw-mt-5 tw-p-6">
            <p className="tw-text-white tw-font-light">
              Copyright © 1999 - 2024 GoDaddy Operating Company, LLC. All Rights
              Reserved. The GoDaddy word mark is a registered trademark of
              GoDaddy Operating Company, LLC in the US and other countries. The
              “GO” logo is a registered trademark of GoDaddy.com, LLC in the US.
            </p>
            <p className="tw-text-white tw-font-light tw-my-5">
              Use of this Site is subject to express terms of use. By using this
              site, you signify that you agree to be bound by these Universal
              Terms of Service.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
