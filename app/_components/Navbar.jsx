import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className=" bg-navbar-bg sticky top-0 overflow-hidden drop-shadow-lg shadow-md">
      <div className="mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-3xl">
              <Image
                src={"/logo.webp"}
                alt="DesignLok Logo"
                height={110}
                width={110}
              />
            </h1>

            <p className="mt-1.5 text-sm text-gray-500"></p>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:hidden">
              <label htmlFor="Tab" className="sr-only">
                Tab
              </label>

              <select id="Tab" className="w-full rounded-md border-gray-200">
                <option>Settings</option>
                <option>Messages</option>
                <option>Archive</option>
                <option select>Notifications</option>
              </select>
            </div>

            <div className="hidden sm:block">
              <nav className="flex gap-6" aria-label="Tabs">
                <Link
                  href="/"
                  className="shrink-0 rounded-lg p-2 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-700"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="shrink-0 rounded-lg p-2 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-700"
                >
                  Our Work
                </Link>

                <Link
                  href="/"
                  className="shrink-0 rounded-lg p-2 text-sm font-medium text-white hover:bg-gray-50 hover:text-gray-700"
                >
                  Our Services
                </Link>

                <Link
                  href="/"
                  className="shrink-0 rounded-lg bg-sky-100 p-2 text-sm font-medium text-navbar-bg"
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
