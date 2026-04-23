import { motion } from 'motion/react';
import { Lightbulb, PenTool, Layout, Code, CheckSquare, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb size={24} />,
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and technical requirements."
  },
  {
    icon: <PenTool size={24} />,
    title: "Research & Wireframing",
    description: "Mapping out the user journey and creating structural blueprints for the project."
  },
  {
    icon: <Layout size={24} />,
    title: "UI/UX Design",
    description: "Crafting beautiful, intuitive interfaces that align with your brand identity."
  },
  {
    icon: <Code size={24} />,
    title: "Development & Integration",
    description: "Writing clean, scalable code and integrating necessary third-party services."
  },
  {
    icon: <CheckSquare size={24} />,
    title: "Testing & QA",
    description: "Rigorous testing across devices and browsers to ensure a bug-free experience."
  },
  {
    icon: <Rocket size={24} />,
    title: "Launch & Support",
    description: "Smooth deployment followed by continuous monitoring and maintenance."
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Our 6-Step <span className="text-gray-900">Zen Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Transparent, efficient, and designed to deliver exceptional results every time.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-900 mb-6 relative group-hover:scale-110 transition-transform duration-300 group-hover:border-gray-400">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 font-heading text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
