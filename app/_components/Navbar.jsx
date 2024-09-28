"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className=" z-20 bg-navbar-bg sticky top-0 overflow-hidden drop-shadow-lg shadow-md">
      <div className="mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-3xl">
              <Link href={"/"}>
                <Image
                  src={"/logo.webp"}
                  alt="DesignLok Logo"
                  height={110}
                  width={110}
                  style={{ width: "auto", height: "auto" }}
                  className="justify-center items-center mx-auto w-full sm:justify-start sm:items-start"
                />
              </Link>
            </h1>

            <p className="mt-1.5 text-sm text-gray-500"></p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="text-white inline-block md:hidden"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                />
              </svg>
            </button>

            <div
              className={`${
                isOpen ? "hidden" : "block"
              } flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 gap-7`}
            >
              <nav className="flex gap-6" aria-label="Tabs">
                {["/", "/works", "/services", "/contactUs"].map((path) => (
                  <Link
                    key={path}
                    href={path}
                    className={`${
                      path === pathname
                        ? "bg-white p-2 text-sm font-bold text-navbar-bg"
                        : "p-2 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-700"
                    } shrink-0 rounded-lg`}
                  >
                    {path === "/"
                      ? "Home"
                      : path.substring(1).charAt(0).toUpperCase() +
                        path.substring(2)}
                  </Link>
                ))}

                {/* <Link
                  href="/"
                  className="shrink-0 rounded-lg p-2 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-700"
                >
                  Home
                </Link>
                <Link
                  href="/works"
                  className="shrink-0 rounded-lg p-2 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-700"
                >
                  Our Work
                </Link>

                <Link
                  href="/services"
                  className="shrink-0 rounded-lg p-2 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-700"
                >
                  Our Services
                </Link>

                <Link
                  href="/contactUs"
                  className="shrink-0 rounded-lg bg-sky-100 p-2 text-sm font-medium text-navbar-bg"
                  aria-current="page"
                >
                  Contact Us
                </Link> */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
