
import { useState, useEffect, useRef } from "react";

const GuideSection = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className={`${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"} transition-all duration-1000 ease-out`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald/10 rounded-xl blur-lg"></div>
              <img
                src="https://thumbs.dreamstime.com/b/emerald-oasis-green-perfume-collection-immerse-yourself-fresh-aromatic-scents-nature-discover-essence-lush-349713379.jpg"
                alt="Velour Essence Perfume Creation"
                className="relative rounded-xl shadow-lg h-full max-h-[600px] object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-white rounded-lg p-4 shadow-lg">
                <img 
                  src="./icon.png"
                  alt="Velour Essence Logo"
                  className="h-12"
                />
              </div>
            </div>
          </div>
          
          {/* Text side */}
          <div className={`${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"} transition-all duration-1000 delay-200 ease-out`}>
            <h2 className="section-heading text-emerald">Tentang Velour Essence</h2>
            <div className="w-16 h-1 bg-gold mb-8"></div>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              <i>Velour Essence</i> menciptakan parfum berdasarkan pendekatan seni dan sejarah. Setiap koleksi adalah 
              hasil interpretasi aroma warisan klasik, dirancang untuk gaya hidup modern yang tetap menjunjung nilai-nilai timeless.
            </p>
            
            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-cream p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-emerald rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Pengalaman Mewah</h3>
                <p className="text-gray-600">Setiap detail dirancang untuk memberikan pengalaman parfum yang mewah dan personal.</p>
              </div>
              
              <div className="bg-cream p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-burgundy rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Seni & Sejarah</h3>
                <p className="text-gray-600">Koleksi kami adalah perpaduan antara estetika warisan dan inovasi modern.</p>
              </div>
              
              <div className="bg-cream p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Kualitas Premium</h3>
                <p className="text-gray-600">Hanya bahan terbaik yang digunakan dalam setiap tetes parfum kami.</p>
              </div>
              
              <div className="bg-cream p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-emerald-light rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Keberlanjutan</h3>
                <p className="text-gray-600">Komitmen kami pada estetika juga tercermin dalam kemasan yang berkelanjutan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
