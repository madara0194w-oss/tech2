
import { motion } from 'motion/react';
import { Contact } from '../components/sections/Contact';
import { Mail, MessageSquare, Clock, Globe } from 'lucide-react';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      q: "What is your typical project timeline?",
      a: "Most web projects take between 4-8 weeks from discovery to launch, depending on complexity and feature requirements."
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes, we provide 30 days of free hyper-care post-launch, followed by optional monthly maintenance plans for security and updates."
    },
    {
      q: "How do we handle communication?",
      a: "We use Slack for daily communication and Zoom/Google Meet for weekly progress syncs. You'll have a dedicated account manager."
    }
  ];

  return (
    <div className="pt-20 bg-[#f3f1ff]">
      <Contact />

      {/* Map & Additional Info */}
      <section className="py-24 bg-[#f3f1ff] border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-16">
            <div className="flex-1 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Communication <span className="text-gray-900">Protocol</span></h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We believe in radical transparency. When you partner with NexTechZen, you're not just hiring a vendor; you're gaining a technical extension of your team.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <Clock className="text-gray-900 mb-4" size={32} />
                  <h4 className="font-bold text-lg mb-2">Response Time</h4>
                  <p className="text-gray-600 text-sm">Initial inquiries are answered within 12 business hours. Urgent support is 24/7.</p>
                </div>
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                  <Globe className="text-gray-900 mb-4" size={32} />
                  <h4 className="font-bold text-lg mb-2">Global Support</h4>
                  <p className="text-gray-600 text-sm">We work across all time zones to ensure your project keeps moving 24/7.</p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqItems.map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
                      <h4 className="font-bold text-gray-900 mb-2">{item.q}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="h-full min-h-[400px] rounded-[3rem] overflow-hidden bg-gray-100 border border-gray-200 shadow-2xl relative">
                {/* Placeholder for Map or Visual */}
                <img 
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2072&auto=format&fit=crop" 
                  alt="Global Reach" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center p-8 text-center">
                  <div className="bg-white/90 backdrop-blur-md p-10 rounded-[2rem] border border-white/20 max-w-sm">
                    <Mail className="mx-auto mb-4 text-gray-900" size={32} />
                    <h4 className="font-bold text-gray-900 text-xl mb-2">Direct Outreach</h4>
                    <p className="text-gray-600 text-sm mb-6">Prefer a direct conversation? Click below to send us data via email.</p>
                    <a href="mailto:abdullaharafinrahat@gmail.com" className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-bold hover:bg-black transition-all">
                      Click to Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-24 bg-[#f3f1ff]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {['LinkedIn', 'Twitter', 'Facebook', 'Instagram', 'Dribbble'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-bold uppercase tracking-widest text-xs"
              >
                <MessageSquare size={16} />
                {social}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
