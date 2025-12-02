// ***************************** Import packages ***********************************************
"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowDown } from "lucide-react";
import Image from "next/image";

// Z-index layer constants for consistent stacking
const Z_INDEX = {
  HEADER: 1000, // Main header layer
  MOBILE_MENU: 999, // Mobile menu behind header
  INTERACTIVE: 1001, // Logo and hamburger above all for interaction
  DROPDOWN: 1002, // Dropdown above header
};

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    name: string;
    href: string;
    insideDropdown?: { name: string; href: string }[];
  }[];
}

// ===================== DESKTOP NAVIGATION COMPONENT =====================
interface DesktopNavProps {
  navItems: NavItem[];
  isScrolled: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems, isScrolled }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
    setOpenNestedDropdown(null);
  };

  const handleDropdownItemClick = (href: string) => {
    router.push(href);
    setOpenDropdown(null);
    setOpenNestedDropdown(null);
  };

  const handleNestedDropdownToggle = (itemName: string) => {
    setOpenNestedDropdown(openNestedDropdown === itemName ? null : itemName);
  };

  const isActivePage = (href: string) => {
    if (href === "#") return false;
    const sanitize = (url: string) => url.replace(/\/$/, "");

    return sanitize(pathname) === sanitize(href);
  };

  const logoSrc = isScrolled
    ? "/assets/tecosoft-black.svg"
    : "/assets/tecosoft-logo.svg";

  const navTextColor = isScrolled
    ? "text-black/90 hover:text-black"
    : "text-white/90 hover:text-white";

  const navBg = isScrolled ? "bg-white shadow-md" : "bg-transparent";

  return (
    <header
      className={`hidden lg:block fixed top-0 w-full ${navBg}`}
      style={{ zIndex: Z_INDEX.HEADER }}
    >
      <nav className="max-w-full 2xl:max-w-7xl mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <div
          className="relative hover:cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src={logoSrc}
            alt="Tecosoft Logo"
            width={150}
            height={36}
            className="h-8 lg:h-9 w-auto hover:cursor-pointer"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <ul className="flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              {item.hasDropdown ? (
                <div
                  ref={
                    item.name === "Platform" || item.name === "Solutions"
                      ? dropdownRef
                      : null
                  }
                  onMouseEnter={() => handleDropdownClick(item.name)}
                  onMouseLeave={() => handleDropdownClick("")}
                >
                  <button
                    onClick={() => handleDropdownClick(item.name)}
                    className={`text-[16px] font-semibold transition-colors flex items-center gap-1 ${navTextColor} hover:cursor-pointer `}
                  >
                    {item.name}
                    <ArrowDown
                      style={{
                        visibility:
                          item.name === "Industries" ? "hidden" : "visible",
                      }}
                      size={16}
                      className={`transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.name && item.dropdownItems && (
                    <div
                      className="absolute top-full mt-0 bg-white rounded-lg shadow-lg py-2 min-w-[220px] border border-gray-100 hover:cursor-pointer"
                      style={{ zIndex: Z_INDEX.DROPDOWN }}
                    >
                      {item.dropdownItems.map((dropdownItem) => (
                        <div key={dropdownItem.name} className="relative">
                          {dropdownItem.insideDropdown ? (
                            <div
                              className="relative"
                              onMouseEnter={() =>
                                handleNestedDropdownToggle(dropdownItem.name)
                              }
                              onMouseLeave={() =>
                                handleNestedDropdownToggle("")
                              }
                            >
                              <div
                                className={`w-full px-4 py-3 text-[15px] font-medium transition-colors hover:cursor-pointer flex items-center justify-between group ${
                                  isActivePage(dropdownItem.href)
                                    ? "text-[#0eb05c] hover:bg-[#0eb05c]/10"
                                    : "text-gray-700 hover:bg-[#0eb05c]/10 hover:text-[#0eb05c]"
                                }`}
                              >
                                <span
                                  onClick={() =>
                                    handleDropdownItemClick(dropdownItem.href)
                                  }
                                  className={`flex-1 hover:underline underline-offset-2 ${
                                    isActivePage(dropdownItem.href)
                                      ? "underline"
                                      : ""
                                  }`}
                                >
                                  {dropdownItem.name}
                                </span>
                                <ArrowDown
                                  size={14}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleNestedDropdownToggle(
                                      dropdownItem.name
                                    );
                                  }}
                                  className={`transition-transform cursor-pointer ${
                                    openNestedDropdown === dropdownItem.name
                                      ? "-rotate-90"
                                      : ""
                                  }`}
                                />
                              </div>
                              {openNestedDropdown === dropdownItem.name && (
                                <div
                                  className="absolute left-full top-0 ml-1 bg-white rounded-lg shadow-lg py-2 min-w-[240px] border border-gray-100"
                                  style={{ zIndex: Z_INDEX.DROPDOWN + 1 }}
                                >
                                  {dropdownItem.insideDropdown.map(
                                    (nestedItem) => (
                                      <button
                                        key={nestedItem.name}
                                        onClick={() =>
                                          handleDropdownItemClick(
                                            nestedItem.href
                                          )
                                        }
                                        className={`w-full text-left px-4 py-3 text-[14px] font-medium transition-colors hover:cursor-pointer hover:underline underline-offset-2 ${
                                          isActivePage(nestedItem.href)
                                            ? "underline text-[#0eb05c] hover:bg-[#0eb05c]/10"
                                            : "text-gray-700 hover:bg-[#0eb05c]/10 hover:text-[#0eb05c]"
                                        }`}
                                      >
                                        {nestedItem.name}
                                      </button>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          ) : (
                            <button
                              onClick={() =>
                                handleDropdownItemClick(dropdownItem.href)
                              }
                              className={`w-full text-left px-4 py-3 text-[15px] font-medium transition-colors hover:cursor-pointer hover:underline underline-offset-2 ${
                                isActivePage(dropdownItem.href)
                                  ? "underline text-[#0eb05c] hover:bg-[#0eb05c]/10"
                                  : "text-gray-700 hover:bg-[#0eb05c]/10 hover:text-[#0eb05c]"
                              }`}
                            >
                              {dropdownItem.name}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className={`text-[16px] font-semibold transition-colors ${navTextColor}`}
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button - Desktop */}
        <a
          href="#demo"
          className="flex bg-[#0eb05c] text-white px-6 py-2 rounded-lg hover:bg-[#0d9d52] transition-colors font-semibold items-center gap-2"
        >
          Book a Demo
          <span>→</span>
        </a>
      </nav>
    </header>
  );
};

// ===================== MOBILE NAVIGATION COMPONENT =====================
interface MobileNavProps {
  navItems: NavItem[];
  isScrolled: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ navItems, isScrolled }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedNestedItem, setExpandedNestedItem] = useState<string | null>(
    null
  );

  const handleNavigation = (href: string) => {
    if (href !== "#") {
      router.push(href);
      setIsOpen(false);
      setExpandedItem(null);
      setExpandedNestedItem(null);
    }
  };

  const toggleExpand = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
    setExpandedNestedItem(null);
  };

  const toggleNestedExpand = (itemName: string) => {
    setExpandedNestedItem(expandedNestedItem === itemName ? null : itemName);
  };

  const isActivePage = (href: string) => {
    if (href === "#") return false;
    const sanitize = (url: string) => url.replace(/\/$/, "");

    return sanitize(pathname) === sanitize(href);
  };

  const logoSrc = isOpen
    ? "/assets/tecosoft-logo.svg"
    : isScrolled
    ? "/assets/tecosoft-black.svg"
    : "/assets/tecosoft-logo.svg";

  const hamburgerColor = isScrolled
    ? "text-black hover:bg-black/10"
    : "text-white hover:bg-white/10";

  const navBg = isOpen
    ? "bg-[#1a4d8f]" // When menu is open, always blue to match menu
    : isScrolled
    ? "bg-white shadow-md" // When closed and scrolled, white with shadow
    : "bg-transparent"; // When closed and not scrolled, transparent

  return (
    <>
      {/* Mobile Header */}
      <header
        className={`lg:hidden fixed top-0 w-full ${navBg}`}
        style={{ zIndex: Z_INDEX.HEADER }}
      >
        <nav className="max-w-full    mx-auto  flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <div
            className="relative hover:cursor-pointer"
            style={{ zIndex: Z_INDEX.INTERACTIVE }}
            onClick={() => {
              router.push("/");
              setIsOpen(false);
            }}
          >
            <Image
              src={logoSrc}
              alt="Tecosoft Logo"
              width={150}
              height={36}
              className="h-8 w-auto hover:cursor-pointer"
              priority
            />
          </div>

          {/* Hamburger Button */}
          <button
            className={`p-2 rounded-lg transition-colors ${
              isOpen ? "text-white hover:bg-white/10" : hamburgerColor
            }`}
            style={{ zIndex: Z_INDEX.INTERACTIVE }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Slide-in Menu */}
      <div
        className={`lg:hidden fixed left-0 right-0 bg-[#1a4d8f] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          zIndex: Z_INDEX.MOBILE_MENU,
          top: "64px",
          height: "calc(100vh - 64px)",
          maxHeight: "550px",
        }}
      >
        <div className="pt-6 px-8 h-full overflow-y-auto">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleExpand(item.name)}
                      className="text-xl font-medium block py-2 hover:text-[#0eb05c] transition-colors text-white w-full text-left flex items-center justify-between"
                    >
                      {item.name}
                      <ArrowDown
                        style={{
                          visibility:
                            item.name === "Industries" ? "hidden" : "visible",
                        }}
                        size={18}
                        className={`transition-transform ${
                          expandedItem === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedItem === item.name && item.dropdownItems && (
                      <ul className="mt-2 ml-4 flex flex-col gap-3">
                        {item.dropdownItems.map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            {dropdownItem.insideDropdown ? (
                              <div>
                                <div
                                  className={`text-lg font-normal py-1 hover:text-[#0eb05c] transition-colors w-full flex items-center justify-between ${
                                    isActivePage(dropdownItem.href)
                                      ? "text-[#0eb05c] underline underline-offset-2"
                                      : "text-white/90"
                                  }`}
                                >
                                  <span
                                    onClick={() =>
                                      handleNavigation(dropdownItem.href)
                                    }
                                    className="flex-1 cursor-pointer"
                                  >
                                    {dropdownItem.name}
                                  </span>
                                  <ArrowDown
                                    size={16}
                                    onClick={() =>
                                      toggleNestedExpand(dropdownItem.name)
                                    }
                                    className={`transition-transform cursor-pointer ${
                                      expandedNestedItem === dropdownItem.name
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </div>
                                {expandedNestedItem === dropdownItem.name && (
                                  <ul className="mt-2 ml-4 flex flex-col gap-2">
                                    {dropdownItem.insideDropdown.map(
                                      (nestedItem) => (
                                        <li key={nestedItem.name}>
                                          <button
                                            onClick={() =>
                                              handleNavigation(nestedItem.href)
                                            }
                                            className={`text-base font-light block py-1 hover:text-[#0eb05c] transition-colors ${
                                              isActivePage(nestedItem.href)
                                                ? "text-[#0eb05c] underline underline-offset-2"
                                                : "text-white/80"
                                            }`}
                                          >
                                            {nestedItem.name}
                                          </button>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </div>
                            ) : (
                              <button
                                onClick={() =>
                                  handleNavigation(dropdownItem.href)
                                }
                                className={`text-lg font-normal block py-1 hover:text-[#0eb05c] transition-colors ${
                                  isActivePage(dropdownItem.href)
                                    ? "text-[#0eb05c] underline underline-offset-2"
                                    : "text-white/90"
                                }`}
                              >
                                {dropdownItem.name}
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-xl font-medium block py-2 hover:text-[#0eb05c] transition-colors text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
            <li className="mt-5 mb-3">
              <a
                href="#demo"
                className="bg-[#0eb05c] text-white px-6 py-3 rounded-lg hover:bg-[#0d9d52] transition-colors font-medium flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                Book a Demo
                <span>→</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

// ===================== MAIN NAVBAR COMPONENT =====================
const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Determine if header should be in scrolled state
  useEffect(() => {
    const sanitize = (url: string) => url.replace(/\/$/, "") || "/";
    const sanitizedPathname = sanitize(pathname);

    const homePages = [
      "/",
      "/production-digitization",
      "/connected-factories/production-digitization",
      "/connected-factories/tool-life-monitoring-digitization",
      "/connected-factories/maintenance-digitization",
      "/connected-factories/inspection-digitization",
    ];

    const isHomePage = homePages.includes(sanitizedPathname);

    if (isHomePage) {
      const handleScroll = () => {
        const scrollThreshold = window.innerWidth < 500 ? 60 : 150;
        setIsScrolled(window.scrollY > scrollThreshold);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [pathname]);

  // Shared navigation items for both mobile and desktop
  const navItems: NavItem[] = [
    {
      name: "Platform",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Eagle", href: "/eagle" },
        { name: "Tecosoft Analytics", href: "/analytics" },
      ],
    },
    {
      name: "Solutions",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Connected Factories",
          href: "/connected-factories",
          insideDropdown: [
            {
              name: "Production Digitization",
              href: "/connected-factories/production-digitization",
            },
            {
              name: "Tool Life Monitoring",
              href: "/connected-factories/tool-life-monitoring-digitization",
            },
            {
              name: "Maintenance Digitization",
              href: "/connected-factories/maintenance-digitization",
            },
            {
              name: "Inspection Digitization",
              href: "/connected-factories/inspection-digitization",
            },
          ],
        },

        { name: "AI-Enabled", href: "#AI-Enabled" },
        { name: "Digital Twin", href: "#Digital-Twin" },
      ],
    },
    { name: "Company", href: "#", hasDropdown: true },
    { name: "Why TecoSoft", hasDropdown: true, href: "#" },
    { name: "Industries", href: "#" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <DesktopNav navItems={navItems} isScrolled={isScrolled} />

      {/* Mobile Navigation */}
      <MobileNav navItems={navItems} isScrolled={isScrolled} />
    </>
  );
};

const HeaderSection = () => {
  return <Navbar />;
};

export default HeaderSection;
