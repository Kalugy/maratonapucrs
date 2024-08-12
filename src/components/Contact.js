"use client"
import { useState } from 'react';
import AnimatedSectionWithAnimation from './AnimatedSectionWithAnimation';


export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email) {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzcPj2Y5gR0bCVF253XG29Wp2fqsVfRQUz8YPBlE3KKQn3QDB9lXJBqXp15d4G1wvc/exec', {
          method: 'POST',
          mode: 'no-cors', // 'no-cors' to prevent CORS errors
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `email=${encodeURIComponent(email)}`,
        });
        if (response.ok) {
          setMessage('Thank you for subscribing!');
          setEmail('');
        } else {
          setMessage('Thank you for subscribing!'); // With no-cors, you can't read the response.
        }
      } catch (error) {
        setMessage('There was an error, please try again.');
      }
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-gray-200 dark:bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <form onSubmit={handleSubmit} className="max-w-xl lg:max-w-lg">
            <AnimatedSectionWithAnimation className="" animationType="slide">

            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
                Subscribe to newsletter

            </h2>
            <p className="mt-4 text-lg leading-8 text-black dark:text-white">
              See news and keep in touch with the development and releases
            </p>
            </AnimatedSectionWithAnimation>
            <AnimatedSectionWithAnimation className="">

            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-rose-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
              >
                Subscribe
              </button>

            </div>
            {message && <p className="mt-4 text-green-500">{message}</p>}
            </AnimatedSectionWithAnimation>

          </form>
          <AnimatedSectionWithAnimation className="">

          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                {/* <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-white" /> */}
              </div>
              <dt className="mt-4 font-semibold text-black dark:text-white">Development news</dt>
              <dd className="mt-2 leading-7 text-black dark:text-gray-400">
                News of the project and current stages
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                {/* <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-white" /> */}
              </div>
              <dt className="mt-4 font-semibold text-black dark:text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-black dark:text-gray-400">
                 No spam news, Weekly or montly emails 
              </dd>
            </div>
          </dl>
          </AnimatedSectionWithAnimation>

        </div>
        
      </div>
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
}
