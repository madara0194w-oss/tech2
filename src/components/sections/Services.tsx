import { motion } from 'motion/react';
import { Code2, ShoppingCart, LayoutTemplate, Smartphone, Search, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={32} />,
    title: "Custom Web Development",
    description: "High-performance, scalable web applications built with Next.js, React, Laravel, and Node.js.",
    tags: ["React", "Next.js", "Node.js"]
  },
  {
    icon: <ShoppingCart size={32} />,
    title: "E-commerce Platforms",
    description: "Conversion-optimized online stores using Shopify, WooCommerce, or custom-built solutions.",
    tags: ["Shopify", "WooCommerce", "Custom"]
  },
  {
    icon: <LayoutTemplate size={32} />,
    title: "SaaS & Web Apps",
    description: "Complex, data-driven software-as-a-service platforms with robust backend architectures.",
    tags: ["Architecture", "API", "Database"]
  },
  {
    icon: <Smartphone size={32} />,
    title: "UI/UX Design & Prototyping",
    description: "Stunning, user-centric interfaces designed in Figma with a focus on conversion and usability.",
    tags: ["Figma", "Wireframing", "Prototyping"]
  },
  {
    icon: <Search size={32} />,
    title: "SEO & Digital Marketing",
    description: "Technical SEO and performance optimization to ensure your site ranks high and loads fast.",
    tags: ["Technical SEO", "Performance", "Analytics"]
  },
  {
    icon: <Wrench size={32} />,
    title: "Maintenance & Scaling",
    description: "Ongoing support, security updates, and infrastructure scaling as your business grows.",
    tags: ["Support", "Security", "DevOps"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Our Expert <span className="text-gray-900">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            End-to-end digital solutions delivered with precision and innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl p-8 rounded-2xl group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-200 group-hover:border-gray-400 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-900 border border-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Break */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 relative rounded-3xl overflow-hidden h-[400px] bg-white border border-gray-200 shadow-xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
            alt="Coding Workspace" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent flex items-center">
            <div className="p-10 max-w-xl">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Built for Performance</h3>
              <p className="text-gray-600 text-lg">
                We write clean, maintainable code that scales with your business. Every line is optimized for speed and reliability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
