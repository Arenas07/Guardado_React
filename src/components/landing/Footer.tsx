import '../../styles/global.css';
import { GoAlertFill } from "react-icons/go";
import { FaShield } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="transition-all duration-500">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Intro Text */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1">
            <p className="text-gray-400 max-w-full mb-6 leading-relaxed">
              Your digital space for emotional well-being and personal productivity.
              We combine voice and artificial intelligence to accompany you in your daily growth.
            </p>
          </div>
        </div>

        
        <div className="mt-12 pt-8 border-t border-gray-700">
          
          <div className="bg-yellow-900/20 border border-yellow-800 rounded-xl p-6 mb-8">
            <div className="flex items-start">
              <GoAlertFill className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                  Important Wellness Notice
                </h4>
                <p className="text-yellow-200 text-sm leading-relaxed">
                  <strong>Habita is not a medical tool and does not replace professional mental health care.</strong>
                  If you are experiencing a mental health crisis, please contact your local emergency services
                  immediately. Habita is a complementary wellness tool designed for daily self-care.
                </p>
              </div>
            </div>
          </div>

          
          <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-6 mb-8">
            <div className="flex items-start flex-col md:flex-row md:items-start md:justify-start">
              <FaShield className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">
                  Immediate Crisis Resources
                </h4>
                <div className="flex flex-wrap gap-6 text-sm">
                  {[
                    {
                      country: "United States",
                      lines: [
                        "Line 911: Emergencies",
                        "Line 988: Mental health",
                      ]
                    },
                    {
                      country: "United Kingdom",
                      lines: [
                        "Line 999: Emergencies",
                        "Samaritans 116 123: Mental health",
                      ]
                    },
                    {
                      country: "Canada",
                      lines: [
                        "Line 911: Emergencies",
                        "Talk Suicide 1-833-456-4566: Mental health",
                      ]
                    },
                    {
                      country: "Australia",
                      lines: [
                        "Line 000: Emergencies",
                        "Lifeline 13 11 14: Mental health",
                      ]
                    }
                  ].map((item, i) => (
                    <div key={i} className="min-w-[200px]">
                      <p className="text-blue-300 font-medium">{item.country}</p>
                      {item.lines.map((line, idx) => (
                        <p key={idx} className="text-blue-200">{line}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
          <div className="text-center">
            <p className="text-gray-500 text-xs">
              Category: Wellness, Self-care, Lifestyle
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                'React', 'Flutter', 'C#', 'PostgreSQL', 'Supabase',
                'ElevenLabs', 'Tavus', 'RevenueCat'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full hover:bg-gray-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
