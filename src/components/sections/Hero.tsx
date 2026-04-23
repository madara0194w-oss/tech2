import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-[#F5F6FC]"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col xl:flex-row items-center gap-12">
        {/* Mobile Text (Overlaying Video) */}
        <div className="xl:hidden w-full text-center z-30 relative -mb-24 mt-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl text-gray-900 leading-tight drop-shadow-sm capitalize"
          >
            <span className="font-bold block whitespace-nowrap text-[1.55rem] sm:text-4xl tracking-tighter">Design and Development</span>
            <span className="font-normal block mt-1">Website</span>
          </motion.h2>
        </div>

        <div className="hidden xl:block flex-1 text-center xl:text-left pt-10 xl:pt-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900"
          >
            Transform Your Vision Into <br className="hidden xl:block" />
            <span className="text-gray-900">Digital Reality</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto xl:mx-0 leading-relaxed"
          >
            NexTechZen crafts pixel-perfect, lightning-fast websites and powerful web applications that drive real business growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center xl:justify-start"
          >
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-xl shadow-gray-900/20 hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Your Project Now
              <ArrowRight size={18} />
            </a>
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
            >
              Explore Our Portfolio
            </a>
          </motion.div>
        </div>

        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 relative w-full"
        >
          <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden z-20">
            {/* Main Video */}
            <video 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
            >
              <source src="https://res.cloudinary.com/drufv7gh5/video/upload/v1776891959/Developer_thinking_with_202604230004_fnrsuz.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
