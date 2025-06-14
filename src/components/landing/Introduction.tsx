import '../../styles/global.css';
import { Link } from 'react-router-dom';
import { FaMicrophone, FaArrowRight } from "react-icons/fa";
import CheckInEmotional from '../commons/CheckInTemplate'
function Introduction(){
    return(
    <>
        <section className='flex pt-10 mx-10 flex-row items-center w-full'
        style={{
                backgroundImage: `linear-gradient(135deg, rgb(var(--background-1)) 0%, rgb(var(--background-1)) 40%, rgb(var(--background-2)) 100%)`
        }}>
            <div className='flex w-1/2 max-w-6/12'>
                <div className=''>
                    <div className='mb-4 flex p-1 w-max rounded-full bg-[rgb(var(--dark-green))]'>
                        <p className='inline-flex text-[rgb(var(--light-green))] items-center px-3 py-1 text-sm font-medium'>
                            🌱 Your daily wellness partner.
                        </p>
                    </div>


                    <div className='flex flex-col '>
                        <h1 className='text-white text-4xl font-bold sm:text-5xl md:text-6xl animate-fade-in-up'>
                            Your digital space for  
                            <span className='text-emerald-700 dark:text-emerald-300'> emotional wellbeing</span> <br />
                            and personal productivity
                        </h1>


                        <h3 className='mt-6 max-w-md mx-auto text-lg sm:text-xl md:mt-8 md:max-w-3xl lg:mx-0 text-white'>
                            Habita combines
                            <strong> voice and artificial intelligence </strong>
                             to help you manage your emotions, cultivate self-care habits and stay motivated every day.
                            <span className='text-emerald-700 dark:text-emerald-300 font-medium'> It's not therapy </span>
                            - it's your personal wellness tool.
                        </h3>
                    </div>


                    <div className='mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0'>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Link
                        to="/register"
                        className='inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105'
                    >
                        <FaMicrophone className='mr-3' />
                        <span>Comenzar mi <br /> bienestar</span>
                        <FaArrowRight className='ml-12' />
                    </Link>
                </div>
            </div>
                <div className='mt-8 p-4 rounded-lg border border-blue-500/30 bg-blue-900/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md animate-fade-in-up'>
                    <p className='text-sm text-white'>
                    <strong>Importante:</strong> 
                    Habita no es una herramienta médica ni reemplaza la atención profesional en salud mental. Si necesitas ayuda clínica, consulta con un psicólogo certificado.
                    </p>
                </div>

                </div>
            </div>
            <div className='flex w-1/2 items-center justify-center'>
                <CheckInEmotional />
            </div>
        </section>
        </>
    )
}

export default Introduction;