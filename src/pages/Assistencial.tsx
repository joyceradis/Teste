import React from 'react';
import { motion } from 'motion/react';
import { FileText, ShieldCheck, Search, ClipboardCheck } from 'lucide-react';

export default function Assistencial() {
  const services = [
    { 
      title: "Análise de Prontuários", 
      icon: Search, 
      desc: "Revisão detalhada de documentação clínica para identificação de nexos e oportunidades assistenciais." 
    },
    { 
      title: "Pareceres Técnicos", 
      icon: FileText, 
      desc: "Elaboração de documentos médicos com linguagem clara, fundamentada e rigorosamente técnica." 
    },
    { 
      title: "Organização Assistencial", 
      icon: ClipboardCheck, 
      desc: "Estruturação de casos complexos para facilitar a tomada de decisão médica ou jurídica." 
    }
  ];

  return (
    <div className="bg-[var(--bg)]">
      {/* Header */}
      <section className="py-20 lg:py-32 bg-[var(--surface)] border-b border-[var(--line)]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[var(--muted)] mb-6 block">Atuação Médico-Documental</span>
              <h1 className="mb-8">Rigor técnico e <br/><span className="italic">precisão documental</span></h1>
              <p className="text-xl text-[var(--muted)] leading-relaxed">
                Atuação voltada à análise técnica de documentação clínica em contextos assistenciais. Traduzindo complexidade médica em clareza técnica.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-32 h-32 rounded-full border border-[var(--accent)] flex items-center justify-center text-[var(--accent)] animate-pulse">
                <ShieldCheck size={64} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">Nossos Serviços</h2>
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card border-none bg-white p-10 hover:bg-[var(--surface)]"
              >
                <service.icon className="text-[var(--accent)] mb-8" size={32} strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-2xl font-serif mb-4 leading-tight">{service.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{service.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white" aria-labelledby="methodology-heading">
        <div className="site-container">
          <div className="max-w-4xl mx-auto bg-[var(--surface)] rounded-[40px] p-12 lg:p-20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 id="methodology-heading" className="text-4xl font-serif mb-8 italic">Como solicitar uma análise</h2>
              <p className="text-lg text-[var(--muted)] mb-12">
                Para manter o rigor e a organização, as solicitações assistenciais são processadas através de um fluxo estruturado. Você pode iniciar o pedido preenchendo o formulário de triagem técnica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://form.typeform.com/to/R8dRRX26" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-primary"
                  aria-label="Acessar Formulário Typeform em nova aba"
                >
                  Acessar Formulário (Typeform)
                </a>
                <a 
                  href="https://wa.me/5527998134032" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-outline"
                  aria-label="Falar com Assessoria no WhatsApp em nova aba"
                >
                  Falar com Assessoria
                </a>
              </div>
            </div>
            {/* Abstract Background Element */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[var(--accent)] opacity-5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
