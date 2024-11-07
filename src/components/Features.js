import IconPreview from '../app/svg/Preview'

import AnimatedSectionWithAnimation from './AnimatedSectionWithAnimation';
import Chat from '../app/svg/Chat'
import Chart from '../app/svg/Chart'
import Gaming from '../app/svg/Gaming'
import Pc from '../app/svg/Pc'


const features = [
    {
      name: 'Real-Time Simulation with Interactive Visualization',
      description:
        'Users can control parameters like water levels, terrain changes, or even simulate extreme weather',
      icon: <Chat/>,
    },
    {
      name: 'Open Visualization for Public Access',
      description:
        'The platform will offer open-access, pre-built flood simulations for various cities or structures, allowing anyone to visualize flood risks.',
        icon: <Gaming/>,
      },
      {
        name: 'Custom Visualization Requests',
        description:
          'After viewing general flood risk examples, users can request custom simulations for specific cities, regions, or even private properties.',
          icon: <Chart/>,
        },
      {
        name: 'Predictive Analytics for Future Flooding Events',
        description:
          'Users can see how flood-prone areas might evolve over time, allowing for proactive planning.',
          icon: <Pc/>,
        },
  ]
  
  export default function Features() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <AnimatedSectionWithAnimation className="" animationType="fade">

            <h2 className="text-base font-semibold leading-7 text-primary-light">3D Flood Simulation and Prediction Platform</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Unique Value Proposition
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-800 dark:text-gray-300">
              The platform will not just simulate the current state of flooding but also predict future flood risks based on historical data, weather forecasts, and other relevant metrics.
            </p>
            </AnimatedSectionWithAnimation>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none md:grid-cols-2 lg:grid-cols-4 lg:gap-y-16 justify-center">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <AnimatedSectionWithAnimation className="" animationType="fade">
                    <div className="group relative cursor-pointer overflow-hidden bg-gray-100 dark:bg-gray-900 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-rose-500 transition-all duration-300 group-hover:scale-[10]"></span>
                        <div className="relative z-10 mx-auto max-w-md">
                            <span className="grid text-white h-20 w-20 place-items-center rounded-full bg-rose-500 transition-all duration-300 group-hover:bg-rose-400">
                              {feature.icon}
                            </span>
                            <div className="pt-5 text-base font-semibold leading-7">
                                <p>
                                    <a href="#" className="text-rose-500 transition-all duration-300 group-hover:text-white">{feature.name}
                                        
                                    </a>
                                </p>
                            </div>
                            <div
                                className="space-y-6 pt-5 text-base leading-7 text-gray-700 dark:text-gray-200 transition-all duration-300 group-hover:text-white/90">
                                <p>{feature.description}</p>
                            </div>
                            
                        </div>
                    </div>
                  {/* <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <div className="absolute left-5 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-600">
                      <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{feature.description}</dd> */}
                  </AnimatedSectionWithAnimation>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }