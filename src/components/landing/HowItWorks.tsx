import '../../styles/global.css';
import { MdVerifiedUser } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { AiOutlineRise } from "react-icons/ai";
import { LuZap } from "react-icons/lu";
import { IoShieldOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";


const steps = [
{
    icon: <MdVerifiedUser className="w-8 h-8" />,
    title: 'Verificación de Red de Apoyo',
    description: 'Confirma que tienes al menos una persona de apoyo en tus contactos de emergencia. Tu bienestar es nuestra prioridad.',
    color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    gradient: 'from-blue-500 to-cyan-500'
},
{
    icon: <CiHeart className="w-8 h-8" />,
    title: 'Bienvenida Personalizada',
    description: 'Cada mañana, tu avatar IA te saluda con un mensaje adaptado a tu patrón emocional de los últimos días.',
    color: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400',
    gradient: 'from-emerald-500 to-green-500'
},
{
    icon: <AiOutlineRise className="w-8 h-8" />,
    title: 'Check-in Emocional por Voz',
    description: 'Habla con tu compañero emocional sobre cómo te sientes. La IA te ayuda a nombrar emociones sin juzgar.',
    color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
    gradient: 'from-purple-500 to-pink-500'
},
{
    icon: <LuZap className="w-8 h-8" />,
    title: 'Prácticas de Autocuidado',
    description: 'Elige una práctica diaria: respiración, gratitud, caminata mindful. Todo guiado por voz, sin complicaciones.',
    color: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
    gradient: 'from-orange-500 to-red-500'
},
{
    icon: <IoShieldOutline className="w-8 h-8" />,
    title: 'Seguimiento Inteligente',
    description: 'Registra hábitos saludables y recibe alertas automáticas si detectamos patrones que requieren atención.',
    color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400',
    gradient: 'from-yellow-500 to-orange-500'
},
{
    icon: <FaUsers className="w-8 h-8" />,
    title: 'Conecta y Crece',
    description: 'Únete a comunidades de bienestar, comparte historias reales y accede a profesionales certificados.',
    color: 'bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400',
    gradient: 'from-teal-500 to-blue-500'
  },
];

function HowItWorks() {
  return (
    <section className="py-20 px-6 md:px-12">
        <div className="w-full text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">How Habita works</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Your path to emotional well-being in six simple steps, designed to accompany you without being invasive.
            </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative group w-full sm:w-[45%] lg:w-[30%] flex-shrink-0"
          >
            <div className="rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border h-full bg-white/5 backdrop-blur-md dark:border-gray-700">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {index + 1}
              </div>

              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 transition-all duration-300 text-white">
                {step.title}
              </h3>

              <p className="leading-relaxed text-gray-200 dark:text-gray-300">
                {step.description}
              </p>

              <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${step.gradient} rounded-full transition-all duration-500`}></div>
            </div>
          </div>
        ))}
        </div>



    </section>
  );
}

export default HowItWorks;
