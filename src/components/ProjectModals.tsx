import React, { useState, useEffect } from "react";
import { useI18n } from "../i18n/I18n";

// images…
import ehealthLogin from "../assets/images/ehealth/loginPage.png";
import ehealthStudentList from "../assets/images/ehealth/studentListPage.png";
import ehealthStudentVisits from "../assets/images/ehealth/studentVisitsPage.png";
import ehealthStats from "../assets/images/ehealth/statsPage.png";
import ehealthDental from "../assets/images/ehealth/dentalVisit.png";
import v2vImage from "../assets/images/v2v/V2V.png";
import v2vDemo from "../assets/images/v2v/demo.png";
import v2vDemo2 from "../assets/images/v2v/v2vDemo2.png";
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

type ModalBase = {
  id: string;
  img: string;
  gallery: string[];
  tags: string[];
  github: string;
  titleKey: import("../i18n/translations").TKey;
  descKey: import("../i18n/translations").TKey;
};

const modalBase: ModalBase[] = [
  {
    id: "modal-medical",
    img: ehealthLogin,
    gallery: [ehealthLogin, ehealthStudentList, ehealthStudentVisits, ehealthStats, ehealthDental],
    tags: ["php", "d3.js", "Tailwind", "MySQL", "chart.js"],
    github: "https://github.com/mehdika21/memoire",
    titleKey: "modal.ehealth.title",
    descKey: "modal.ehealth.desc",
  },
  {
    id: "modal-v2v",
    img: v2vImage,
    gallery: [v2vDemo,v2vDemo2],
    tags: ["C++", "Qt / QML", "OpenStreetMap", "OSRM", "Lambert93"],
    github: "https://github.com/mehdika21/v2v-simulation",
    titleKey: "modal.v2v.title",
    descKey: "modal.v2v.desc",
  },
  {
    id: "modal-shareelec",
    img: shareElecFirst,
    gallery: [shareElecFirst, shareElecSecond, shareElecProfile],
    tags: [".NET Core", "Angular", "SQLite", "Tailwind CSS", "JWT Auth"],
    github: "#",
    titleKey: "modal.shareelec.title",
    descKey: "modal.shareelec.desc",
  },
  {
    id: "modal-optimisation",
    img: optimisationLogo,
    gallery: [optimisationHome, optimisationFunction, optimisationContraintes, optimisationConfig, optimisationDefine, resultPage1, tables, graph],
    tags: ["Python", "Flask", "SciPy", "NumPy", "React", "Tailwind CSS"],
    github: "https://github.com/mehdika21/recherche-operationnelle",
    titleKey: "modal.optim.title",
    descKey: "modal.optim.desc",
  },
];

export const ProjectModals: React.FC<{ openId: string | null; onClose: () => void }> = ({ openId, onClose }) => {
  const { t } = useI18n();
  const modal = modalBase.find((m) => m.id === openId);
  const [galleryIdx, setGalleryIdx] = useState(0);

  useEffect(() => setGalleryIdx(0), [openId]);

  if (!modal || !openId) return null;
  const showImg = modal.gallery[galleryIdx];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm" onClick={onClose} aria-hidden="true"></div>
      <div className="relative mx-auto my-8 w-[96%] max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#222222] border border-white/10 shadow-2xl">
        <div className="p-6 md:p-8 grid md:grid-cols-[1.4fr_1fr] items-stretch gap-8">

          {/* LEFT */}
          <div className="space-y-4">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800/40 ring-1 ring-white/10">
              <img className="h-full w-full object-cover" alt="Gallery" src={showImg} />
              {modal.gallery.length > 1 && (
                <>
                  <button
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 bg-slate-950/50 hover:bg-slate-950/70 border border-white/10"
                    onClick={() => setGalleryIdx((galleryIdx - 1 + modal.gallery.length) % modal.gallery.length)}
                    aria-label={t('gallery.prev')}
                  >❮</button>
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 bg-slate-950/50 hover:bg-slate-950/70 border border-white/10"
                    onClick={() => setGalleryIdx((galleryIdx + 1) % modal.gallery.length)}
                    aria-label={t('gallery.next')}
                  >❯</button>
                  
                  {/* Gallery Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {modal.gallery.map((_, index) => (
                      <button
                        key={index}
                        className={`h-2 w-2 rounded-full ${index === galleryIdx ? 'bg-emerald-400' : 'bg-slate-400'}`}
                        onClick={() => setGalleryIdx(index)}
                        aria-label={`View image ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </>
              )}
              
            </div>
          </div>

          {/* RIGHT */}
          {/* RIGHT */}
          <div className="flex flex-col items-start h-full">
            <div className="flex items-start justify-between w-full gap-4">
              <h3 className="text-xl font-semibold">{t(modal.titleKey)}</h3>
              <button
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10"
                onClick={onClose}
                aria-label={t('modal.close')}
              >
                ✕
              </button>
            </div>

            {/* cleaner text spacing */}
            <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-300">
              {t(modal.descKey)}
            </p>

            {/* tags */}
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              {modal.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-white/5 rounded">{tag}</span>
              ))}
            </div>

            {/* bottom action */}
            <div className="mt-auto w-full border-t border-white/10 pt-4">
              <a
                href={modal.github}
                className="inline-flex w-full justify-center items-center gap-2 rounded-lg bg-yellow-600 px-4 py-2 text-slate-900 font-medium hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 .2a8 8 0 00-2.53 15.6c.4.08.55-.17.55-.38v-1.34c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.81.06 1.24.84 1.24.84.72 1.24 1.89.88 2.35.67.07-.52.28-.88.5-1.08-1.78-.2-3.64-.89-3.64-3.97 0-.88.32-1.6.84-2.17-.09-.2-.37-1.02.08-2.12 0 0 .67-.21 2.2.83a7.55 7.55 0 014 0c1.53-1.04 2.2-1.83 2.2-1.83.45 1.1.17 1.92.08 2.12.52.57.84 1.29.84 2.17 0 3.09-1.87 3.77-3.65 3.97.29.25.54.74.54 1.5v2.23c0 .21.15.46.55.38A8 8 0 008 .2z" />
                </svg>
                {t('modal.viewGithub')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};