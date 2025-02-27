"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Controls navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) > 200) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          // setIsVisible(false);
          setTimeout(()=>{setIsVisible(false);}, 200)
        } else {
          // Scrolling up
          // setIsVisible(true);
          setTimeout(()=>{setIsVisible(true);}, 200)
        }
        setLastScrollY(currentScrollY); // Update the last scroll position
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`z-20 bg-navbar-bg sticky top-0 overflow-hidden drop-shadow-lg shadow-md transition-all ease-out duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-auto">
            <Link
              href={"/"}
              className="text-4xl font-bold text-gray-900 md:w-auto sm:text-3xl"
            >
              <Image
                src={"/logo_new.png"}
                alt="DesignLok Logo"
                height={120}
                width={120}
                style={{ width: "auto", height: "auto" }}
                className="justify-center items-center md:w-full mx-auto md:mx-0 sm:justify-start sm:items-start"
              />
            </Link>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto sm:w-auto">
            <div
              className={`flex h-auto w-auto space-x-8 mt-0 gap-7 mx-auto md:mx-0 sm:mx-auto`}
            >
              <nav
                className="md:flex md:gap-6 sm:gap-6 sm:flex"
                aria-label="Tabs"
              >
                {["/", "/works", "/services", "/aboutUs", "/contactUs"].map(
                  (path) => (
                    <Link
                      key={path}
                      href={path}
                      className={`${
                        path === pathname
                          ? "bg-white p-2 mx-2 md:mx-auto text-sm font-bold text-navbar-bg"
                          : "p-2 text-sm font-Josefin-Sans text-white hover:bg-gray-50 hover:text-gray-700"
                      } shrink-0 rounded-lg`}
                    >
                      {path === "/"
                        ? "Home"
                        : path === "/aboutUs"
                        ? (
                            path.substring(1).charAt(0).toUpperCase() +
                            path.substring(2)
                          ).replace(/(.{5})/, "$1 ")
                        : path.substring(1).charAt(0).toUpperCase() +
                          path.substring(2)}
                    </Link>
                  )
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
