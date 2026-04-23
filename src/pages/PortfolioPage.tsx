
import { motion } from 'motion/react';
import { Portfolio } from '../components/sections/Portfolio';
import { ExternalLink, Layers, Smartphone, Globe, Code, Cpu } from 'lucide-react';
import { useEffect } from 'react';

const caseStudies = [
  {
    title: "E-Commerce Revolution",
    role: "Full Stack Development",
    challenge: "Existing platform was slow and had a 60% bounce rate on mobile devices.",
    solution: "Built a headless commerce architecture using Next.js and Shopify, focusing on image optimization and edge caching.",
    result: "120% increase in mobile conversion and 45% reduction in page load time.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    icon: <Globe size={24} />
  },
  {
    title: "Medical Booking Ecosystem",
    role: "UI/UX & Platform Dev",
    challenge: "Complex scheduling requirements leading to administrative overhead and double bookings.",
    solution: "Integrated a custom real-time calendar system with automated notification triggers and patient dashboard.",
    result: "Administrative time reduced by 30 hours per week and student satisfaction increased notably.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    icon: <Smartphone size={24} />
  },
  {
    title: "SaaS Analytics Dashboard",
    role: "Data Visualization",
    challenge: "Large data sets making dashboards unresponsive and difficult to interpret.",
    solution: "Implemented D3.js with optimized data grouping algorithms and minimalist design language.",
    result: "Instant data rendering for million-row datasets and improved user retention.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    icon: <Layers size={24} />
  }
];

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <Portfolio />

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Case <span className="text-gray-900">Studies</span></h2>
            <p className="text-gray-600 text-lg">A deeper look at the problems we've solved and the impact we've delivered for our clients.</p>
          </div>

          <div className="grid grid-cols-1 gap-24">
            {caseStudies.map((study, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col xl:flex-row gap-12 bg-gray-50/50 rounded-[4rem] p-10 xl:p-16 border border-gray-100 overflow-hidden relative">
                  <div className="flex-1 space-y-8 z-10">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-900">
                      {study.icon}
                      {study.role}
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900">{study.title}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">The Challenge</h4>
                        <p className="text-gray-700 text-lg">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">The Zen Solution</h4>
                        <p className="text-gray-700 text-lg">{study.solution}</p>
                      </div>
                      <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm inline-block">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Impact</h4>
                        <p className="text-2xl font-bold text-gray-900">{study.result}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 relative">
                    <div className="aspect-video xl:aspect-square rounded-[3rem] overflow-hidden border border-gray-200 shadow-2xl">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6">Built with the Best</h2>
              <p className="text-gray-400 text-lg">We use industry-standard technologies to ensure your project is stable, secure, and ready for future growth.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Code size={32} />, name: "Next.js" },
                { icon: <Cpu size={32} />, name: "Node/Serverless" },
                { icon: <Layers size={32} />, name: "Tailwind CSS" },
                { icon: <Globe size={32} />, name: "Headless CMS" }
              ].map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-4 group">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-400">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
