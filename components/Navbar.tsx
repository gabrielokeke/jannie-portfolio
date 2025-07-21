"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-yellow-400 px-6 py-4 shadow-md md:px-20">
        {/* Logo */}
        <div>
          <h1 className="font-extrabold text-3xl text-black">Jannie</h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden gap-6 text-lg font-bold md:flex">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-6 py-2 transition-all duration-200 ${
                  isActive ? "" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
          type="button"
        >
          <span className="h-0.5 w-6 bg-black transition-all duration-300"></span>
          <span className="h-0.5 w-6 bg-black transition-all duration-300"></span>
          <span className="h-0.5 w-6 bg-black transition-all duration-300"></span>
        </button>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-80 bg-yellow-400 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile sidebar navigation"
      >
        <div className="flex items-center justify-between p-6">
          <h1
            className="font-extrabold text-3xl text-black cursor-pointer"
            onClick={closeSidebar}
          >
            Jannie
          </h1>
          <button
            onClick={closeSidebar}
            aria-label="Close menu"
            className="rounded-full p-2"
            type="button"
          >
            <svg
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={closeSidebar}
                className={`rounded-md px-4 py-3 text-lg font-bold transition-all duration-200 ${
                  isActive ? "" : ""
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}