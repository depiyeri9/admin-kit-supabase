
import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Tables } from "supabase-handler";

type Table = Tables["testimonials"]["Row"];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [testimonials, setTestimonials] = useState<Table[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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

    const fetchTestimonials = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase.testimonials.getFeaturedTestimonials();
        if (error) throw error;
        if (data) {
          setTestimonials(data);
        }
      } catch (err) {
        console.error("Error fetching testimonials:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // If no data yet, display fallback content
  const fallbackTestimonials = [
    {
      testimonial: "Saya tidak pernah dapat begitu banyak pujian hanya karena aroma. Ini bukan parfum — ini pengalaman.",
      parent_name: "Nadine, 32",
      rating: 5
    },
    {
      testimonial: "Wanginya elegan dan bertahan lama. Orang-orang bertanya saya pakai apa.",
      parent_name: "Ario, 29",
      rating: 5
    },
    {
      testimonial: "Aroma yang halus namun tetap menonjol. Sempurna untuk membuat kesan.",
      parent_name: "Kayla, 34",
      rating: 5
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? "text-gold fill-gold" : "text-gray-300"}`} 
      />
    ));
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-28 bg-emerald text-white relative"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/green-luxury-arabic-islamic-banner-background-with-traditional-batik-pattern-design_565542-739.jpg')" }}
      ></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-lg mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gold">Yang Mereka Katakan</h2>
          <div className="w-16 h-1 bg-white/30 mx-auto my-6"></div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center">
            <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayTestimonials.map((item, index) => (
              <div 
                key={index}
                className={`bg-emerald-light p-8 rounded-lg relative ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-12"
                } transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-gold opacity-30 text-5xl font-serif">"</div>
                
                <p className="mb-6 text-lg relative z-10">{item.testimonial}</p>
                
                <div className="flex flex-col items-start mt-4">
                  <div className="flex mb-2">
                    {renderStars(item.rating)}
                  </div>
                  <div className="font-serif text-gold">— {item.parent_name}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
