
import { useState, useEffect, useRef } from "react";

const PlanSection = () => {
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

  const steps = [
    {
      number: "01",
      title: "Pilih Aroma",
      description: "Pilih aroma dari koleksi eksklusif kami sesuai dengan karaktermu",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Coba Sample Kit",
      description: "Coba sample kit di rumah untuk merasakan reaksi alami dengan kulit",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Nikmati Full-Size",
      description: "Nikmati versi full-size dalam kemasan kaca isi ulang — sustainable & luxurious",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
  ];

  return (
    <section 
      id="plan"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-white to-cream relative"
    >

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/021/573/780/non_2x/emerald-green-luxury-pattern-background-with-gold-button-free-vector.jpg')" }}
      ></div>


      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="section-heading text-burgundy">Perjalanan Aroma Anda</h2>
          <div className="w-24 h-1 bg-gold mx-auto my-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-lg shadow-lg transition-all duration-1000 ease-out ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-emerald rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <span className="font-serif text-4xl text-gold opacity-50">{step.number}</span>
                </div>
                <h3 className="font-serif text-2xl mb-3 text-emerald">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="#D4AF37"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className={`mt-20 text-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-1000 delay-600 ease-out`}>
          <h3 className="font-serif text-2xl md:text-3xl mb-6">Temukan aroma warisanmu sekarang</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="catalogue" className="luxury-btn">Lihat Koleksi</a>
            <a href="#sample-kits" className="luxury-btn-secondary">Pesan Sample Kit</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
