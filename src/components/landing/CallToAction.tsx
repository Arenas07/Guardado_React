import '../../styles/global.css'
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { FaMicrophone, FaArrowRight } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";


function CallToAction(){
    return(
        <section className='py-20 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 relative overflow-hidden'>
            
      
            <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center mb-8">
                    <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                        <CiHeart className="w-12 h-12 text-white" />
                    </div>
                </div>
        
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to start your
                    <br />
                    <span className="text-yellow-300">wellness trip?</span>
                </h2>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Start your journey to emotional wellness with Habita today. Your AI partner is ready to accompany you from the very first moment.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {[
            { icon: <FaMicrophone className="w-5 h-5 text-white mr-2" />, text: 'Check-in por voz' },
            { icon: <CiHeart className="w-5 h-5 text-white mr-2" />, text: 'IA empática' },
            { icon: <MdOutlineSmartphone className="w-5 h-5 text-white mr-2" />, text: 'Disponible 24/7' }
          ].map((feature, index) => (
            <div key={index} className="flex items-center bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              {feature.icon}
              <span className="text-white font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
          <Link
            to="/register"
            className="group inline-flex items-center justify-center px-10 py-4 bg-white text-emerald-600 text-lg font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <FaMicrophone className="mr-3 h-6 w-6" />
            Get started for free now
            <FaArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-lg font-bold rounded-2xl text-white bg-transparent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            I already have an account
          </Link>
        </div>
    </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80 text-sm">
          <div className="flex items-center">
            <span className="mr-2">✓</span>
            <span>Free to start</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✓</span>
            <span>Sin tarjeta de crédito</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✓</span>
            <span>No credit card</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✓</span>
            <span>100% private and secure</span>
          </div>
        </div>
        </section>
    )
}

export default CallToAction