/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { WhyUs } from './components/sections/WhyUs';
import { Portfolio } from './components/sections/Portfolio';
import { About } from './components/sections/About';
import { Process } from './components/sections/Process';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F6FC] text-gray-900 font-sans selection:bg-gray-300 selection:text-gray-900 relative z-0">
      {/* Light Background Pattern */}
      <div className="fixed inset-0 z-[-1] bg-[#F5F6FC]">
        <div className="absolute inset-0 hidden xl:block bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <About />
        <Process />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
