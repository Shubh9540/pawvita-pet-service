'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderData } from '@/types/templates.types';
import { FaBars, FaTimes, FaRegCalendarAlt } from 'react-icons/fa';

export const Header = ({ data }: { data?: HeaderData }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  if (!data) return null;

  const toggleDropdown = (id: string) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  return (
    <>
    <header className="bg-white shadow-sm sticky top-0 w-full z-50 transition-all">
        <div className="w-full px-4 lg:px-12 py-3 lg:py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image 
              src={data.image} 
              alt={data.imageAlt || 'Logo'} 
              width={200} 
              height={60}
              className="w-auto h-12 lg:h-16 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {data.navLinks.map((item) => {
              const hasSubmenu = item.subLinks && item.subLinks.length > 0;
              const isActive = item.url === pathname || (item.subLinks && item.subLinks.some(sub => sub.url === pathname));

              return (
                <div key={item.id} className="relative group">
                  {item.url ? (
                    <Link 
                      href={item.url}
                      className={`font-medium transition-colors text-base hover:text-primary ${
                        isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-text'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span 
                      className={`font-medium transition-colors text-base hover:text-primary cursor-pointer flex items-center gap-1 ${
                        isActive ? 'text-primary' : 'text-text'
                      }`}
                    >
                      {item.label}
                      {hasSubmenu && <span className="text-xs scale-75 opacity-70 group-hover:rotate-180 transition-transform duration-300 inline-block">▼</span>}
                    </span>
                  )}

                  {/* Desktop Dropdown */}
                  {hasSubmenu && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-md py-2 z-50">
                      {item.subLinks!.map(subItem => (
                        <Link 
                          key={subItem.id} 
                          href={subItem.url} 
                          className={`block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors text-sm ${
                            pathname === subItem.url ? 'text-primary bg-primary/10' : 'text-text-light'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          {data.contactButton && (
            <div className="hidden xl:block">
              <Link 
                href={data.contactButton.url}
                className="bg-primary text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {data.contactButton.text}
                <FaRegCalendarAlt className="text-lg" />
              </Link>
            </div>
          )}

          {/* Mobile Menu Hamburger Button */}
          <button 
            className="xl:hidden text-2xl text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full left-0 flex flex-col px-6 py-6 shadow-lg z-50 max-h-screen overflow-y-auto">
            {data.navLinks.map((item) => {
              const hasSubmenu = item.subLinks && item.subLinks.length > 0;
              const isExpanded = openDropdown === item.id;
              const isActive = item.url === pathname || (item.subLinks && item.subLinks.some(sub => sub.url === pathname));

              return (
                <div key={item.id} className="border-b border-gray-50 last:border-0 py-1">
                  <div 
                    className="flex items-center justify-between py-2 cursor-pointer"
                    onClick={() => hasSubmenu ? toggleDropdown(item.id) : null}
                  >
                    {item.url && !hasSubmenu ? (
                      <Link 
                        href={item.url}
                        className={`font-medium text-lg block flex-grow ${isActive ? 'text-primary font-bold' : 'text-text'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className={`font-medium text-lg block flex-grow ${isActive ? 'text-primary font-bold' : 'text-text'}`}>
                        {item.label}
                      </span>
                    )}
                    
                    {hasSubmenu && (
                      <span className="p-2 text-primary">
                        {isExpanded ? <FaTimes size={12} /> : <span className="text-xs scale-75 inline-block">▼</span>}
                      </span>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {hasSubmenu && isExpanded && (
                    <div className="pl-4 pb-3 pt-1 flex flex-col gap-2 border-l-2 border-primary/20 ml-2 mt-1">
                      {item.subLinks!.map(subItem => (
                        <Link 
                          key={subItem.id} 
                          href={subItem.url} 
                          className={`text-base py-1 ${pathname === subItem.url ? 'text-primary font-semibold' : 'text-text-light'}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            
            {data.contactButton && (
              <Link 
                href={data.contactButton.url}
                className="bg-primary text-white px-6 py-3 rounded-md font-medium text-lg text-center w-full mt-6 flex items-center justify-center gap-2 shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {data.contactButton.text}
                <FaRegCalendarAlt className="text-xl" />
              </Link>
            )}
          </div>
        )}
      </header>
    </>
  );
};
