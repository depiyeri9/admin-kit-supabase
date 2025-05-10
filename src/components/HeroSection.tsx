
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald/5 via-background to-burgundy/5">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-8 w-48 h-48 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-8 w-64 h-64 bg-emerald/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 mt-20 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side text content */}
          <div className={`${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-1000 ease-out`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-emerald leading-tight mb-6">
              "Aroma Bukan Sekadar Wewangian, Tapi Warisan."
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Rasakan keanggunan klasik dalam tiap semprotan. Parfum edisi terbatas untuk jiwa yang tahu arti eksklusivitas.
            </p>
            <a 
              href="#collections" 
              className="luxury-btn inline-flex items-center"
            >
              Temukan Koleksimu
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Right side image or decorative element */}
          <div className={`${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-1000 delay-200 ease-out`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/20 rounded-full blur-md"></div>
              <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden">
                <img 
                  src="https://www.esteelauder.co.uk/media/export/cms/products/640x640/el_sku_G4ZA01_640x640_2.jpg?width=640"
                  alt="Luxury Fragrance" 
                  className="w-full h-[500px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald/60 to-transparent flex items-end p-8 text-white">
                  <div>
                    <h3 className="font-serif text-2xl mb-2">Koleksi Terbaru</h3>
                    <p className="opacity-90">Eksklusif dan terbatas. Terinspirasi dari warisan klasik.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
