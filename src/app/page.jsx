// app/page.jsx
'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import TypeWriter from '../../components/TypeWriter';
import fotoPerfil from '../../public/perfil.png'; 
import SkillsSection from '../../components/SkillsSection';
import Image from 'next/image';

import ExperienceSection from '../../components/ExperienceSection';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import ProjectsSection from '../../components/ProjectsSection';
import About from '../../components/About';
export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Sección Home */}
      <section id="home" className="sm:min-h-screen min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[60%_40%] gap-10 lg:gap-0 items-center">
            
            {/* Texto - 60% */}
            <div className="text-white space-y-3  lg:space-y-6">
              <div className="space-y-3 lg:space-y-4">
                <p className="text-lg lg:text-3xl text-purple-300 font-light">Hola, soy</p>
                <h1 className="text-4xl lg:text-7xl font-bold">
                  Patricio <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">Guerrero</span>
                </h1>
                <p className="text-xl lg:text-3xl text-purple-200 font-medium min-h-[2rem] lg:min-h-[2.5rem]">
                  <TypeWriter 
                    text="Desarrollador Web FullStack"
                    speed={80}
                    className="text-purple-200 font-medium"
                  />
                </p>
              </div>
              
              <p className="text-base text-justify lg:text-xl text-gray-300 leading-relaxed max-w-xl">
Desarrollador Fullstack especializado en el ecosistema JavaScript, enfocado en crear aplicaciones web modernas, escalables y con una excelente experiencia de usuario.
Además de mi trabajo en desarrollo, tengo experiencia en la automatización de procesos mediante PowerShell y en el análisis de datos con Power BI, integrando la eficiencia técnica con la toma de decisiones basada en información.
              </p>
              
              <div className="flex flex-wrap gap-3 lg:gap-4 pt-4 lg:pt-6">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg">
                  Descargar CV
                </button>
               <a 
  href="#contacto" 
  className="border border-purple-400 text-purple-300 px-6 lg:px-8 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-xl hover:bg-purple-400/10 transition duration-300"
>
  Contactar
</a>

              </div>
            </div>
            
            {/* Imagen - 40% */}
            <div className="flex justify-center">
              <div className="relative w-56 h-56 lg:w-115 lg:h-115">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-spin-slow" style={{animationDuration: '8s'}}></div>
                <div className="absolute inset-2 bg-slate-900 rounded-full"></div>
                <Image
                  src={fotoPerfil}
                  alt="Patricio Guerrero"
                  fill
                  className="rounded-full object-cover p-2"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

<About />   
<SkillsSection />
<ExperienceSection />
<ProjectsSection/>
<ContactSection/>
<Footer/>
    </div>
  );
}