import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const reviews = [
    "Excelente profissional, dedicada e com atendimento humanizado.",
    "A melhor clínica geral que encontramos para acompanhar meus pais.",
    "Transmite segurança e clareza total em todas as orientações."
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative site-container py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--muted)] mb-6">
              Cuidado clínico e rigor documental
            </span>
            <h1 className="mb-8">
              Atendimento médico <br/>
              <span className="italic">atento e criterioso</span>
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-xl mb-12">
              Uma abordagem que une escuta dedicada ao paciente e precisão técnica na análise assistencial documental. Clareza, organização e responsabilidade em cada detalhe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/pacientes" className="btn btn-primary group">
                Para Pacientes
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/assistencial" className="btn btn-outline">
                Atuação Assistencial
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="img-container aspect-[4/5] shadow-[var(--shadow-lg)]">
              <img 
                src="https://lh3.googleusercontent.com/d/1bczzP4w2X4BnOXibZJ5rAxlLGCrxc_N2" 
                alt="Dra. Joyce Radis" 
                className="hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep)]/20 to-transparent pointer-events-none" />
            </div>
            {/* Floating Detail Card */}
            <div className="absolute -bottom-8 -left-8 right-8 bg-white/90 backdrop-blur-md p-8 rounded-[24px] border border-[var(--line)] shadow-2xl hidden sm:block">
              <h3 className="text-2xl font-serif mb-2">Presença Real</h3>
              <p className="text-sm text-[var(--muted)]">Consultas onde o paciente é ouvido com clareza e acolhimento.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Cards */}
      <section className="section bg-[var(--surface)]" aria-labelledby="intro-cards-heading">
        <h2 id="intro-cards-heading" className="sr-only">Áreas de Atuação</h2>
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <Link to="/pacientes" className="card group" aria-label="Saiba mais sobre Medicina Clínica">
              <span className="text-[11px] uppercase tracking-widest text-[var(--muted)] block mb-4" aria-hidden="true">Medicina Clínica</span>
              <h3 className="mb-6">Cuidado para o hoje</h3>
              <p className="text-[var(--muted)] mb-8">Consultas particulares focadas em organização da demanda e resolutividade clínica com clareza.</p>
              <span className="text-xs font-semibold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all text-[var(--deep)]" aria-hidden="true">
                Agendar Consulta <ArrowRight size={14} />
              </span>
            </Link>
            <Link to="/assistencial" className="card group border-[var(--accent)]" aria-label="Saiba mais sobre Documentação Técnica">
              <span className="text-[11px] uppercase tracking-widest text-[var(--muted)] block mb-4" aria-hidden="true">Documentação Técnica</span>
              <h3 className="mb-6">Precisão para o futuro</h3>
              <p className="text-[var(--muted)] mb-8">Análise criteriosa e organização assistencial documental para demandas que exigem rigor técnico.</p>
              <span className="text-xs font-semibold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all text-[var(--deep)]" aria-hidden="true">
                Solicitar Análise <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Preview (Home) */}
      <section className="section" aria-labelledby="reviews-heading">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="reviews-heading" className="mb-6 italic font-serif">O que dizem os pacientes</h2>
            <p className="text-[var(--muted)]">Reflexos de um atendimento fundamentado na ética e no cuidado individualizado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((text, i) => (
              <article key={i} className="p-8 bg-[var(--surface)] rounded-[20px] border border-transparent hover:border-[var(--line)] transition-all">
                <div className="text-[var(--accent)] mb-4 italic leading-loose" aria-label="5 de 5 estrelas">★★★★★</div>
                <p className="text-[15px] italic text-[var(--deep)] leading-relaxed">"{text}"</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
