import React from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle, Clock, MapPin } from 'lucide-react';

export default function Pacientes() {
  const steps = [
    { title: "Escuta Atenta", desc: "Consultas sem pressa, priorizando sua história e suas queixas." },
    { title: "Clareza Total", desc: "Explicação detalhada sobre o diagnóstico e o plano de cuidado." },
    { title: "Organização", desc: "Receitas, pedidos de exames e laudos organizados e fáceis de entender." }
  ];

  return (
    <div className="bg-[var(--bg)]">
      {/* Header Section */}
      <section className="py-20 lg:py-32 bg-[var(--surface)]">
        <div className="site-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[var(--muted)] mb-6 block">Consulta Particular</span>
            <h1 className="mb-8">Um espaço para o <br/><span className="italic">seu cuidado</span></h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed">
              Minha prática clínica é focada em pacientes adultos que buscam mais do que uma prescrição: buscam entendimento sobre sua saúde e um acompanhamento médico contínuo e organizado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20" aria-labelledby="diferenciais-heading">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 id="diferenciais-heading" className="text-4xl font-serif mb-10 italic">Diferenciais do atendimento</h2>
            <ul className="space-y-12">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-[var(--line)] flex items-center justify-center text-[var(--deep)] shadow-sm group-hover:bg-[var(--deep)] group-hover:text-white transition-colors" aria-hidden="true">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">{step.title}</h3>
                    <p className="text-[var(--muted)]">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <aside className="card h-full !p-10 flex flex-col justify-between" aria-labelledby="agendamentos-heading">
              <div>
                <Calendar className="text-[var(--accent)] mb-6" size={32} aria-hidden="true" />
                <h3 id="agendamentos-heading" className="text-3xl font-serif mb-6">Agendamentos</h3>
                <p className="text-[var(--muted)] mb-8">
                  As consultas são agendadas de forma direta, garantindo que o tempo em consultório seja exclusivamente dedicado a você.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-4 text-sm text-[var(--deep)]">
                    <Clock size={16} className="text-[var(--accent)]" aria-hidden="true" /> <span>Consultas de até 1 hora</span>
                  </li>
                  <li className="flex items-center gap-4 text-sm text-[var(--deep)]">
                    <MapPin size={16} className="text-[var(--accent)]" aria-hidden="true" /> <span>Atendimento em Brasília e Online</span>
                  </li>
                </ul>
              </div>
              <a href="https://calendly.com/drajoyceradis" target="_blank" rel="noreferrer" className="btn btn-primary w-full" aria-label="Ver horários disponíveis no Calendly em nova aba">
                Ver Horários Disponíveis
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 bg-[var(--deep)] text-white/90 overflow-hidden" aria-labelledby="feedback-heading">
        <h2 id="feedback-heading" className="sr-only">Depoimento de Paciente</h2>
        <div className="site-container relative">
          <div className="absolute top-0 left-0 text-[20rem] font-serif text-white/[0.03] leading-none select-none" aria-hidden="true">"</div>
          <figure className="max-w-2xl mx-auto text-center relative z-10">
            <blockquote className="text-2xl font-serif italic mb-8 leading-relaxed">
              <p>“Além de tirar todas as dúvidas, transmite carisma e cuidado real com os pacientes. Foi o melhor atendimento que tive para acompanhar meus familiares.”</p>
            </blockquote>
            <figcaption className="text-xs uppercase tracking-widest text-white/40">— Feedback espontâneo (Paciente)</figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
