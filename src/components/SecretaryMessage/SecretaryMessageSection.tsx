import { useRef, useEffect } from 'react';
import './SecretaryMessageSection.css';

const SecretaryMessageSection: React.FC = () => {
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

  return (
    <section className="secretary-message-section" ref={sectionRef} id="secretary-message">
      <div className="container">
        <div className="secretary-header">
          <h2 className="section-title animate-fade-in">About Us</h2>
          <div className="section-underline"></div>
          <h3 className="secretary-subtitle animate-fade-in delay-100">Secretary's Message</h3>
        </div>

        <div className="secretary-content" ref={contentRef}>
          <div className="secretary-image-container animate-slide-right">
            <div className="secretary-image-frame">
              <div className="secretary-signature">
                <p>Mr. Pramod Paliwal</p>
                <p>Secretary</p>
                <p>Indian Institute of Rural Development</p>
              </div>
            </div>
          </div>

          <div className="secretary-text animate-slide-left">
            <p className="secretary-paragraph">
              A team of experienced professionals started the Indian Institute of Rural Development in the year 1994 and after 25 years, we are proud to be a registered public society employing more than 600 people with different professional backgrounds. We have focused ourselves in North West India and work in districts of Rajasthan, Gujarat and Madhya Pradesh.
            </p>
            
            <p className="secretary-paragraph">
              The grand successes of the IIRD programs for more than 25 years, not only establishes its credibility but also has sown the seeds of change and impact. IIRD is extremely happy about its performance and hopes to continue in the same spirit for years to come, bringing solace and prosperity to vulnerable.
            </p>
            
            <p className="secretary-paragraph">
              We believe in the model of 'Think Large and Act Small'. At IIRD, when the projects begin, they start small and the impact large- touching and transforming lives- this is called scaling up impact, which, without growing large, can take place.
            </p>

            <p className="secretary-paragraph">
              Very naturally, this has taken shape at IIRD. Therefore, we, convinced of the magnitude, have opted for wider rather than narrower impact. Our staff members, always on the lookout for new challenges and career opportunities, are also often spontaneously in favor of scaling up.
            </p>
            
            <p className="secretary-paragraph">
              Thus IIRD is seen as a catalyst of policy innovations and social capital; as creator of programmatic knowledge that can be spun off and integrated into government and market institutions; and as a builder of a vibrant and diverse civil society.
            </p>
          </div>
        </div>

        <div className="secretary-vision-statement animate-fade-in delay-200">
          <h3 className="vision-statement-title">Our Vision</h3>
          <p className="vision-statement-text">
            Our vision is to facilitate sustainable development through qualitative Human Resource Development, and encourage people's participation leading to the resolution of societal problems including empowerment of the unreached and underserved.
          </p>
        </div>

        <div className="secretary-impact animate-fade-in delay-300">
          <div className="impact-content">
            <p className="secretary-paragraph">
              With each successive year the work undertaken by the organization continues to expand and reach an increased number of districts as well as people in the remotest part of the districts. While the impact of the activities undertaken by the organization is extremely encouraging, there still remains a lot to be done for realizing the ultimate goal.
            </p>
            
            <p className="secretary-paragraph">
              And in the past 5 years, the scope of work and activity has increased manifold in confirmation with the vision. Over the years, IIRD has moved from being a service delivery organization to one which successfully impacts policy and practice. Every year, we reach millions of children in both rural and urban areas through a range of interventions. Our programs encompass Community Participation, Integrated Child Development, Resource & Skill Development, Vocational Training, Birth Control, School Health Program, General Health, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretaryMessageSection; 