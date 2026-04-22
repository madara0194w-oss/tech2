import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 relative bg-gray-100/50 border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full"
          >
            <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden z-20">
              {/* Main Video */}
              <video 
                src="/video3.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              We Are <span className="text-gray-900">NexTechZen</span>
            </h2>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                A passionate team of creative developers, designers, and digital strategists based in Chittagong, Bangladesh.
              </p>
              <p>
                We combine Eastern mindfulness with cutting-edge Western technology to deliver calm, efficient, and powerful digital experiences. We believe that great software should feel invisible, solving complex problems while remaining intuitive and beautiful.
              </p>
            </div>

            <div className="mt-10 p-6 bg-white border border-gray-200 rounded-2xl border-l-4 border-l-gray-900 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Our Mission</h3>
              <p className="text-gray-900 italic">
                "To bring zen-like simplicity and excellence to every digital product we build."
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-black transition-colors duration-300 shadow-md">
                Meet The Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
