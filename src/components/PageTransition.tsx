import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState<'idle' | 'exiting' | 'entering'>('idle');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('exiting');
      // Scroll to top when navigating to a new page
      window.scrollTo(0, 0);
    }
  }, [location, displayLocation]);

  const handleTransitionEnd = () => {
    if (transitionStage === 'exiting') {
      setDisplayLocation(location);
      setTransitionStage('entering');
    } else if (transitionStage === 'entering') {
      setTransitionStage('idle');
    }
  };

  const getTransitionClass = () => {
    switch (transitionStage) {
      case 'exiting':
        return 'animate-slide-down-exit';
      case 'entering':
        return 'animate-slide-up-enter';
      default:
        return '';
    }
  };

  return (
    <div 
      className={`transition-container ${getTransitionClass()}`}
      onAnimationEnd={handleTransitionEnd}
      key={displayLocation.pathname}
    >
      {children}
    </div>
  );
};

export default PageTransition;