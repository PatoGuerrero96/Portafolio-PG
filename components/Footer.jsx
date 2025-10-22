import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
 <footer className="bg-slate-900/70 border-t border-purple-500/30">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Iconos */}
          <motion.div 
            className="flex space-x-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="https://github.com/tu-usuario" className="text-3xl text-gray-400 hover:text-white transition-colors">
              <SiGithub />
            </a>
            <a href="https://linkedin.com/in/tu-usuario" className="text-3xl text-gray-400 hover:text-blue-400 transition-colors">
              <SiLinkedin />
            </a>
          </motion.div>

          {/* Texto con estilo de código */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <code className="bg-slate-800/50 px-4 py-2 rounded-lg border border-purple-500/20">
              <span className="text-blue-400">const</span>{" "}
              <span className="text-yellow-400">developer</span> = {"{"}{" "}
              <span className="text-green-400">name</span>: 
              <span className="text-purple-400">"Patricio Guerrero"</span>,{" "}
              <span className="text-green-400">year</span>: 
              <span className="text-cyan-400">{currentYear}</span>{" "}
              {"}"}
            </code>
          </motion.div>

          {/* Mensaje pequeño */}
          <motion.p 
            className="text-gray-500 text-xs text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
           Desarrollado con ❤️ usando Next.js & Tailwind CSS
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;