
import { motion } from 'motion/react';
import { Services } from '../components/sections/Services';
import { Code2, ShoppingCart, LayoutTemplate, Smartphone, Search, Wrench, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

const detailedServices = [
  {
    icon: <Code2 size={40} className="text-gray-900" />,
    title: "Custom Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    details: "Our custom web development services are focused on creating high-performance, secure, and scalable solutions tailored to your unique business needs. We leverage cutting-edge technologies like React, Next.js, and Node.js to build applications that are not just visually stunning but also technically superior.",
    benefits: ["SEO-Friendly Architecture", "Fast Loading Speeds", "Scale-Ready Infrastructure", "API & Third Party Integration"]
  },
  {
    icon: <ShoppingCart size={40} className="text-gray-900" />,
    title: "E-commerce Platforms",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
    details: "Transform your retail business into a high-converting digital storefront. We specialize in Shopify, WooCommerce, and fully bespoke commerce solutions that provide seamless user experiences, secure payment gateways, and efficient management systems.",
    benefits: ["Conversion Optimized Design", "Mobile-First Shopping Experience", "Multiple Payment Gateways", "Inventory Management Tools"]
  },
  {
    icon: <LayoutTemplate size={40} className="text-gray-900" />,
    title: "SaaS & Web Apps",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    details: "Build robust Software as a Service (SaaS) platforms with NexTechZen. We design and develop complex cloud-based applications with multi-tenant architectures, subscription billing, and enterprise-grade security.",
    benefits: ["Multi-Tenant Support", "Automated Billing Systems", "Real-time Dashboards", "Advanced Analytics"]
  },
  {
    icon: <Smartphone size={40} className="text-gray-900" />,
    title: "UI/UX Design & Prototyping",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2070&auto=format&fit=crop",
    details: "Design isn't just how it looks; it's how it works. Our UI/UX team crafts intuitive, research-driven interfaces that minimize friction and maximize engagement. We provide full prototyping services to validate ideas before development.",
    benefits: ["User Research & Testing", "Interactive Prototyping", "Design Systems Creation", "Accessibility Compliance"]
  },
  {
    icon: <Search size={40} className="text-gray-900" />,
    title: "SEO & Digital Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    details: "Ensure your brand stays visible in a crowded digital landscape. Our SEO services focus on technical excellence, content strategy, and data analysis to drive organic growth and sustainable traffic.",
    benefits: ["Technical SEO Audits", "Keyword Research Strategy", "On-page Optimization", "Performance Tracking"]
  },
  {
    icon: <Wrench size={40} className="text-gray-900" />,
    title: "Maintenance & Scaling",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    details: "Our commitment to your project doesn't end at launch. We provide ongoing maintenance, security updates, and performance monitoring to ensure your digital assets remain secure and up-to-date.",
    benefits: ["24/7 Uptime Monitoring", "Security Vulnerability Patches", "Performance Tuning", "Incremental Feature Updates"]
  }
];

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-[#f3f1ff]">
      <Services />

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">In-Depth <span className="text-gray-900">Service Coverage</span></h2>
            <p className="text-gray-600 text-lg">We don't just build, we architect for success. Explore the technical depth and business value of our offerings.</p>
          </div>

          <div className="space-y-32">
            {detailedServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col xl:flex-row gap-12 items-center ${index % 2 !== 0 ? 'xl:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-200">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.details}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 size={18} className="text-gray-900" />
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gray-900/10 rounded-full blur-3xl -z-10 ${index % 2 !== 0 ? 'left-auto right-auto -bottom-6 -left-6' : ''}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] border border-gray-200 shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Need a custom solution?</h2>
            <p className="text-gray-600 text-lg mb-10">We specialize in solving complex business challenges with elegant digital Zen.</p>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all duration-300 inline-block shadow-lg hover:scale-105"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
