import { motion } from 'framer-motion';
const About = () => {


  return (
<section id="about" className="h-full flex flex-col items-center justify-center py-20 lg:py-36">
  {/* Título centrado arriba */}
  <motion.div 
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl lg:text-5xl font-bold text-white">
      <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
        Sobre Mi
      </span>
    </h2>
    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mt-4"></div>
  </motion.div>

  {/* Contenido principal */}
  <div className="flex items-center justify-center w-full">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Columna Izquierda */}
<motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-white space-y-6 lg:space-y-8"
>
  <motion.p 
    className="text-lg lg:text-xl text-gray-300 leading-relaxed text-justify lg:text-left"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    viewport={{ once: true }}
  >
    Soy un <span className="text-purple-300 font-semibold">Desarrollador FullStack</span> con más de dos años de experiencia en 
    <span className="text-purple-300 font-semibold"> desarrollo web</span> y 
    <span className="text-purple-300 font-semibold"> automatización de procesos</span>. Me titulé de 
    <span className="text-purple-300 font-semibold"> Ingeniería en Informática</span> en 
    <span className="text-purple-300 font-semibold"> Duoc UC, sede Viña del Mar</span>, donde fortalecí mi base técnica y 
    mi interés por crear soluciones eficientes y bien estructuradas.
  </motion.p>

  <motion.p 
    className="text-lg lg:text-xl text-gray-300 leading-relaxed text-justify lg:text-left"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    viewport={{ once: true }}
  >
    He participado en distintos proyectos TI, asumiendo roles que van desde 
    <span className="text-purple-300 font-semibold"> desarrollador</span> hasta 
    <span className="text-purple-300 font-semibold"> jefe de proyecto</span> o 
    <span className="text-purple-300 font-semibold"> consultor TI</span>.  
    Esta experiencia me ha permitido comprender el ciclo completo del desarrollo, adaptarme a diferentes necesidades y aportar una visión integral en cada etapa del proceso.
  </motion.p>
</motion.div>


        
        {/* Columna Derecha */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8 sm:pt-10 pt-0"
        >
          {/* Tarjeta Educación */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-purple-500/20 cursor-pointer"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Educación</h3>
                <p className="text-purple-300">Formación Académica</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold">Ingeniería en Informática</h4>
              <p className="text-purple-300">Duoc UC - Sede Viña del Mar (2023)</p>
            </div>
          </motion.div>

          {/* Tarjeta Certificación */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-purple-500/20 cursor-pointer"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Certificación</h3>
                <p className="text-purple-300">DP-900: Azure Data Fundamentals</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold">
                Microsoft Certified: Azure Data Fundamentals
              </h4>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

  );
};

export default About;