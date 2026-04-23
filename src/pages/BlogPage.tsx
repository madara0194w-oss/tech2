
import { motion } from 'motion/react';
import { Blog } from '../components/sections/Blog';
import { Search, ArrowRight, User, Tag, Calendar } from 'lucide-react';
import { useEffect } from 'react';

const categories = ["All", "Technology", "Design", "Business", "Development", "Security"];

const featuredPost = {
  title: "Building the Future: Our Vision for the 2027 Digital Landscape",
  summary: "As we approach a new era of digital interaction, we explore the convergence of AI, decentralized systems, and zen-minimalist design. Discover how these forces will shape the next generation of user experiences.",
  category: "Strategy",
  author: "Arafat Rahat",
  date: "Oct 24, 2026",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
};

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <Blog />

      {/* Featured & Search */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col xl:flex-row gap-12 mb-20 items-center justify-between">
            <div className="relative w-full xl:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-gray-900 transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${cat === 'All' ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-900 hover:text-gray-900'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-[3rem] overflow-hidden bg-gray-900 text-white shadow-2xl h-[600px]"
          >
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 max-w-3xl">
              <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold mb-6 uppercase tracking-widest leading-none">
                Featured Article
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-300 text-xl mb-8 line-clamp-2">
                {featuredPost.summary}
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-gray-400" />
                  <span className="text-sm font-medium">{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-gray-400" />
                  <span className="text-sm font-medium">{featuredPost.date}</span>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-200 transition-all">
                  Read Now <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-[3rem] bg-white border border-gray-200 p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
             <Tag className="mx-auto mb-6 text-gray-300" size={48} />
             <h2 className="text-3xl font-bold mb-4">Never miss an insight</h2>
             <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">Get the latest trends twice a month. No spam, only pure value from the Zen Lab team.</p>
             <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder="your@email.com" 
                 className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:border-gray-900"
               />
               <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all shadow-md">
                 Join Newsletter
               </button>
             </form>
          </div>
        </div>
      </section>

      {/* Categories Grid (Expansion) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
             {[
               { title: "Building Scalable Architecture", date: "Sep 20, 2026", cat: "Development" },
               { title: "Psychology of Minimalist Design", date: "Sep 15, 2026", cat: "Design" },
               { title: "Data Privacy in South Asia", date: "Sep 10, 2026", cat: "Business" },
               { title: "The Rise of Edge Computing", date: "Sep 05, 2026", cat: "Technology" },
               { title: "Optimizing Web Vitals", date: "Sep 01, 2026", cat: "Performance" },
               { title: "Future of Headless CMS", date: "Aug 25, 2026", cat: "Architecture" }
             ].map((art, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group border-t border-gray-100 pt-8"
               >
                 <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{art.cat}</div>
                 <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-gray-600 transition-colors cursor-pointer">
                   {art.title}
                 </h3>
                 <div className="flex items-center justify-between text-sm">
                   <span className="text-gray-400 font-medium">{art.date}</span>
                   <button className="text-gray-900 font-bold flex items-center gap-1 hover:gap-2 transition-all">
                     View <ArrowRight size={14} />
                   </button>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
