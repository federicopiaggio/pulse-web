"use client";

import React, { useState } from "react";
import { clsx } from "clsx";
import styles from "./header.module.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header id="header" className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <a href="#experience" className={styles.navLink}>
            The Experience
          </a>
          <a href="#benefits" className={styles.navLink}>
            Benefits
          </a>
          <a href="#about" className={styles.navLink}>
            About
          </a>
          <a href="#contact" className={styles.navLink}>
            Contact
          </a>
        </nav>
        <button
          id="mobile-menu-button"
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className={styles.hamburgerIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={clsx(styles.mobileMenu, {
          [styles.hidden]: !isMobileMenuOpen,
        })}
      >
        <a
          href="#experience"
          className={styles.mobileLink}
          onClick={closeMobileMenu}
        >
          The Experience
        </a>
        <a
          href="#benefits"
          className={styles.mobileLink}
          onClick={closeMobileMenu}
        >
          Benefits
        </a>
        <a
          href="#about"
          className={styles.mobileLink}
          onClick={closeMobileMenu}
        >
          About
        </a>
        <a
          href="#contact"
          className={styles.mobileLink}
          onClick={closeMobileMenu}
        >
          Contact
        </a>
      </div>
    </header>
  );
}
