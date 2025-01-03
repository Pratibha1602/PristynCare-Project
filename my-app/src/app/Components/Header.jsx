import React from "react";

export default function Header() {
    const navLinks = [
        { name: "Proctology", href: "#" },
        { name: "Laparoscopy", href: "#" },
        { name: "Gynaecology", href: "#" },
        { name: "ENT", href: "#" },
        { name: "Urology", href: "#" },
        { name: "Vascular", href: "#" },
        { name: "Aesthetics", href: "#" },
        { name: "Orthopedics", href: "#" },
        { name: "Ophthalmology", href: "#" },
        { name: "Fertility", href: "#" },
        { name: "Weight Loss", href: "#" },
        { name: "Wellness", href: "#" },
        { name: "New", href: "#", isNew: true }, 
      ];
  return (
    
    <header className="bg-blue-900 text-white">
    {/* Navigation Links */}
    <nav className="bg-white text-gray-500 text-sm font-semibold">
      <div className="2xl:container mx-auto px-10 py-4 overflow-x-auto hidden lg:block whitespace-nowrap">
        <ul className="flex space-x-6">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`hover:text-blue-500 ${link.isNew ? "text-green-500 font-bold" : ""}`}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
  );
}
