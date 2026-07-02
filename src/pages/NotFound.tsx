import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { pageContent } = useLanguage();
  const content = pageContent.layout.notFound;

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-[4.5rem]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
        <p className="text-xl text-gray-600 mb-4">{content.message}</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          {content.backToHome}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
