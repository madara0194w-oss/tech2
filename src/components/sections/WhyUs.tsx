import { motion } from 'motion/react';

export function WhyUs() {
  return (
    <section className="py-24 relative bg-gray-100/50 border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-gray-900">NexTechZen</span>?
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                We don't just build websites; we build digital businesses. Our team combines deep technical expertise with a zen-like focus on user experience and business goals.
              </p>
              <p>
                Every project we undertake is crafted with precision. From the initial architecture to the final pixel, we ensure that your digital presence is not only visually stunning but also highly performant and scalable.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-900 shrink-0 mt-1 text-sm">✓</div>
                  <span><strong className="text-gray-900">Tailored Solutions:</strong> We understand that every business is unique, and we build custom solutions that fit your specific needs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-900 shrink-0 mt-1 text-sm">✓</div>
                  <span><strong className="text-gray-900">Future-Proof Tech:</strong> Utilizing the latest frameworks and best practices to keep you ahead of the curve.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-900 shrink-0 mt-1 text-sm">✓</div>
                  <span><strong className="text-gray-900">Unwavering Support:</strong> Our relationship doesn't end at launch. We provide continuous support and optimization.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full"
          >
            <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden z-20">
              {/* Main Video */}
              <video 
                src="/video2.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
