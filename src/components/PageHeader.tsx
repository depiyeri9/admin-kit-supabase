
import React, { useEffect, useRef, useState } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1920&auto=format&fit=crop" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div 
      ref={headerRef}
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6">{title}</h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          
          <div className="w-24 h-1 bg-gold/30 mx-auto mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
