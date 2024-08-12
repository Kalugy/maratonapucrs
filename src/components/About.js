import Image from 'next/image';

export default function Example() {
    return (
    <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-16 sm:py-24 lg:py-32 px-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 lg:mb-12 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My body puzzle</h2>
                <p className="mb-4 lg:mb-12">Its hard to memorizaded large data but is more easy when you do it in a interactive way is more simple and fun</p>
                <p>Learn about bones names and structure of the body, where is place every bone and how is the name.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <Image className="w-full rounded-lg" src="/images/b3.jpeg" alt="office content 1" width={400}
                    height={800}
                    layout="responsive"/>
                <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/images/b1.jpeg" alt="office content 2" width={500}
                    height={800}
                    layout="responsive" />
            </div>
            </div>
    </section>
    )
}
