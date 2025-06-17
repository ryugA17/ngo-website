import { useRef, useEffect } from 'react';
import './LegalDocumentSection.css';

interface Document {
  title: string;
  description: string;
  downloadUrl?: string;
}

const LegalDocumentSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Add intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const documents: Document[] = [
    {
      title: "Registration Certificate",
      description: "Official registration certificate of Indian Institute of Rural Development as a non-profit organization under the Societies Registration Act, 1860.",
      downloadUrl: "/documents/registration-certificate.pdf"
    },
    {
      title: "FCRA Certificate",
      description: "Foreign Contribution Regulation Act (FCRA) certificate allowing IIRD to receive foreign funding for its development activities.",
      downloadUrl: "/documents/fcra-certificate.pdf"
    },
    {
      title: "80G Certificate",
      description: "Income Tax exemption certificate under section 80G, allowing donors to claim tax benefits on donations made to IIRD.",
      downloadUrl: "/documents/80g-certificate.pdf"
    },
    {
      title: "12A Certificate",
      description: "Income Tax registration under section 12A, recognizing IIRD as a charitable organization exempt from paying income tax.",
      downloadUrl: "/documents/12a-certificate.pdf"
    },
    {
      title: "Memorandum of Association",
      description: "Document outlining the objectives, rules, and regulations governing the operations of IIRD.",
      downloadUrl: "/documents/memorandum-of-association.pdf"
    },
    {
      title: "Annual Reports",
      description: "Comprehensive reports detailing IIRD's activities, achievements, financial statements, and impact over the past years.",
      downloadUrl: "/documents/annual-reports.pdf"
    }
  ];

  return (
    <section className="legal-section" ref={sectionRef} id="legal-documents">
      <div className="container">
        <div className="legal-header">
          <h2 className="section-title animate-fade-in">About Us</h2>
          <div className="section-underline"></div>
          <h3 className="legal-subtitle animate-fade-in delay-100">Legal Documents</h3>
        </div>

        <div className="legal-intro animate-fade-in delay-200">
          <p>
            IIRD is a registered public society under the Societies Registration Act, 1860. We maintain complete transparency in our operations and comply with all legal requirements. Below are the key legal documents related to our organization.
          </p>
        </div>

        <div className="legal-documents" ref={contentRef}>
          {documents.map((document, index) => (
            <div 
              key={index} 
              className={`document-card animate-fade-in delay-${(index + 2) * 100}`}
            >
              <div className="document-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="document-content">
                <h3 className="document-title">{document.title}</h3>
                <p className="document-description">{document.description}</p>
                {document.downloadUrl && (
                  <a href={document.downloadUrl} className="document-download" target="_blank" rel="noopener noreferrer">
                    <span>Download</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="legal-disclosure animate-fade-in delay-400">
          <h3 className="disclosure-title">Legal Disclosure</h3>
          <p>
            All documents provided here are for informational purposes. The documents are the property of Indian Institute of Rural Development (IIRD) and are protected by copyright laws. Unauthorized reproduction or distribution of these documents is prohibited.
          </p>
          <p>
            For any legal inquiries or to request additional documentation, please contact our legal department at <a href="mailto:legal@iird.org" className="email-link">legal@iird.org</a>.
          </p>
        </div>

        <div className="legal-compliance animate-fade-in delay-500">
          <h3 className="compliance-title">Our Compliance Standards</h3>
          <ul className="compliance-list">
            <li>
              <strong>Financial Transparency:</strong> 
              <span>We maintain complete transparency in our financial operations and regularly publish our financial statements.</span>
            </li>
            <li>
              <strong>Regulatory Compliance:</strong> 
              <span>We strictly adhere to all regulations governing non-profit organizations in India.</span>
            </li>
            <li>
              <strong>Ethical Standards:</strong> 
              <span>We follow the highest ethical standards in all our operations and partnerships.</span>
            </li>
            <li>
              <strong>Accountability:</strong> 
              <span>We are accountable to our donors, partners, beneficiaries, and the government for all our actions and use of resources.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LegalDocumentSection; 