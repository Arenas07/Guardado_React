import '../../styles/global.css';
import { Link } from 'react-router-dom';
import { FaMicrophone, FaArrowRight } from "react-icons/fa";
import CheckInEmotional from '../commons/CheckInTemplate'
function Introduction(){
    return(
    <>
        <section
        className="flex flex-col md:flex-row items-center w-full px-6 md:px-10 pt-10 pb-10 gap-8"
        style={{
            backgroundImage: `linear-gradient(135deg, rgb(var(--background-1)) 0%, rgb(var(--background-1)) 40%, rgb(var(--background-2)) 100%)`,
        }}
        >
    <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div className="mb-2 w-max rounded-full bg-[rgb(var(--dark-green))] px-3 py-1 text-sm font-medium text-[rgb(var(--light-green))]">
            🌱 Your daily wellness partner.
        </div>

        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold animate-fade-in-up">
            Your digital space for{" "}
            <span className="text-emerald-700 dark:text-emerald-300">
            emotional wellbeing
            </span>{" "}
            <br />
            and personal productivity
        </h1>

        <h3 className="text-white text-base sm:text-lg md:text-xl max-w-xl animate-fade-in-up">
            Habita combines <strong>voice and artificial intelligence</strong> to help you manage your emotions, cultivate self-care habits and stay motivated every day.{" "}
            <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                It's not therapy
            </span>{" "}
            - it's your personal wellness tool.
        </h3>

        <div className="mt-4 sm:mt-6">
        <Link
            to="/register"
            className="inline-flex items-center justify-center gap-4 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-white text-base font-medium bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
        >
            <FaMicrophone className="text-lg" />
            <span className="text-sm sm:text-base leading-tight text-center">
                Comenzar mi <br /> bienestar
            </span>
            <FaArrowRight className="text-lg" />
        </Link>
        </div>

        <div className="mt-6 p-4 rounded-lg border border-blue-500/30 bg-blue-900/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md animate-fade-in-up text-sm text-white">
            <strong>Importante:</strong> Habita no es una herramienta médica ni
            reemplaza la atención profesional en salud mental. Si necesitas ayuda
            clínica, consulta con un psicólogo certificado.
            </div>
        </div>

    <div className="w-full md:w-1/2 flex justify-center items-center">
        <CheckInEmotional />
    </div>
    </section>
        </>
    )
}

export default Introduction;