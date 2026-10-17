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

    'modal.v2v.desc':
      "Application desktop C++/Qt simulant les **connexions inter-véhicules (V2V) en 5G** : modélisation des déplacements, de la couverture radio et des communications en temps réel sur le territoire de Mulhouse.",

    'modal.shareelec.title': "ShareElec — Marketplace d'électricité",
    'modal.shareelec.desc':
      "Plateforme web innovante permettant aux particuliers/organisations d'**acheter, vendre et gérer des offres d'électricité de manière sécurisée**, favorisant l'autonomie énergétique et l'optimisation locale.",
    'modal.optim.title': 'Optimisation — Résolution de problèmes',
    'modal.optim.desc':
      "Application web pour la résolution de problèmes d'optimisation mathématique. Interface intuitive pour définir les fonctions, contraintes et paramètres, avec visualisation des résultats.",
    // Navbar
  'nav.experience': 'Expérience',

  // Hero
  'hero.hello': 'Salut,',

  // Experience
  'experience.title': 'Expérience professionnelle',
  'experience.subtitle': 'Mon expérience dans le monde professionnel.',
  'experience.internship': 'Stage de fin d’études',
  'experience.role': 'Stagiaire en développement logiciel',
  'experience.specialty': 'Automatisation des tests d’interfaces graphiques',
  'experience.date': 'Février – août 2026',
  'experience.location': 'Nantes, France',
  'experience.showDetails': 'Voir les détails',
  'experience.hideDetails': 'Masquer les détails',

  'experience.overview': 'Présentation',
  'experience.overview.p1':
    'Lors de mon stage de fin d’études chez Bureau Veritas Marine & Offshore, j’ai participé au développement d’un framework de tests automatisés en Python pour les interfaces graphiques d’un logiciel métier interne.',
  'experience.overview.p2':
    'Le projet visait à améliorer la fiabilité des tests, leur réutilisabilité et la qualité du logiciel développé avec les technologies Qt.',

  'experience.contributions': 'Contributions principales',
  'experience.detail.1':
    'Conception et développement d’un framework Python permettant d’automatiser les tests des interfaces graphiques d’un logiciel métier.',
  'experience.detail.2':
    'Développement de tests automatisés couvrant les widgets Qt, les signaux/slots et les parcours utilisateurs.',
  'experience.detail.3':
    'Création de composants de test réutilisables et contribution à l’amélioration des pratiques de test logiciel.',

  'experience.technologies': 'Technologies et outils',
  'experience.guiTesting': 'Tests d’interfaces graphiques',
  'experience.testAutomation': 'Automatisation des tests',
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
    'modal.v2v.desc':
      'Desktop C++/Qt application simulating 5G V2V (Vehicle-to-Vehicle) connections, including movement, radio coverage, and inter-vehicle communications in real-time across the Mulhouse area.',
    'modal.shareelec.title': 'ShareElec — Electricity Marketplace',
    'modal.shareelec.desc':
      'Innovative web platform enabling individuals and organizations to securely buy, sell, and manage electricity offers, promoting energy autonomy and local optimization.',
    'modal.optim.title': 'Optimization — Problem Solving',
    'modal.optim.desc':
      'Web app for solving mathematical optimization problems with an intuitive UI for functions, constraints and parameters, plus results visualization.',
    // Navbar
    'nav.experience': 'Experience',

    // Hero
    'hero.hello': 'Hi,',

    // Experience
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'Professional experience and internship work.',
    'experience.internship': 'Final-Year Internship',
    'experience.role': 'Software Development Intern',
    'experience.specialty': 'GUI Test Automation',
    'experience.date': 'February – August 2026',
    'experience.location': 'Nantes, France',
    'experience.showDetails': 'Show details',
    'experience.hideDetails': 'Hide details',

    'experience.overview': 'Overview',
    'experience.overview.p1':
      'During my final-year internship at Bureau Veritas Marine & Offshore, I contributed to the development of a Python-based automated testing framework for graphical user interfaces of an internal business application.',
    'experience.overview.p2':
      'The project focused on improving test reliability, reusability, and software quality for an internal application built with Qt technologies.',

    'experience.contributions': 'Key Contributions',
    'experience.detail.1':
      'Designed and developed a Python-based testing framework to automate graphical interface testing for an internal business application.',
    'experience.detail.2':
      'Developed automated tests covering Qt widgets, signals/slots, and user interaction workflows.',
    'experience.detail.3':
      'Created reusable testing components and contributed to improving software testing practices and maintainability.',

    'experience.technologies': 'Technologies & Tools',
    'experience.guiTesting': 'GUI Testing',
    'experience.testAutomation': 'Test Automation',
      },
} as const;

export type TKey = keyof typeof translations['en'];