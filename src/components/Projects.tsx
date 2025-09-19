import React, { useState } from "react";
import { ProjectModals } from "./ProjectModals";
import ehealthLogo from "../assets/images/ehealth/logo.png";
import v2vImage from "../assets/images/v2v/V2V.png";
import shareElecImage from "../assets/images/shareElec/firstPage.png";
import optimisationLogo from "../assets/images/optimisation/logo.png";

const cards = [
  {
    id: "modal-medical",
    img: ehealthLogo,
    title: "Ehealth — Dossier Médical Élève",
  },
  {
    id: "modal-v2v",
    img: v2vImage,
    title: "V2V Simulation",
  },
  {
    id: "modal-shareelec",
    img: shareElecImage,
    title: "ShareElec",
  },
  {
    id: "modal-optimisation",
    img: optimisationLogo,
    title: "Optimisation — Résolution de problèmes",
  },
];

const Projects: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-center mb-2">Projects</h2>
      <p className="text-slate-400 text-sm mt-1 text-center">Sélection de projets avec aperçu et détails.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {cards.map((card) => (
          <article key={card.id} className="relative group rounded-xl overflow-hidden border border-white/5 bg-slate-900/40">
            <img src={card.img} alt={card.title + " — aperçu"} className="w-full aspect-[16/9] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-100"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <div className="flex justify-end">
                <button 
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-yellow-600 text-slate-900 shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                  onClick={() => setOpenModal(card.id)}
                >
                  View
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 5.414V17a1 1 0 11-2 0V5.414L8.707 7.707A1 1 0 117.293 6.293l4-4z"/>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <ProjectModals openId={openModal} onClose={() => setOpenModal(null)} />
    </section>
  );
};

export default Projects;