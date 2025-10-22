'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectsSection = () => {
const projects = [
  {
    id: 1,
    title: "Landing Page Hospital Villarrica",
    description:
      "Sitio web informativo diseñado para el Hospital de Villarrica, enfocado en comunicar actualizaciones, noticias y orientaciones relevantes para pacientes y visitantes.",
    image: "https://i.imgur.com/2WtIn3g.png",
    technologies: ["React", "Next.js", "CSS", "Tailwind"],
    demoUrl: "https://calidadhvr.cl/",
    repoUrl: "https://github.com/PatoGuerrero96/page-villarica",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Cimiento Clínico",
    description:
      "Plataforma integral de telemedicina que permite la gestión de horas médicas, videoconsultas y administración de fichas clínicas, optimizando la atención remota de pacientes.",
    image: "https://i.imgur.com/y8NrrN7.png",
    technologies: ["Node.js", "Express.js", "MongoDB", "React", "Vite"],
    demoUrl: "https://cimiento-front.vercel.app",
    repoUrl: "https://github.com/PatoGuerrero96/FrontendCimiento",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Tienda Henko",
    description:
      "Sistema completo de e-commerce con panel de administración y una interfaz de compra intuitiva, diseñado para la venta en línea de prendas personalizadas.",
    image: "https://i.imgur.com/rvHRG1f.png",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "HTML5"],
    demoUrl: "https://henkobordados.cl/",
    repoUrl: "#",
    category: "Full Stack",
  },
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="proyectos" className="h-full flex items-center justify-center py-20 lg:py-36">
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
         <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">Proyectos</span>
          </h2>
        </motion.div>

        {/* Grid de Proyectos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-justify"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-56 overflow-hidden">
        <Image
  src={project.image}
  alt={project.title}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
/>
                {/* Overlay y categoría */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-4 right-4 bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </span>
              </div>

              {/* Contenido de la card */}
              <div className="p-6">
                {/* Título y descripción */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.demoUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 text-sm"
                  >
                    Visualizar
                  </motion.a>
                  <motion.a
                    href={project.repoUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-slate-700/50 text-gray-300 text-center py-2 px-4 rounded-lg font-semibold hover:bg-slate-600/50 hover:text-white transition-all duration-300 text-sm border border-purple-500/20"
                  >
                    Repositorio
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;