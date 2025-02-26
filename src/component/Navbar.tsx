import React, { useState} from "react";
import { IconType } from "react-icons";
import logo from "../assets/logo.svg";

interface DropdownItem {
  title: string;
  description: string;
  icon?: IconType;
  link?: string;
}

// Menu data
const developersMenu = {
  heading: "Developers",
  sections: [
    {
      items: [
        {
          title: "Overview",
          description: "Modern robot programming",
        },
        {
          title: "Studio",
          description: "Visualize and simulate robot applications",
        },
        {
          title: "Account",
          description: "Download our software and manage licenses",
        },
      ],
    },
    {
      heading: "Documentation",
      items: [
        {
          title: "Tutorials",
          description: "",
        },
        {
          title: "Sample Projects",
          description: "",
        },
        {
          title: "API Reference",
          description: "",
        },
      ],
      docsLink: "/docs",
    },
  ],
};

const solutionsMenu = {
  heading: "Solutions",
  sections: [
    {
      items: [
        {
          title: "Overview",
          description: "Learn how our solutions can speed up and scale your deployments",
        },
        {
          title: "Palletizer",
          description: "The fastest and most flexible palletizing solution on the market",
        },
      ],
    },
  ],
};


  
const companyMenu = {
  heading: "Company",
  sections: [
    {
      items: [
        {
          title: "About Us",
          description: "Who we are and our vision for the future"
        },
        {
          title: "Technology",
          description: "Next generation motion planning, available today"
        },
        {
          title: "Careers",
          description: "We are doers on a mission. Join us."
        },
        {
          title: "Press",
          description: "Recent articles, contact info, and media kit"
        },
      ],
    },
  ],
};

// Common dropdown menu component
function DropdownMenu({ menuData }: { menuData: any }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-[300px] rounded-lg bg-white shadow-lg p-4 z-20">
      {menuData.sections.map((section: any, idx: number) => (
        <div key={idx} className="mb-4 last:mb-0">
          {section.heading && (
            <h4 className="text-gray-500 text-xs font-semibold uppercase mb-2">
              {section.heading}
            </h4>
          )}
          <div className="flex flex-col space-y-3">
            {section.items.map((item: DropdownItem, itemIdx: number) => (
              <div key={itemIdx} className="flex items-start p-3 hover:bg-gray-50 rounded-lg group">

                <div className="text-sm">
                  <p className="font-semibold text-gray-700">{item.title}</p>
                  {item.description && (
                    <p className="text-gray-500 text-xs">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {section.docsLink && (
            <div className="border-t pt-3 mt-3 flex justify-between items-center">
              <span className="text-sm text-gray-700 font-semibold">
                Go to Docs
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  // State for desktop dropdown
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Handle mouse enter/leave for desktop dropdown
  const handleMouseEnter = (menu: string) => {
    setOpenDropdown(menu);
  };
  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white p-4 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Jacobi Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 relative">
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("developers")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex text-[17px] font-bold mr-10 items-center space-x-1 hover:text-jacobi-navy"
              type="button"
            >
              <span>Developers</span>
              <svg
                className="w-4 h-4 ml-1 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === "developers" && (
              <DropdownMenu menuData={developersMenu} />
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex text-[17px] font-bold mr-10 items-center space-x-1 hover:text-jacobi-navy"
              type="button"
            >
              <span>Solutions</span>
              <svg
                className="w-4 h-4 ml-1 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === "solutions" && (
              <DropdownMenu menuData={solutionsMenu} />
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex text-[17px] font-bold mr-10 items-center space-x-1 hover:text-jacobi-navy"
              type="button"
            >
              <span>Company</span>
              <svg
                className="w-4 h-4 ml-1 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === "company" && (
              <DropdownMenu menuData={companyMenu} />
            )}
          </li>
          <li>
            <a href="#blog" className="text-[17px] font-bold mr-10 hover:text-jacobi-navy transition-colors">
              Blog
            </a>
          </li>
          <li>
            <button
              type="button"
              className="px-4 py-1 font-bold rounded-full border border-jacobi-navy text-jacobi-navy 
                hover:bg-gray-100 hover:shadow-lg
                active:transform active:scale-95
                transition-all duration-150 text-[17px]
                shadow-md"
            >
              Request a Demo
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-gray-600" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile menu content */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white p-4 flex flex-col space-y-4 shadow-lg md:hidden z-20">
            <a href="#developers" className="hover:text-jacobi-navy">
              Developers
            </a>
            <a href="#solutions" className="hover:text-jacobi-navy">
              Solutions
            </a>
            <a href="#company" className="hover:text-jacobi-navy">
              Company
            </a>
            <a href="#blog" className="hover:text-jacobi-navy">
              Blog
            </a>
            <button
              type="button"
              className="px-4 py-2 rounded-full border border-jacobi-navy text-jacobi-navy hover:bg-gray-100 transition-colors"
            >
              Request a Demo
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
