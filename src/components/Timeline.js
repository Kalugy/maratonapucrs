
import AnimatedSectionWithAnimation from './AnimatedSectionWithAnimation';

export default function Example() {
    return (
        <section id="section1" className="">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <AnimatedSectionWithAnimation className="" animationType="bounce">
                        <div 
                            className="text-3xl font-bold text-primary-light sm:text-4xl"
                        >
                            About the project
                        </div>
                    </AnimatedSectionWithAnimation>
                    <p 
                        className="mt-4 text-black dark:text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        My body puzzle is a game made by one developer to learn by gaming. The idea starts in July 2024 and is currently ongoing. The idea of the game is to learn about the human body in an interactive way. Below are the stages of development over 2 months:
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {stages.map((stage, index) => (

                        <a
                            key={index}
                            className="block rounded-xl border border-gray-100 dark:border-gray-800 p-8 shadow-xl transition hover:border-rose-500/10 hover:shadow-rose-500/10"
                            href="#"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: index * 0.2,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            <AnimatedSectionWithAnimation className="" animationType="fade">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-10 text-rose-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold text-black dark:text-white">{stage.title}</h2>

                            <p className="mt-1 text-sm text-black dark:text-gray-300">{stage.description}</p>
                            </AnimatedSectionWithAnimation>

                        </a>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <AnimatedSectionWithAnimation className="" animationType="bounce">

                    <a
                        href="#"
                        className="inline-block rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        Try the game
                    </a>
                    </AnimatedSectionWithAnimation>
                </div>
            </div>
        </section>
    )
}

const stages = [
    {
        title: "Stage #1",
        description: "Creating the model and export to the engine",
    },
    {
        title: "Stage #2",
        description: "Visualization 3d skull with bones and interactions",
    },
    {
        title: "Stage #3",
        description: "Create Drag and Drop gaming with names",
    },
    {
        title: "Stage #4",
        description: "Open page to test the game",
    },
    {
        title: "Stage #5",
        description: "Finish page, finish demo game",
    },
    {
        title: "Stage #6",
        description: "Review",
    }
];
