import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-medium" translate="no">
      <button
        onClick={() => setLocale("en")}
        className={`transition-colors ${locale === "en" ? "text-primary" : "text-foreground hover:text-primary"}`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <span className="text-muted-foreground">|</span>
      <button
        onClick={() => setLocale("ar")}
        className={`transition-colors ${locale === "ar" ? "text-primary" : "text-foreground hover:text-primary"}`}
        aria-pressed={locale === "ar"}
      >
        AR
      </button>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pageContent, isRtl } = useLanguage();
  const { header } = pageContent.layout;
  const navigationItems = header.nav;

  const handleNavigation = (item: (typeof navigationItems)[0]) => {
    if (item.href.startsWith("http")) {
      window.open(item.href, "_blank");
    } else {
      navigate(item.href);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-border py-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between pr-2 pl-4 md:pr-0 md:pl-0">
        {/* Left - Social Icons (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.facebook.com/londonbakery.qa"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <span className="text-white text-xs font-bold">f</span>
          </a>
          <a
            href="https://www.instagram.com/londonbakeryqatar?igsh=MXRpeGU2eXF2eXRraA=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* Logo - Center on desktop, Left on mobile */}
        <div className="flex-1 md:flex-initial flex justify-start md:justify-center md:flex-1">
          <Link
            to="/"
            className="text-2xl font-bold text-foreground tracking-wider"
          >
            <img
              src="/assets/logo/logo_header.webp"
              alt={header.logoAlt}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Right - Navigation Icons */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="p-0 hover:bg-transparent"
              >
                <div className="relative w-5 h-5">
                  <Menu
                    className={`w-5 h-5 text-foreground transition-all duration-300 ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                  />
                  <X
                    className={`w-5 h-5 text-foreground absolute top-0 left-0 transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                  />
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="w-full h-screen bg-background border-none p-0 data-[state=open]:slide-in-from-top-full data-[state=closed]:slide-out-to-top-full"
            >
              <div className="flex flex-col h-full">
                {/* Logo at Top Center of Menu */}
                <div className="flex justify-center pt-8 pb-4">
                  <img
                    src="/assets/logo/logo_header.webp"
                    alt={header.logoAlt}
                    className="h-8 w-auto"
                  />
                </div>

                {/* Navigation Menu */}
                <div className={`flex-1 flex flex-col justify-start items-center px-4 md:px-48 lg:px-80 xl:px-96 pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 space-y-4 ${isRtl ? "md:items-end" : "md:items-start"}`}>
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => handleNavigation(item)}
                        className={`text-2xl md:text-3xl font-semibold text-foreground hover:text-primary transition-colors duration-300 ${isRtl ? "text-right" : "text-left"}`}
                      >
                        {item.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
