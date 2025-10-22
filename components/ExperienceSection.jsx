import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
{
  id: 1,
  title: "Desarrollador FullStack Freelance",
  company: "Freelance",
  period: "Enero 2025 - Presente",
  description: "Desarrollo de aplicaciones web fullstack, creando soluciones personalizadas con enfoque en eficiencia y experiencia de usuario. Especializado en tecnologías modernas como React, Next.js, Node.js y bases de datos en la nube.",
  technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind"],
  type: "current",
},

{
  id: 2,
  title: "Consultor de Implementación",
  company: "SONDA",
  period: "Octubre 2023 - Septiembre 2024",
  description: "Responsable de automatización de procesos mediante PowerShell, optimización de tareas repetitivas y aumento de eficiencia operativa. Administración de WSUS, Active Directory y SCCM para garantizar el correcto funcionamiento de los sistemas y cumplimiento de normativas internas. Análisis y transformación de datos con visualización en Power BI, facilitando la toma de decisiones informadas y la mejora continua de procesos empresariales.",
  technologies: ["PowerShell", "WSUS", "Active Directory", "SCCM", "Power BI"],
  type: "job",
  logo: "/job2.png" 
},


{
  id: 3,
  title: "Desarrollador FullStack",
  company: "Proyecto Cimiento Clínico",
  period: "2023 - 2024",
  description: "Desarrollador FullStack del sistema de telemedicina, responsable de implementar funcionalidades de videoconsulta, gestión de pacientes y administración de historiales médicos digitales, asegurando una experiencia de usuario fluida y confiable.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "WebRTC"],
  type: "project",
},

{
  id: 4,
  title: "Consultor TI",
  company: "Orbis Data",
  period: "Octubre 2022 - Diciembre 2023",
  description: "Desarrollo de interfaces web utilizando HTML, CSS y React, enfocadas en una experiencia de usuario optimizada y diseño responsivo. Integración de microservicios a nivel de frontend para consumir datos de APIs y mejorar la modularidad de la aplicación. Colaboración en equipos bajo metodologías ágiles, contribuyendo a un desarrollo iterativo y eficiente.",
  technologies: ["HTML", "CSS", "React", "APIs", "Microservicios"],
  type: "job",
  logo: "/job1.jpg" 
},

  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.5, type: "spring" }
    }
  };

  return (
    <section id="experiencia" className="h-full flex items-center justify-center py-20 lg:py-40">
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
         <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">Experiencia</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Recorrido profesional en los que he participado como desarrollador e ingeniero en Informática
          </p>
        </motion.div>

        {/* Timeline */}
 <div className="hidden sm:block relative">  
          {/* Línea vertical del timeline */}
          <div className=" absolute left-6 lg:left-1/2 transform lg:-translate-x-1 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-600"></div>
          
          {/* Experiencias */}
          <div className="">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={itemVariants}
                className={`relative flex flex-col lg:flex-row ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                } items-center lg:items-start`}
              >
                
                {/* Punto del timeline */}
                <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2  w-4 h-4 bg-purple-500 rounded-full z-10 border-4 border-slate-900"></div>
                
                {/* Contenido */}
                <div className={`lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'
                } ml-12 lg:ml-0`}>
                  
                  {/* Tarjeta de experiencia */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  >
                    {/* Icono y título */}
<div className={`flex items-center mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
  {/* Logo de la empresa, solo si NO es proyecto */}
  {exp.type !== 'project' && exp.logo && (
    <motion.div
      variants={iconVariants}
      className="w-12 h-12 rounded-lg flex items-center justify-center mr-3 overflow-hidden"
    >
      <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain"/>
    </motion.div>
  )}

  <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
    <h3 className="text-xl lg:text-2xl font-bold text-white">{exp.title}</h3>
    <p className="text-purple-300 font-medium">{exp.company}</p>
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${
      exp.type === 'current' 
        ? 'bg-green-500/20 text-green-300' 
        : exp.type === 'job' 
        ? 'bg-blue-500/20 text-blue-300'
        : exp.type === 'project'
        ? 'bg-purple-500/20 text-purple-300'
        : 'bg-yellow-500/20 text-yellow-300'
    }`}>
      {exp.type === 'current' ? 'Actual' : 
       exp.type === 'job' ? 'Empleo' : 
       exp.type === 'project' ? 'Proyecto' : 'Práctica'}
    </span>
  </div>
</div>


                    {/* Periodo */}
                    <div className={`mb-4 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      <span className="text-purple-400 font-semibold">{exp.period}</span>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Tecnologías */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Línea de tiempo móvil alternativa */}
        <div className="lg:hidden mt-12">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-lg">{exp.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                    <p className="text-purple-300">{exp.company}</p>
                    <span className="text-purple-400 text-sm font-semibold">{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-1">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;