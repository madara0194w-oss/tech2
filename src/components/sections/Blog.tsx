import { motion } from 'motion/react';
import { ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    title: "Why Next.js 15 is Revolutionizing Web Development in 2026",
    category: "Technology",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    date: "Oct 12, 2026"
  },
  {
    title: "SEO Best Practices for Bangladeshi Businesses",
    category: "Marketing",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    date: "Oct 05, 2026"
  },
  {
    title: "The Future of E-commerce in South Asia",
    category: "Business",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop",
    date: "Sep 28, 2026"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-24 relative bg-gray-100/50 border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col xl:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Insights from the <span className="text-gray-900">Zen Lab</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              Latest thoughts, tutorials, and industry news from our expert team.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-900 transition-colors font-medium pb-2 border-b border-gray-300 hover:border-gray-900"
          >
            View All Articles <ArrowRight size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden group cursor-pointer border border-gray-200 hover:border-gray-400 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-gray-900 shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 font-heading group-hover:text-gray-900 text-gray-900 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
