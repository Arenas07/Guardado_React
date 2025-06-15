import '../../styles/global.css'
import { LuBrain, LuZap } from "react-icons/lu";
import { FaMicrophone, FaRegCalendar } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";

const features = [
  {
    icon: FaMicrophone,
    title: 'Emotional Voice Check-in',
    description: 'Talk to your emotional partner IA. Helps you name emotions and create your personal wellness log.',
    color: 'from-emerald-500 to-green-500'
  },
  {
    icon: LuBrain,
    title: 'Personalized AI Conversation',
    description: 'AI Avatar that adapts to your emotional pattern. Personalized morning greetings with empathic tone.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FaRegCalendar,
    title: 'Mini Self-Care Practices',
    description: 'Simple daily routines: 4x4 breathing, gratitude, mindful walking. All guided by voice.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: AiOutlineRise,
    title: 'Follow-up of Healthy Habits',
    description: 'Visualize your progress in sleep, eating, outdoor time and social contact.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: LuZap,
    title: 'Intelligent Alerts',
    description: 'Automatic analysis of emotional patterns with proactive wellness recommendations.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: MdPeopleOutline,
    title: 'Support Network and Community',
    description: 'Connect with peer groups, real wellness stories and access to certified professionals.',
    color: 'from-teal-500 to-blue-500'
  },
];

function Features() {
  return (
    <section className='flex flex-wrap justify-center w-lvw gap-6 px-4 bg-[rgb(var(--background-2))]'>
      <div className='w-full flex flex-col gap-4 text-center mb-10 mt-10'>
        <h2 className='text-5xl leading-tight font-bold bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 bg-clip-text text-transparent w-full'>
          Everything you need for your daily well-being
        </h2>
        <p className='text-white max-w-3xl mx-auto text-lg'>
            Tools designed by wellness experts, powered by conversational AI
            to accompany you in your personal growth.
        </p>
      </div>

      {features.map((feature, index) => (
        <div
          key={index}
          className={`group relative w-full max-w-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border animate-fade-in-up bg-white/5 backdrop-blur`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

          <div className="relative">
            <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${feature.color} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}>
              <feature.icon className="w-8 h-8 text-white" />
            </div>

            <h3 className={`text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 transition-all duration-300 text-white`}>
              {feature.title}
            </h3>

            <p className="leading-relaxed text-white">
              {feature.description}
            </p>

            <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
          </div>
        </div>
      ))}



        <div className="flex flex-col mt-20 w-6/8 rounded-3xl p-8 mb-14 md:p-12 transition-all duration-500 relative overflow-hidden hover:shadow-xl bg-gradient-to-r from-emerald-100/40 to-blue-100/40 dark:from-gray-800 dark:to-gray-700 animate-fade-in-up">
            <div className='flex flex-col gap-3 text-center mb-8'>
                <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
                    Powered by state-of-the-art technology</h3>
                <p className='max-w-2xl mx-auto text-gray-600 dark:text-gray-300'>We integrate the best AI tools to create a unique and personalized wellness experience.</p>

            </div>
            <div className="flex flex-wrap items-center justify-center gap-12">
                {[
                    { name: 'ElevenLabs', desc: 'IA de Voz', icon: '🎙️' },
                    { name: 'Tavus', desc: 'Avatar IA', icon: '🤖' },
                    { name: 'RevenueCat', desc: 'Suscripciones', icon: '💎' },
                ].map((tech, index) => (
                <div
                        key={index}
                        className="text-center w-36 p-4 rounded-xl shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up group bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                        style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                    >
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-white">{tech.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{tech.desc}</div>
                </div>
                    ))}
            </div>
        </div>
    </section>
  );
}

export default Features;
