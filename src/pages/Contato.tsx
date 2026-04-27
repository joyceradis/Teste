import React from 'react';
import { Mail, Phone, MessageSquare, ExternalLink } from 'lucide-react';

export default function Contato() {
  return (
    <div className="bg-[var(--bg)] min-h-[70vh]">
      <section className="py-20 lg:py-32">
        <div className="site-container">
          <div className="max-w-xl mb-20 text-center mx-auto">
            <h1 className="mb-6">Canais de <br/><span className="italic">atendimento</span></h1>
            <p className="text-[var(--muted)]">Escolha o fluxo ideal para sua necessidade. Cada canal é monitorado para garantir agilidade e organização.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Consultation */}
            <article className="card text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--surface)] flex items-center justify-center text-[var(--accent)] mb-8" aria-hidden="true">
                <Phone size={24} />
              </div>
              <h3 className="text-2xl font-serif mb-4">Pacientes</h3>
              <p className="text-sm text-[var(--muted)] mb-10 flex-grow">Para agendamento de consultas particulares, retornos e acompanhamento clínico.</p>
              <a 
                href="https://calendly.com/drajoyceradis" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary w-full flex items-center justify-center gap-2"
                aria-label="Agendar horário de consulta no Calendly em nova aba"
              >
                Agendar Horário <ExternalLink size={14} aria-hidden="true" />
              </a>
            </article>

            {/* Technical */}
            <article className="card text-center flex flex-col items-center border-[var(--accent)] shadow-md">
              <div className="w-16 h-16 rounded-full bg-[var(--deep)] flex items-center justify-center text-white mb-8" aria-hidden="true">
                <Mail size={24} />
              </div>
              <h3 className="text-2xl font-serif mb-4">Atuação Técnica</h3>
              <p className="text-sm text-[var(--muted)] mb-10 flex-grow">Solicitação de análises documentais, pareceres e consultoria médico-técnica.</p>
              <a 
                href="https://form.typeform.com/to/R8dRRX26" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary w-full flex items-center justify-center gap-2"
                aria-label="Iniciar solicitação técnica no Typeform em nova aba"
              >
                Iniciar Solicitação <ExternalLink size={14} aria-hidden="true" />
              </a>
            </article>

            {/* Direct */}
            <article className="card text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--surface)] flex items-center justify-center text-[#25d366] mb-8" aria-hidden="true">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-2xl font-serif mb-4">Dúvidas Gerais</h3>
              <p className="text-sm text-[var(--muted)] mb-10 flex-grow">Caso precise de informações gerais ou orientações sobre os serviços oferecidos.</p>
              <a 
                href="https://wa.me/5527998134032" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline w-full flex items-center justify-center gap-2"
                aria-label="Falar no WhatsApp com a Dra. Joyce Radis em nova aba"
              >
                Falar no WhatsApp <ExternalLink size={14} aria-hidden="true" />
              </a>
            </article>
          </div>

          <div className="mt-32 p-12 bg-white rounded-[32px] border border-[var(--line)] text-center max-w-4xl mx-auto">
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-[var(--accent)] mb-4">Informações Legais</h4>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div>
                <span className="block text-xs font-semibold text-[var(--muted)]">CRM-ES</span>
                <span className="text-lg font-serif">21188</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-[var(--line)]"></div>
              <div>
                <span className="block text-xs font-semibold text-[var(--muted)]">Atendimento</span>
                <span className="text-lg font-serif">Brasília / Espírito Santo / Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
