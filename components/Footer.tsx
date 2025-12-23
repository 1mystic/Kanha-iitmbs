import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-white pt-20 pb-8 border-t-8 border-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl">pets</span>
              <span className="font-display font-bold text-3xl tracking-tighter text-white">KANHA</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              A home away from home. Fostering excellence, unity, and pride since 2012. We are the keepers of the flame.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-accent transition-colors duration-300">
                <span className="material-symbols-outlined text-lg">public</span>
              </a> 
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-accent transition-colors duration-300">
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-accent transition-colors duration-300">
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase text-primary tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/pride" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Kanha</Link></li>
              <li><Link to="/pride" className="hover:text-white hover:translate-x-1 transition-all inline-block">House Council</Link></li>
              <li><Link to="/bulletin" className="hover:text-white hover:translate-x-1 transition-all inline-block">Events Calendar</Link></li>
              <li><Link to="/pride" className="hover:text-white hover:translate-x-1 transition-all inline-block">Alumni Network</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase text-primary tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-0.5">location_on</span>
                <span>Campus Block D,<br/>University Rd, College Town</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">email</span>
                <span>warden@kanhahouse.edu</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">call</span>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-6 uppercase text-primary tracking-wider">Stay Updated</h4>
            <p className="text-xs text-gray-500 mb-4">Get the latest house news straight to your inbox.</p>
            <form className="flex flex-col gap-3">
              <input type="email" placeholder="Your email address" className="bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none transition placeholder-gray-600" />
              <button type="button" className="bg-primary text-accent text-sm font-bold py-3 rounded hover:bg-white transition-colors uppercase tracking-widest">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">© 2025 Kanha Student House. All Rights Reserved.</p>
          <div className="flex gap-6 text-xs text-gray-500 font-bold uppercase tracking-wider">
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms of Use</a>
          </div>
        </div>
        <div className="mt-12 text-center opacity-10 pointer-events-none select-none">
          <h1 className="font-display font-black text-[12vw] leading-none text-white/10">KANHA</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;