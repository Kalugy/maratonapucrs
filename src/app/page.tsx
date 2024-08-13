
import Features from '../components/Features';

import About from '../components/About';

import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import Banner from '../components/Banner';
import DarkModeToggle from '../components/DarkModeToggle';
import ParticleBackground from '../components/ParticleBackground';
import GradientBackground from '../components/GradientBackground';
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-black dark:text-white dark:bg-gray-900">
      
      <Banner/>
      <DarkModeToggle/>
      <div className="relative isolate overflow-hidden py-2 sm:py-2 lg:py-3">
        <>
        <Timeline/>
        <About/>
        </>
      <div aria-hidden="true" className="absolute left-1/2 -top-8 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/1778] w-[72.1875rem] bg-gradient-to-tr from-[#4eddd9] to-[#fff262] dark:from-[#ff80b5] dark:to-[#9089fc] opacity-30 animate-moveClouds"
        />
      </div>
    </div>
    <div className="divider-wave"></div>

    <div className="relative isolate overflow-hidden py-2 sm:py-2 lg:py-3">
      <>
        <Features></Features>
        <Contact></Contact>
      </>
      <div aria-hidden="true" className="absolute left-1/2 -top-8 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/1678] w-[72.1875rem] bg-gradient-to-tr from-[#feea13] to-[#5bc8f4] dark:from-[#ff80b5] dark:to-[#9089fc] opacity-50 animate-moveClouds"
        />
      </div>
    </div>

    <Footer></Footer>

    </div>
  );
}      
