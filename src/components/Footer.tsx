
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emerald text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <img 
                src="./icon.png" 
                alt="Velour Essence Logo"
                className="h-12 mb-4"
              />
              <p className="font-serif text-lg text-gold-light">Signature Fragrance for the Timeless</p>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-serif text-xl mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#collections" className="hover:text-gold-light transition-colors">Collections</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-light transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#sample-kits" className="hover:text-gold-light transition-colors">Sample Kits</a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-gold-light transition-colors">Sustainability</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-light transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="font-serif text-xl mb-4">Stay Connected</h3>
            <p className="mb-4">Subscribe to receive updates on new releases and exclusive offers.</p>
            <div className="flex mb-6">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-emerald-light border border-gold/30 rounded-l px-3 py-2 w-full focus:outline-none focus:border-gold"
              />
              <button className="bg-gold hover:bg-gold-light text-emerald px-4 rounded-r transition-all">
                Subscribe
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-gold-light transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://tiktok.com" className="hover:text-gold-light transition-colors">
                {/* Custom TikTok icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                  <path d="M16.6 5.82C16.6 5.24 16.95 4.44 17.75 3.9C17.375 3.15 16.6 2.55 15.8 2.4C14.95 2.25 13.825 2.1 12.5 2.1C8.9 2.1 6 4.85 6 8.45V18.15C6 19.4 7.325 20.35 8.45 19.85C9.4 19.4 10.05 18.45 10.05 17.35V12.55C10.05 12.1 10.525 11.75 10.975 11.9C11.275 12 11.575 12.125 11.875 12.275C12.175 12.4 12.5 12.2 12.5 11.9V8.575C12.5 8.275 12.8 8.125 13.075 8.25C13.675 8.575 14.35 8.725 15.05 8.725C15.425 8.725 15.65 9.1 15.65 9.475V11.45C15.65 11.75 15.95 11.9 16.175 11.75C16.6 11.45 17.15 11.3 17.75 11.3C18.1 11.3 18.4 11.6 18.4 11.975V14.725C18.4 15.1 18.775 15.325 19.1 15.175C19.55 14.95 20.075 14.8 20.65 14.95C21.175 15.1 21.55 15.475 21.7 16C22.075 17.2 21.1 18.4 19.85 18.4H19.1C18.85 18.4 18.625 18.25 18.55 18C18.4 17.425 17.9 16.925 17.3 16.775C16.475 16.625 15.725 17.125 15.575 17.95C15.575 17.95 15.575 17.95 15.575 18C15.575 18.25 15.35 18.4 15.125 18.4H13.625C12.95 18.4 12.35 17.8 12.35 17.125C12.35 16.45 12.95 15.85 13.625 15.85H14.15C14.375 15.85 14.6 15.7 14.675 15.475C14.825 15.025 15.275 14.725 15.8 14.725C16.475 14.725 17.075 15.325 17.075 16C17.075 16.225 17.225 16.45 17.45 16.45H18.25C18.775 16.45 19.175 15.925 19.025 15.4C18.925 15.025 18.625 14.8 18.25 14.725C17.9 14.65 17.525 14.8 17.375 15.1C17.3 15.325 17.075 15.4 16.85 15.325C16.625 15.25 16.475 15.025 16.55 14.8C16.775 14.05 17.6 13.7 18.325 14.05C19.25 14.5 19.775 15.625 19.325 16.55C19.1 17 18.7 17.35 18.25 17.5C17.9 17.65 17.525 17.575 17.3 17.275C17.15 17.05 16.925 16.9 16.7 16.825C16.325 16.7 15.95 16.775 15.65 17C15.35 17.2 15.2 17.5 15.125 17.8C15.05 18.1 14.825 18.325 14.525 18.4H12.275C11.125 18.4 10.125 17.5 9.95 16.325C9.725 14.95 10.75 13.7 12.125 13.7H12.95C13.25 13.7 13.475 13.4 13.4 13.1C13.325 12.95 13.325 12.725 13.325 12.5C13.325 11.6 14.05 10.9 14.95 10.9H15.425C15.8 10.9 16.025 10.525 15.875 10.225C15.725 9.85 15.65 9.475 15.65 9.025C15.65 7.325 16.6 5.82 16.6 5.82Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="mailto:contact@velouressence.com" className="hover:text-gold-light transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-emerald-light/30 mt-10 pt-6 text-sm text-emerald-light flex flex-col md:flex-row justify-between">
          <div>&copy; 2025 Velour Essence. All rights reserved.</div>
          <div className="flex flex-wrap mt-4 md:mt-0 space-x-4">
            <a href="/terms" className="hover:text-gold-light transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-gold-light transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
