"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiHome, FiUser, FiImage, FiMail, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <FiHome className="mr-2 inline" /> },
    { href: "/about", label: "About", icon: <FiUser className="mr-2 inline" /> },
    { href: "/gallery", label: "Gallery", icon: <FiImage className="mr-2 inline" /> },
    { href: "/contact", label: "Contact", icon: <FiMail className="mr-2 inline" /> },
  ];

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-yellow-400 px-6 py-4 shadow-md md:px-20">
        <div>
          <h1 className="font-extrabold text-3xl text-black">Jannie</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-lg font-bold relative">
          {navLinks.map(({ href, label, icon }) => (
            <motion.div
              key={href}
              whileHover={{ y: -3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={href} className="flex items-center px-2 py-1">
                {icon}
                {label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-black cursor-pointer  text-2xl"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black  bg-opacity-50 md:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-80 bg-yellow-400 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
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
            <FiX className="text-black text-2xl" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map(({ href, label, icon }) => (
            <motion.div
              key={href}
              whileHover={{ x: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={href}
                onClick={closeSidebar}
                className="flex items-center px-2 py-1 text-lg font-bold"
              >
                {icon}
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </aside>
    </>
  );
}
