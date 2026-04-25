import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, content }) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const safeContent = content || {};
  const projectOrCompany = safeContent.projectName || safeContent.companyName || safeContent.title || 'Unnamed Royal Assignment';
  const role = safeContent.role || safeContent.position || 'Royal Developer';
  const duration = safeContent.duration || 'Archived in the royal chronicle';
  const messageFromKing = safeContent.details || safeContent.message || safeContent.shortDescription || 'No decree has been recorded yet.';
  const whatWasDone = Array.isArray(safeContent.features) ? safeContent.features : [];
  const technologies = Array.isArray(safeContent.technologies) ? safeContent.technologies : [];
  const links = Array.isArray(safeContent.links) ? safeContent.links : [];

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container" role="dialog" aria-modal="true" aria-label="Royal Message">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">x</button>

        <div className="wax-seal" aria-hidden="true">
          <span className="wax-seal-crown">{'\u265B'}</span>
          <span className="wax-seal-thread" />
        </div>

        <div className="modal-paper-fold" aria-hidden="true" />

        <div className="modal-content">
          <header className="royal-header">
            <p className="royal-crown">{'\u265B'}</p>
            <h2 className="royal-title">Royal Message</h2>
            <div className="royal-divider" />
          </header>

          <section className="royal-meta">
            <p><strong>Project / Company:</strong> {projectOrCompany}</p>
            <p><strong>Role / Position:</strong> {role}</p>
            <p><strong>Duration:</strong> {duration}</p>
          </section>

          <div className="royal-divider royal-divider-thin" />

          <div className="modal-details">
            <h3>Message from the King</h3>
            <p>{messageFromKing}</p>
          </div>

          <div className="royal-divider royal-divider-thin" />

          <div className="modal-features">
            <h3>What was done</h3>
            <ul>
              {whatWasDone.length ? whatWasDone.map((feature, index) => (
                <li key={index}>{feature}</li>
              )) : <li>Responsibilities and accomplishments will be inscribed soon.</li>}
            </ul>
          </div>

          <div className="royal-divider royal-divider-thin" />

          <div className="modal-technologies">
            <h3>Technologies Used</h3>
            <div className="modal-tech-tags">
              {technologies.length ? technologies.map((tech, index) => (
                <span className="tech-tag" key={index}>{tech}</span>
              )) : <span className="tech-tag">Not recorded</span>}
            </div>
          </div>

          {links.length ? (
            <div className="modal-links">
              <h3>Links</h3>
              <div className="modal-link-grid">
                {links.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="royal-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}

          <footer className="modal-stamp">Approved by the Royal Court</footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;