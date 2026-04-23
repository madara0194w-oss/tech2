import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Our Process', href: '/process' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img
                src="https://res.cloudinary.com/drufv7gh5/image/upload/v1776279867/Gemini_Generated_Image_so26r5so26r5so26-modified_s2cxop.png"
                alt="NexTechZen Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-heading font-bold text-xl tracking-wide text-gray-900">
                NexTech<span className="text-gray-900">Zen</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Zen in Technology - Crafting Digital Excellence. We build premium digital experiences that drive real business growth.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-gray-900">Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Custom Web Development', href: '/services' },
                { name: 'E-commerce Platforms', href: '/services' },
                { name: 'SaaS Applications', href: '/services' },
                { name: 'UI/UX Design', href: '/services' },
                { name: 'SEO & Marketing', href: '/services' },
                { name: 'Maintenance & Support', href: '/services' }
              ].map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-gray-600 hover:text-gray-900 transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-gray-900">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to get the latest insights from the Zen Lab.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-gray-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-900 hover:text-white rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col xl:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            Copyright 2026 NexTechZen. All Rights Reserved. Made with passion in Chittagong, Bangladesh.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
