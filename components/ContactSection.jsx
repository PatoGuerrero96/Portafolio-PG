import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );     
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.current.reset();
      
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {

      let errorMessage = 'Error al enviar el mensaje. Por favor, intenta nuevamente.';
      
      if (error?.status === 0) {
        errorMessage = 'Error de conexión. Verifica tu internet.';
      } else if (error?.status === 400) {
        errorMessage = 'Datos del formulario inválidos.';
      } else if (error?.status === 401) {
        errorMessage = 'Error de autenticación. Verifica las claves de EmailJS.';
      } else if (error?.status === 402) {
        errorMessage = 'Límite de emails excedido.';
      } else if (error?.text) {
        errorMessage = `Error: ${error.text}`;
      }

      console.log('❌ 16. Mensaje de error para usuario:', errorMessage);
      
      setIsSubmitting(false);
      setError(errorMessage);
    }
  };

  return (
    <section id="contacto" className="min-h-screen flex items-center justify-center py-20 lg:py-36">
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
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">Contáctame</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mb-6"></div>

        </motion.div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            
            {/* Mensaje de error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500/40 rounded-xl p-4 mb-6 text-center"
              >
                <p className="text-red-200">{error}</p>
                <p className="text-red-300 text-sm mt-2">
                  Si el problema persiste, contáctame directamente a gpatricio515@gmail.com
                </p>
              </motion.div>
            )}

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Envíame un Mensaje</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-500/40 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h4 className="text-green-300 font-bold text-xl mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-green-200">Te responderé a la brevedad. ¡Gracias!</p>
                </motion.div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label htmlFor="user_name" className="block text-white font-medium mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="user_email" className="block text-white font-medium mb-2">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors"
                      placeholder="tu.email@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="asunto" className="block text-white font-medium mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="asunto"
                      name="asunto"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors"
                      placeholder="Asunto del mensaje"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors resize-none"
                      placeholder="Escribe aquí tu mensaje..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      "Enviar Mensaje"
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;