"use client"
import React  from "react";
import Link from "next/link"


function Footer() {
  return (
    <footer className="bg-gray-900 ">
      <div className="container p-6 mx-auto sm:ml-10">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="https://your-website.com">
                <img
                  className="w-auto h-7"
                  src="https://merakiui.com/images/full-logo.sg"
                  alt=""
                />
              </a>

              <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                Join 31,000+ others and never miss out on new Clothes, Fashion, and more.
              </p>

              <div className="flex mt-6 -mx-2">
                <a
                  href="/reddit"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover-text-blue-400"
                  aria-label="Reddit"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Reddit SVG Path */}
                  </svg>
                </a>

                <a
                  href="/facebook"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover-text-blue-400"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Facebook SVG Path */}
                  </svg>
                </a>

                <a
                  href="/github"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover-text-blue-400"
                  aria-label="Github"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Github SVG Path */}
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                <a
                  href="/company"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Company
                </a>
                <a
                  href="/community"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Community
                </a>
                <a
                  href="/careers"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Careers
                </a>
              </div>

              {/* <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                <a
                  href="/tech"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Tech
                </a>
                <a
                  href="/music"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Music
                </a>
                <a
                  href="/videos"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Videos
                </a>
              </div> */}

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                <a
                  href="/mega-cloud"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Men's shoes
                </a>
                <a
                  href="/aperion-ui"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Women's shoes
                </a>
                <a
                  href="/meraki-ui"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  T'Shirt
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  +1 526 654 8965
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  example@email.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
