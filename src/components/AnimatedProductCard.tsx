import { useNavigate } from "react-router-dom";
import { getProductUrlName } from "@/data/productData";

interface AnimatedProductCardProps {
  title: string;
  description?: string;
  image1: string;
  image2: string;
  badge?: string;
  size?: string;
  bgcolor?: string;
  slug?: string;
}

const AnimatedProductCard = ({ title, description, image1, image2, badge, size = "w-full h-full", bgcolor = "bg-orange-100", slug }: AnimatedProductCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Use provided slug if available, otherwise normalize the title
    const productSlug = slug || getProductUrlName(title);
    navigate(`/products/${productSlug}`);
  };
  // Create hover version by converting bg-gradient-to-bl to bg-gradient-to-tl
  const createHoverGradient = (originalGradient: string) => {
    if (originalGradient.includes('bg-gradient-to-bl')) {
      return originalGradient.replace('bg-gradient-to-bl', 'bg-gradient-to-tl');
    }
    return originalGradient; // fallback for non-gradient backgrounds
  };

  const hoverBgColor = createHoverGradient(bgcolor);

  const isHexColor = bgcolor.startsWith('#');
  
  const getBgProps = (color: string) => {
    if (color.startsWith('#')) {
      return { style: { backgroundColor: color }, className: "absolute inset-0 transition-all duration-700 ease-out" };
    }
    // Handle Tailwind classes (like bg-orange-100 or bg-[#D41921])
    const className = color.startsWith('bg-') ? color : `bg-[${color}]`;
    return { className: `${className} absolute inset-0 transition-all duration-700 ease-out` };
  };

  const defaultBgProps = getBgProps(bgcolor);
  const hoverBgProps = getBgProps(hoverBgColor);

  return (
    <div className="group cursor-pointer" onClick={handleCardClick}>
      <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-700 ease-out mb-6 bg-white group-hover:scale-[1.02] group-hover:-translate-y-2">
        <div className="h-[14rem] md:h-[23rem] relative overflow-hidden flex items-center justify-center">
          {/* Default background */}
          <div 
            {...defaultBgProps} 
            className={`${defaultBgProps.className} group-hover:opacity-0`}
          ></div>
          {/* Hover background */}
          <div 
            {...hoverBgProps} 
            className={`${hoverBgProps.className} opacity-0 group-hover:opacity-100`}
          ></div>
          {badge && (
            <div className="absolute top-4 left-4 bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-bold z-10 shadow-md">
              {badge}
            </div>
          )}
          {/* First Image - starts visible, pulls back dramatically on hover */}
          <img
            src={image1}
            alt={title}
            className={`${size} object-contain absolute inset-0 translate-y-0 scale-100 rotate-0 transition-all duration-700 ease-out group-hover:-translate-y-[120%] group-hover:scale-75 group-hover:-rotate-12 z-10 m-auto`}
          />
          {/* Second Image - starts below, pushes forward dramatically from bottom on hover */}
          <img
            src={image2}
            alt={title}
            className={`${size} object-contain absolute inset-0 translate-y-[120%] scale-75 rotate-12 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:scale-110 group-hover:rotate-0 z-20 m-auto`}
          />
        </div>
      </div>
      {/* Text content outside the card */}
      <div className="text-center px-2">
        <h3 className="text-xs md:text-sm font-bold text-foreground mb-2 md:mb-3 line-clamp-2 leading-tight s:text-[18px]" style={{ fontSize: 'clamp(11px, 2.5vw, 1rem)' }}>
          {title}
        </h3>
        {description && (
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed s:text-base" style={{ fontSize: 'clamp(10px, 2vw, 0.875rem)' }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default AnimatedProductCard;
