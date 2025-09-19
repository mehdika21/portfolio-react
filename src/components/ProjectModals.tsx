import React, { useState } from "react";

// Import all images
import ehealthLogin from "../assets/images/ehealth/loginPage.png";
import ehealthStudentList from "../assets/images/ehealth/studentListPage.png";
import ehealthStudentVisits from "../assets/images/ehealth/studentVisitsPage.png";
import ehealthStats from "../assets/images/ehealth/statsPage.png";
import ehealthDental from "../assets/images/ehealth/dentalVisit.png";

import v2vImage from "../assets/images/v2v/V2V.png";

import shareElecFirst from "../assets/images/shareElec/firstPage.png";
import shareElecSecond from "../assets/images/shareElec/secondPage.png";
import shareElecProfile from "../assets/images/shareElec/profilePage.png";

import optimisationLogo from "../assets/images/optimisation/logo.png";
import optimisationHome from "../assets/images/optimisation/homePage.png";
import optimisationFunction from "../assets/images/optimisation/functionPage.png";
import optimisationContraintes from "../assets/images/optimisation/contraintesPage.png";
import optimisationConfig from "../assets/images/optimisation/configPage.png";
import optimisationDefine from "../assets/images/optimisation/definePage.png";
import resultPage1 from "../assets/images/optimisation/resultPage1.png";
import tables from "../assets/images/optimisation/tables.png";
import graph from "../assets/images/optimisation/graph.png";
const modalData = [
  {
    id: "modal-medical",
    title: "Ehealth — Dossier Médical Élève",
    img: ehealthLogin,
    gallery: [
      ehealthLogin,
      ehealthStudentList,
      ehealthStudentVisits,
      ehealthStats,
      ehealthDental,
    ],
    description:
      "Application web sécurisée pour centraliser l'historique de santé des élèves (antécédents, examens, vaccinations, allergies, traitements). Résout l'accès, la mise à jour, le partage, la confidentialité et la traçabilité.",
    tags: ["php", "d3.js", "Tailwind", "MySQL", "chart.js"],
    github: "https://github.com/mehdika21/memoire",
  },
  {
    id: "modal-v2v",
    title: "V2V Simulation — Mulhouse (5G)",
    img: v2vImage,
    gallery: [v2vImage],
    description:
      "App desktop C++/Qt simulant déplacements, couverture radio (puissance/fréquences) et connexions inter-véhicules en temps réel sur Mulhouse.",
    tags: ["C++", "Qt / QML", "OpenStreetMap", "OSRM", "Lambert93"],
    github: "https://github.com/mehdika21/v2v-simulation",
  },
  {
    id: "modal-shareelec",
    title: "ShareElec — Marketplace d'électricité",
    img: shareElecFirst,
    gallery: [
      shareElecFirst,
      shareElecSecond,
      shareElecProfile,
    ],
    description:
      "Plateforme web pour acheter, vendre et gérer des offres d'électricité en toute sécurité : tarification en temps réel, énergies renouvelables et transactions sûres.",
    tags: [".NET Core", "Angular", "SQLite", "Tailwind CSS", "JWT Auth"],
    github: "#",
  },
  {
    id: "modal-optimisation",
    title: "Optimisation — Résolution de problèmes",
    img: optimisationLogo,
    gallery: [
      optimisationHome,
      optimisationFunction,
      optimisationContraintes,
      optimisationConfig,
      optimisationDefine,
      resultPage1,
      tables,
      graph,
      
    ],
    description:
      "Application web pour la résolution de problèmes d'optimisation mathématique. Interface intuitive pour définir les fonctions, contraintes et paramètres, avec visualisation des résultats.",
    tags: ["Python", "Flask", "SciPy", "NumPy", "React", "Tailwind CSS"],
    github: "https://github.com/mehdika21/recherche-operationnelle",
  },
];

export const ProjectModals: React.FC<{ openId: string | null; onClose: () => void }> = ({ openId, onClose }) => {
  const modal = modalData.find((m) => m.id === openId);
  const [galleryIdx, setGalleryIdx] = useState(0);

  React.useEffect(() => {
    setGalleryIdx(0);
  }, [openId]);

  if (!modal || !openId) return null;

  const showImg = modal.gallery[galleryIdx];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm" onClick={onClose} aria-hidden="true"></div>
      <div className="relative mx-auto my-8 w-[96%] max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#222222] border border-white/10 bg-slate-800/80 text-slate-100  shadow-2xl">
        <div className="p-6 md:p-8 grid md:grid-cols-[1.4fr_1fr] gap-8">
          {/* LEFT: Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800/40 ring-1 ring-white/10">
              <img className="h-full w-full object-cover" alt="Gallery" src={showImg} />
              {modal.gallery.length > 1 && (
                <>
                  <button className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 bg-slate-950/50 hover:bg-slate-950/70 border border-white/10" onClick={() => setGalleryIdx((galleryIdx - 1 + modal.gallery.length) % modal.gallery.length)} aria-label="Previous">❮</button>
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 bg-slate-950/50 hover:bg-slate-950/70 border border-white/10" onClick={() => setGalleryIdx((galleryIdx + 1) % modal.gallery.length)} aria-label="Next">❯</button>
                </>
              )}
            </div>
          </div>
          {/* RIGHT */}
          
          <div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">{modal.title}</h3>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10" onClick={onClose} aria-label="Fermer">✕</button>
            </div>
            <p className="mt-4 text-sm text-slate-300">{modal.description}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {modal.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-white/5 rounded">{tag}</span>
              ))}
            </div>
            <div className="mt-6">
              <a href={modal.github} className="inline-flex items-center gap-2 rounded-lg bg-yellow-600 px-4 py-2 text-slate-900 font-medium hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M8 .2a8 8 0 00-2.53 15.6c.4.08.55-.17.55-.38v-1.34c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.81.06 1.24.84 1.24.84.72 1.24 1.89.88 2.35.67.07-.52.28-.88.5-1.08-1.78-.2-3.64-.89-3.64-3.97 0-.88.32-1.6.84-2.17-.09-.2-.37-1.02.08-2.12 0 0 .67-.21 2.2.83a7.55 7.55 0 014 0c1.53-1.04 2.2-1.83 2.2-1.83.45 1.1.17 1.92.08 2.12.52.57.84 1.29.84 2.17 0 3.09-1.87 3.77-3.65 3.97.29.25.54.74.54 1.5v2.23c0 .21.15.46.55.38A8 8 0 008 .2z"/></svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};