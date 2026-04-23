
import { motion } from 'motion/react';
import { Process } from '../components/sections/Process';
import { Lightbulb, PenTool, Layout, Code, CheckSquare, Rocket, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const deepSteps = [
  {
    icon: <Lightbulb size={32} />,
    title: "Discovery & Strategy",
    image: "https://images.unsplash.com/photo-1454165833762-02ac4f4089e8?q=80&w=2070&auto=format&fit=crop",
    details: "We start with a comprehensive workshop to understand your business ecosystem. From stakeholder interviews to competitor analysis, we ensure the project has a rock-solid strategic foundation.",
    outcomes: ["Business Requirement Document", "Technical Feasibility Study", "Project Timeline & Roadmap"]
  },
  {
    icon: <PenTool size={32} />,
    title: "Research & Wireframing",
    image: "https://images.unsplash.com/photo-1581291417004-6e741ada732b?q=80&w=2070&auto=format&fit=crop",
    details: "User experience centers on structure. We build low-fidelity wireframes that map out every user interaction, ensuring intuitive navigation and logical data flow before any visual design begins.",
    outcomes: ["User Flow Diagrams", "Low-Fidelity Wireframes", "Interactive Simple Prototypes"]
  },
  {
    icon: <Layout size={32} />,
    title: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    details: "The Zen aesthetic comes alive here. We craft high-fidelity designs that blend your brand identity with modern usability standards, focusing on typography, whitespace, and accessibility.",
    outcomes: ["Design System & Styles", "High-Fidelity UI Mockups", "Final Prototype for Approval"]
  },
  {
    icon: <Code size={32} />,
    title: "Development & Integration",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2000&auto=format&fit=crop",
    details: "Our engineers translate designs into clean, semantic code. We follow agile practices, with regular sprints and staging deployments to keep you involved in the development progress.",
    outcomes: ["Clean, Documented Codebase", "Third-Party API Integrations", "Database Architecture Setup"]
  },
  {
    icon: <CheckSquare size={32} />,
    title: "Testing & QA",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop",
    details: "Zero defects is our goal. We perform cross-browser testing, mobile responsiveness audits, performance stress tests, and security scans to ensure a flawless user experience.",
    outcomes: ["QA Test Reports", "Cross-Device Verification", "Security Audit Clearance"]
  },
  {
    icon: <Rocket size={32} />,
    title: "Launch & Support",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    details: "We handle the entire deployment process, ensuring smooth transition to production servers. Post-launch, we provide a period of hyper-care followed by long-term growth support.",
    outcomes: ["Production Environment Live", "System Documentation", "Ongoing Maintenance Plan"]
  }
];

export default function ProcessPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-white">
      <Process />

      <section className="py-24 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Step-by-Step <span className="text-gray-900">Deep Dive</span></h2>
            <p className="text-gray-600 text-lg">Transparency is our core value. Here exactly how we move your project from idea to reality.</p>
          </div>

          <div className="space-y-40">
            {deepSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number Background */}
                <div className="absolute -top-20 left-0 text-[15rem] font-bold text-gray-50 -z-10 leading-none">
                  0{index + 1}
                </div>

                <div className={`flex flex-col xl:flex-row gap-16 items-center ${index % 2 !== 0 ? 'xl:flex-row-reverse' : ''}`}>
                  <div className="flex-1 space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow-lg">
                        {step.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 text-xl leading-relaxed">
                      {step.details}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Key Outcomes:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.outcomes.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                            <ArrowRight size={16} className="text-gray-400" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 relative group">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 italic">"Simplicity is the ultimate sophistication."</h2>
            <p className="text-gray-600 text-xl">
              Following our Zen process means removing the unnecessary so that the necessary may speak. We bring this philosophy to every sprint, every meeting, and every line of code.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
