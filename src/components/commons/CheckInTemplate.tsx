import '../../styles/global.css';
import { FaMicrophone as Mic } from "react-icons/fa";

function CheckInEmotional() {
  return (
    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
      <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md transform hover:scale-105 transition-all duration-500">
        <div className="rounded-2xl p-8 shadow-xl border bg-[rgb(var(--background-2))] border-[rgb(var(--light-dark-container))] transition-all duration-300 hover:shadow-2xl">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-[rgb(6,78,59)] to-[rgb(17,24,39)]">
              <Mic className="h-8 w-8 text-[rgb(var(--light-green))]" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[rgb(var(--default-contrast))]">
              Daily Emotional Check-in
            </h3>
            <p className="text-sm mb-6 text-[rgb(var(--default-contrast))]">
              "Hi, I'm your wellness companion. How are you feeling today?"
            </p>

            
            <div className="flex justify-center flex-wrap gap-2 mb-6">
              {["😢", "😕", "😐", "😊", "😄"].map((emoji, index) => (
                <button
                  key={index}
                  className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-3 ${index === 3 ? 'bg-[rgb(6,78,59)] scale-110 shadow-md' : 'hover:bg-[rgba(var(--default-contrast),0.1)]'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-2xl">{emoji}</span>
                </button>
              ))}
            </div>

            
            <div className="rounded-xl p-4 mb-4 bg-gradient-to-r from-[rgba(6,78,59,0.2)] to-[rgba(17,24,39,0.2)]">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              <p className="text-xs text-[rgb(var(--default-contrast))]">
                Voice interaction activated
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckInEmotional;
