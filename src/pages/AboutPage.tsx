
import { motion } from 'motion/react';
import { About } from '../components/sections/About';
import { WhyUs } from '../components/sections/WhyUs';
import { Target, Users2, ShieldCheck, HeartPulse, Palette, Zap } from 'lucide-react';
import { useEffect } from 'react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      icon: <Target size={32} />,
      title: "Clarity of Vision",
      description: "We don't start until we fully understand your 'Why'. We cut through the noise to find the core purpose of your project."
    },
    {
      icon: <Zap size={32} />,
      title: "Efficient Execution",
      description: "Like a zen master, we believe in purposeful action. No wasted code, no bloated features, just precision."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Reliable Integrity",
      description: "Trust is our foundation. We provide honest timelines, transparent pricing, and robust security in every build."
    }
  ];

  const expertPillars = [
    {
      title: "Creative Design",
      icon: <Palette size={24} />,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      desc: "Our design team focuses on aesthetic calm and functional efficiency. We study user behavior to create interfaces that feel natural."
    },
    {
      title: "Technical Excellence",
      icon: <HeartPulse size={24} />,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2071&auto=format&fit=crop",
      desc: "We are obsessed with performance. Our developers write clean, maintainable, and highly optimized code architectures."
    }
  ];

  return (
    <div className="pt-20 bg-[#f3f1ff]">
      <About />
      <WhyUs />

      {/* Values Section */}
      <section className="py-24 bg-[#f3f1ff]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-gray-900 mb-8 border border-gray-200">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Strength */}
      <section className="py-24 bg-[#f3f1ff] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">The Pillars of <span className="text-gray-900">NexTechZen</span></h2>
            <p className="text-gray-600 text-lg">Our multi-disciplinary approach ensures your brand stands tall in the digital landscape.</p>
          </div>

          <div className="space-y-32">
            {expertPillars.map((pillar, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col xl:flex-row items-center gap-16 ${index % 2 !== 0 ? 'xl:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full">
                  <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-200">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-900">
                    {pillar.icon}
                    Core Discipline
                  </div>
                  <h3 className="text-4xl font-bold font-heading text-gray-900">{pillar.title}</h3>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    {pillar.desc}
                  </p>
                  <ul className="space-y-4 pt-6">
                    {['Continuous Learning', 'Modern Toolsets', 'Iterative Workflow'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-900 font-medium">
                        <Users2 size={18} className="text-gray-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bangladesh Roots Team Background */}
      <section className="py-24 bg-[#f3f1ff]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Global Standards, <br />Local Passion</h2>
              <div className="space-y-6">
                <p className="text-gray-600 text-xl leading-relaxed">
                  Operating from the heart of Chittagong, we bring the best of global technical standards to locally developed projects. Our team is driven by a shared dream of putting Bangladesh on the world map of high-end digital agency services.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We believe that location should never be a barrier to excellence. By combining the agility of a local startup with the rigorous quality controls of international tech firms, NexTechZen bridge the gap between imagination and implementation. 
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our Chittagong office serves as a hub for innovation, where we cultivate local talent and empower them with modern tools like Next.js, React, and advanced Cloud architectures to deliver world-class products.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-square rounded-[4rem] overflow-hidden bg-gray-100 border-8 border-gray-50 shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                   alt="Modern Office Space" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
