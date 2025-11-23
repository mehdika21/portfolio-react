export type Lang = 'fr' | 'en';

export const translations = {
  fr: {
    // Navbar
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',

    // Hero
    'hero.tagline': 'Cap sur la Grand Line',
    'hero.greeting': "c'est",
    'hero.imPassionate': "Je suis passionné par ",
    'hero.phrase.1': 'Construire des applications web fiables et soignées',
    'hero.phrase.2': 'Résoudre des problèmes complexes',
    'hero.cta.projects': 'Voir les projets',
    'hero.cta.contact': 'Me contacter',
    'hero.blurb':
      "J'aime découvrir de nouvelles technologies et approfondir des principes de design créatifs. Ma curiosité me pousse à apprendre en continu pour créer des expériences utiles.",

    // Skills
    'skills.title': 'Compétences',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.languages': 'Langages',

    // Contact
    'contact.title': 'Contactez-moi',
    'contact.rights': 'Tous droits réservés.',

    // Modals / gallery
    'gallery.prev': 'Précédent',
    'gallery.next': 'Suivant',
    'modal.close': 'Fermer',
    'modal.viewGithub': 'Voir sur GitHub',

    // Project modals content
    'modal.ehealth.title': 'Ehealth — Dossier Médical Élève',
    'modal.ehealth.desc':
      "Application web sécurisée pour centraliser l'historique de santé des élèves (antécédents, examens, vaccinations, allergies, traitements). Résout l'accès, la mise à jour, le partage, la confidentialité et la traçabilité.",
    'modal.v2v.title': 'V2V Simulation — Mulhouse (5G)',
    // **Revised French Description for V2V**
    'modal.v2v.desc':
      "Application desktop C++/Qt simulant les **connexions inter-véhicules (V2V) en 5G** : modélisation des déplacements, de la couverture radio et des communications en temps réel sur le territoire de Mulhouse.",
    // **Revised French Description for ShareElec**
    'modal.shareelec.title': "ShareElec — Marketplace d'électricité",
    'modal.shareelec.desc':
      "Plateforme web innovante permettant aux particuliers/organisations d'**acheter, vendre et gérer des offres d'électricité de manière sécurisée**, favorisant l'autonomie énergétique et l'optimisation locale.",
    'modal.optim.title': 'Optimisation — Résolution de problèmes',
    'modal.optim.desc':
      "Application web pour la résolution de problèmes d'optimisation mathématique. Interface intuitive pour définir les fonctions, contraintes et paramètres, avec visualisation des résultats.",
  },
  en: {
    // Navbar
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.tagline': 'Setting Sail for the Grand Line',
    'hero.greeting': "I'm",
    'hero.imPassionate': 'I’m passionate about ',
    'hero.phrase.1': 'Building clean, reliable web apps',
    'hero.phrase.2': 'Solving complex problems',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get in touch',
    'hero.blurb':
      'I love exploring new technologies and deepening creative design principles to craft meaningful experiences.',

    // Skills
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.languages': 'Languages',

    // Contact
    'contact.title': 'Connect With Me',
    'contact.rights': 'All rights reserved.',

    // Modals / gallery
    'gallery.prev': 'Previous',
    'gallery.next': 'Next',
    'modal.close': 'Close',
    'modal.viewGithub': 'View on GitHub',

    // Project modals content
    'modal.ehealth.title': 'Ehealth — Student Medical Record',
    'modal.ehealth.desc':
      'Secure web app to centralize students’ health history ( vaccinations, allergies, treatments). Solves access, update, sharing, confidentiality and traceability.',
    'modal.v2v.title': 'V2V Simulation — Mulhouse (5G)',
    // **Revised English Description for V2V (Rephrased)**
    'modal.v2v.desc':
      'Desktop C++/Qt application simulating **5G V2V (Vehicle-to-Vehicle) connections**, including movement, radio coverage, and inter-vehicle communications in real-time across the Mulhouse area.',
    'modal.shareelec.title': 'ShareElec — Electricity Marketplace',
    // **Revised English Description for ShareElec (Translated & Rephrased)**
    'modal.shareelec.desc':
      'Innovative web platform enabling individuals and organizations to **securely buy, sell, and manage electricity offers**, promoting energy autonomy and local optimization.',
    'modal.optim.title': 'Optimization — Problem Solving',
    'modal.optim.desc':
      'Web app for solving mathematical optimization problems with an intuitive UI for functions, constraints and parameters, plus results visualization.',
  },
} as const;

export type TKey = keyof typeof translations['en'];