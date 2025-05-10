import { useState, useEffect, useRef } from "react";

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-cream py-20 md:py-28 relative"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/vintage-golden-floral-pattern_53876-94800.jpg?semt=ais_hybrid&w=740')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`mb-12 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-1000 ease-out`}>
            <h2 className="section-heading text-burgundy">Aroma Yang Abadi</h2>
            <div className="w-24 h-1 bg-gold mx-auto my-8"></div>
          </div>
          
          <p className={`text-lg md:text-xl leading-relaxed text-gray-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-1000 delay-200 ease-out`}>
            Di tengah dunia yang bising dan cepat berubah, banyak parfum terasa generik dan mudah dilupakan. 
            Mereka yang berkelas mencari aroma yang tidak pasaran — sesuatu yang elegan, halus, dan abadi.
          </p>
        </div>
        
        {/* Decorative element */}
        <div className={`mt-16 relative max-w-5xl mx-auto ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"} transition-all duration-1000 delay-300 ease-out`}>
          <div className="absolute -inset-4 bg-burgundy/10 rounded-xl blur-lg"></div>
          <div className="relative rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-3 shadow-lg">
            <div className="bg-emerald p-8 flex items-center text-white">
              <div>
                <h3 className="font-serif text-2xl mb-3">Terbebas dari Kebisingan</h3>
                <p className="opacity-90">Aroma yang membedakan Anda dari kerumunan tanpa perlu berteriak.</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <img 
                src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/661df916-5179-47d7-a7de-742e8d4950ec.__CR0,0,970,600_PT0_SX970_V1___.jpg" 
                alt="Elegant Perfume Bottles" 
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
