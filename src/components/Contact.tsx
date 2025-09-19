import React from "react";
import cv from "../assets/cv_stage1.pdf";


const Contact: React.FC = () => (
  <footer id="contact" className="border-t border-white/5 py-16 text-center">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="footer-title text-xl sm:text-2xl mb-6">Connect With Me</h2>
      <div className="flex justify-center gap-5 sm:gap-6 mb-8 text-slate-300">
        <a aria-label="GitHub" title="GitHub" href="https://github.com/mehdika21" target="_blank" rel="noopener" className="icon-btn">
          {/* GitHub SVG */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a10.9 10.9 0 015.99 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0024 12C24 5.37 18.63 0 12 0z"/></svg>
        </a>
        <a aria-label="LinkedIn" title="LinkedIn" href="https://www.linkedin.com/in/mehdi-kaidi-a93383338/" target="_blank" rel="noopener" className="icon-btn">
          {/* LinkedIn SVG */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
        </a>
        <a aria-label="Email" title="Email" href="mailto:mehdikaidi60@gmail.com" className="icon-btn">
          {/* Email SVG */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 17.5v-11zm2.4-.5l7.6 5.1L19.6 6H4.4zM20 8.2l-7.5 5a1 1 0 01-1.1 0L4 8.2V17.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5V8.2z"/></svg>
        </a>
    <a aria-label="CV" title="CV / Resume" href={cv} target="_blank" rel="noopener" className="icon-btn">
          {/* CV SVG */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 3.5L19.5 9H14V3.5zM8 11h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>
        </a>
      </div>
      <p className="rights text-xs text-slate-400">© <span id="year">{new Date().getFullYear()}</span> Mehdi Kaidi. All rights reserved.</p>
    </div>
  </footer>
);

export default Contact;
