import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript,SiWordpress,SiNodedotjs,SiExpress, SiPython, SiReact, SiAngular, SiDjango, SiNextdotjs, SiMongodb, SiOracle, SiMysql, SiTailwindcss, SiGit, SiGithub } from 'react-icons/si';
import { VscTerminalPowershell } from "react-icons/vsc";
const SkillsSection = () => {
  const skills = [
    { name: 'HTML5', icon: SiHtml5, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', icon: SiCss3, color: 'from-blue-500 to-blue-600' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'from-teal-400 to-cyan-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'from-yellow-400 to-yellow-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'from-gray-700 to-gray-900' },
    { name: 'React', icon: SiReact, color: 'from-cyan-400 to-blue-500' },
    { name: 'Python', icon: SiPython, color: 'from-blue-400 to-green-500' },
    { name: 'Angular', icon: SiAngular, color: 'from-red-500 to-red-600' },
    { name: 'Django', icon: SiDjango, color: 'from-green-600 to-green-700' },
    { name: 'Wordpress', icon: SiWordpress, color: 'from-gray-300 to-gray-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'from-green-500 to-green-600' },
    { name: 'Express', icon: SiExpress, color: 'from-gray-400 to-gray-600' },
    { name: 'MongoDB', icon: SiMongodb, color: 'from-green-500 to-green-600' },
    { name: 'Oracle', icon: SiOracle, color: 'from-red-600 to-red-700' },
    { name: 'MySQL', icon: SiMysql, color: 'from-blue-600 to-blue-700' },
    { name: 'Git', icon: SiGit, color: 'from-orange-600 to-red-600' },
    { name: 'GitHub', icon: SiGithub, color: 'from-gray-700 to-gray-900' },
    { name: 'Powershell', icon: VscTerminalPowershell, color: 'from-blue-700 to-blue-900' },
  
  ];

  // Animación escalonada para los iconos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="habilidades" className="h-full flex items-center justify-center py-20 lg:py-36">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
         <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para crear aplicaciones modernas y eficientes
          </p>
        </motion.div>

        {/* Grid de Habilidades */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-9 gap-6 lg:gap-9"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.15, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="flex flex-col items-center group"
              >
                <div className={`
                  relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl 
                  bg-gradient-to-br ${skill.color} 
                  flex items-center justify-center
                  shadow-lg group-hover:shadow-xl
                  transition-all duration-300
                `}>
                  <IconComponent className="text-white text-2xl lg:text-3xl" />
                  
                  {/* Efecto de brillo al hover */}
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Nombre de la skill */}
                <span className="text-white text-sm lg:text-base font-medium mt-3 text-center group-hover:text-purple-300 transition-colors duration-300">
                  {skill.name}
                </span>
                
                {/* Tooltip opcional */}
                <div className="absolute -top-10 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {skill.name}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;