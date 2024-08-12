
import Features from '../components/Features';

import About from '../components/About';

import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import Banner from '../components/Banner';
import DarkModeToggle from '../components/DarkModeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 text-black dark:text-white dark:bg-gray-900">
      <Banner/>
      <DarkModeToggle/>
      <Timeline/>
      <About/>
      <Features></Features>
      <Contact></Contact>
      <footer className="py-6">
        <div className="container mx-auto text-center dark:text-white">
          <p>&copy; 2024 My body puzzle project 0. All rights reserved. Design by Kalugy</p>
        </div>
      </footer>
    </div>
  );
}