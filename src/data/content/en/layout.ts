import type { LayoutContent } from "../types";

export const layoutContent: LayoutContent = {
  header: {
    logoAlt: "London Bakery Logo",
    logoImage: "/assets/logo/logo_header.webp",
    nav: [
      { name: "Home", href: "/" },
      { name: "Products", href: "/products" },
      { name: "40 Years of History", href: "/our-stories" },
      { name: "About Us", href: "/about-us" },
      { name: "Contact", href: "/contact-us" },
      { name: "Careers", href: "https://portal.londonbakery.qa/jobs" },
      {
        name: "Get an Appointment",
        href: "https://portal.londonbakery.qa/appointment/1",
      },
    ],
  },
  footer: {
    logoAlt: "London Bakery Logo",
    logoImage: "/assets/logo/logo_footer.webp",
    contact: {
      title: "Contact Us",
      phone: "Phone: +974 4447 9785",
      tollFree: "Toll free: 800 6246",
    },
    location: {
      title: "Factory Location",
      lines: [
        "Street No: 40, Zone No: 81",
        "Building No: 63",
        "New Industrial area",
        "Doha, 20730",
        "Qatar",
      ],
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        "Home",
        "Products",
        "40 Years of History",
        "Careers",
        "Get an Appointment",
        "About Us",
        "Contact Us",
      ],
    },
    copyright: "Copyright © 2026",
    credit: "Made With Love by Hashqubes",
  },
  notFound: {
    title: "404",
    message: "Oops! Page not found",
    backToHome: "Return to Home",
  },
};
