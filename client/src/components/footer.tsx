import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Aashritha Mogalluru</h3>
          <p className="text-slate-400 mb-6">Industrial & Systems Engineering Graduate</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:mogalluruven@wisc.edu" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aashritha9/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a 
              href="tel:+16082138368" 
              className="text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Phone"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400">
              &copy; {currentYear} Aashritha Mogalluru. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
