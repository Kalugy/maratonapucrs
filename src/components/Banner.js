"use client"

import Link from 'next/link';
export default function Banner() {
    return(
        <section
        className='bg-gray-900 bg-cover bg-center h-screen'
        style={{
            backgroundImage: "url('/images/b2.jpeg')",
        }}
        >
        <div
            className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
            <div className="p-5 max-w-xl text-center sm:text-left">
            <div className='p-5 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg my-8'>
                <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                3D Flood Simulator
                <strong className="block text-1xl sm:text-1xl font-extrabold text-primary-light">Maratona PUCRS</strong>
                </h1>

                <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                Experience real-time flood scenarios and impact analysis.
                </p>
            </div>
            <div className="mt-8 px-4 flex flex-wrap gap-4 text-center">
                <Link
                href="/gamess"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                Try it
                </Link>

                <a
                href="#section1"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                Learn More
                </a>
            </div>
            </div>
        </div>
        </section>

    )}