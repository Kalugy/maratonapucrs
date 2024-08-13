
import AnimatedSectionWithAnimation from './AnimatedSectionWithAnimation';

import Hat from '../app/svg/Hat'
import Clock from '../app/svg/Clock'
import Calendar from '../app/svg/Calendar'


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
                    <AnimatedSectionWithAnimation className="" animationType="fade">
                        <p className="mt-4 text-gray-950 font-semibold dark:font-bold dark:text-gray-100">
                            My body puzzle is a game made by one developer. The idea starts in July 2024 and is currently ongoing. The idea of the game is to learn about the human body in an interactive way. Below are the stages of development over 2 months:
                        </p>
                    </AnimatedSectionWithAnimation>

                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {stages.map((stage, index) => (

                        <a
                            key={index}
                            className="block bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-8 shadow-xl shadow-gray-200 dark:shadow-slate-800 transition hover:border-rose-500/10 hover:shadow-rose-200 dark:hover:shadow-rose-700"
                            href="#section1"
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
                            <div className='text-rose-500'>
                            {stage.icon}
                            </div>

                            <h2 className="mt-4 text-xl c text-black dark:text-white">{stage.title}</h2>

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
        icon: <Hat></Hat>
    },
    {
        title: "Stage #2",
        description: "Visualization 3d skull with bones and interactions",
        icon: <Hat></Hat>
    },
    {
        title: "Stage #3",
        description: "Create Drag and Drop gaming with names",
        icon: <Hat></Hat>
    },
    {
        title: "Stage #4",
        description: "Open page to test the game",
        icon: <Calendar/>
    },
    {
        title: "Stage #5",
        description: "Finish page, finish demo game",
        icon: <Clock/>
    },
    {
        title: "Stage #6",
        description: "Review",
        icon: <Clock/>
    }
];
