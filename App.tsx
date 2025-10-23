import React from 'react';
import ActionButton from './components/ActionButton';
import { InstagramIcon, WhatsAppIcon, PhoneIcon, LinkedInIcon } from './components/icons';

const App: React.FC = () => {
  const buttonClassName = "bg-[#0C3491] hover:bg-[#0a2a7a]";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center justify-center p-4 font-sans selection:bg-blue-500 selection:text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-gray-50 to-white z-0"></div>
      <main className="relative z-10 w-full max-w-lg mx-auto bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center text-center border border-gray-200/80">
        
        <img 
          src="https://files.catbox.moe/uobguf.png" 
          alt="AheadU Learning Logo" 
          className="w-56 h-56 sm:w-64 sm:h-64 mb-6 object-contain"
        />
        
        <p className="text-gray-600 mb-8">Connect with us and join our community.</p>
        
        <div className="w-full flex flex-col items-center">
          <ActionButton
            href="https://www.instagram.com/aheadu_"
            text="Follow on Instagram"
            icon={<InstagramIcon />}
            className={buttonClassName}
          />
          <ActionButton
            href="https://api.whatsapp.com/send/?phone=919446976393&text&type=phone_number&app_absent=0"
            text="Message on WhatsApp"
            icon={<WhatsAppIcon />}
            className={buttonClassName}
          />
          <ActionButton
            href="tel:+919446976393"
            text="Call Us"
            icon={<PhoneIcon />}
            className={buttonClassName}
          />
          <ActionButton
            href="https://blank.page/"
            text="LinkedIn Webinar Registration"
            icon={<LinkedInIcon />}
            className={buttonClassName}
          />
        </div>

      </main>

      <footer className="relative z-10 mt-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AheadU Learning. All rights reserved.
      </footer>
    </div>
  );
};

export default App;