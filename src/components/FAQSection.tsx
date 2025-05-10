
import { useState, useEffect, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
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

  const faqData = [
    {
      question: "Apakah parfumnya unisex?",
      answer: "Koleksi kami terdiri dari aroma maskulin, feminin, dan androgini — Anda bebas memilih sesuai karakter."
    },
    {
      question: "Apakah bisa refill?",
      answer: "Ya. Semua kemasan full-size dirancang untuk bisa di-refill sebagai bagian dari komitmen kami pada estetika dan keberlanjutan."
    },
    {
      question: "Di mana saya bisa coba parfumnya?",
      answer: "Anda bisa memesan sample kit eksklusif untuk dicoba di rumah sebelum membeli versi full-size."
    },
    {
      question: "Berapa lama aroma parfumnya bertahan?",
      answer: "Parfum kami dirancang dengan konsentrasi tinggi untuk bertahan 8-12 jam, tergantung pada jenis kulit dan aktivitas Anda."
    },
    {
      question: "Apakah parfum ini tersedia di toko fisik?",
      answer: "Saat ini, koleksi kami hanya tersedia melalui website dan butik eksklusif di kota-kota tertentu."
    }
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 ease-out`}>
            <h2 className="section-heading text-emerald">Pertanyaan Umum</h2>
            <div className="w-16 h-1 bg-gold mx-auto my-6"></div>
          </div>

          <div className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-1000 delay-300 ease-out`}>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gold/20">
                  <AccordionTrigger className="font-serif text-lg text-burgundy py-6">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
