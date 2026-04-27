import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, HeartPulse } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="bg-[var(--bg)]">
      {/* Intro Section */}
      <section className="py-20 lg:py-32">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="img-container aspect-[3/4] shadow-[var(--shadow-lg)] sticky top-32">
                <img 
                  src="https://lh3.googleusercontent.com/d/1wOC1YbxJJ3gS1hRxOTdABZm4vMaexZ62" 
                  alt="Dra. Joyce Radis em consultório" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="mb-12">Olhar humano, <br/><span className="italic">raciocínio técnico</span></h1>
                <div className="space-y-8 text-lg text-[var(--muted)] leading-relaxed">
                  <p>
                    A medicina, para mim, exige mais do que apenas a aplicação de protocolos. Exige atenção real, presença e um raciocínio cuidadoso sobre cada detalhe que o paciente traz.
                  </p>
                  <p>
                    Sou médica formada pelo <strong>Centro Universitário do Espírito Santo (UNESC)</strong>. Minha trajetória foi construída através da experiência prática em diferentes níveis de atenção à saúde.
                  </p>
                  <p>
                    Desde o acompanhamento de pacientes crônicos até a atuação em situações de urgência, sempre busquei uma prática que unisse a resolutividade técnica ao acolhimento humano.
                  </p>
                  <p>
                    Hoje, divido minha atuação entre o cuidado direto a pacientes em consultório e a atuação assistencial documental, onde ajudo a estruturar casos complexos através da análise técnica rigorosa.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20 pt-16 border-t border-[var(--line)]">
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-[var(--deep)] mb-4 flex items-center gap-2">
                      <Award size={14} className="text-[var(--accent)]" /> Formação
                    </h4>
                    <p className="text-sm text-[var(--muted)]">Medicina pelo Centro Universitário do Espírito Santo (UNESC).</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold text-[var(--deep)] mb-4 flex items-center gap-2">
                      <HeartPulse size={14} className="text-[var(--accent)]" /> Atuação
                    </h4>
                    <p className="text-sm text-[var(--muted)]">Clínica Médica Adulto e Assistencial Documental.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[var(--surface)]" aria-labelledby="values-heading">
        <div className="site-container">
          <div className="text-center mb-20">
            <h2 id="values-heading" className="italic font-serif mb-6">Três pilares de conduta</h2>
            <div className="w-24 h-px bg-[var(--accent)] mx-auto opacity-30" aria-hidden="true"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <article className="text-center">
              <h3 className="text-2xl font-serif mb-4">Presença</h3>
              <p className="text-sm text-[var(--muted)]">Estar inteira no atendimento, garantindo que o paciente seja realmente ouvido.</p>
            </article>
            <article className="text-center">
              <h3 className="text-2xl font-serif mb-4">Clareza</h3>
              <p className="text-sm text-[var(--muted)]">Informação acessível e organizada, eliminando dúvidas e inseguranças.</p>
            </article>
            <article className="text-center">
              <h3 className="text-2xl font-serif mb-4">Rigor</h3>
              <p className="text-sm text-[var(--muted)]">Fundamentação técnica e ética em cada conduta ou análise documental.</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
