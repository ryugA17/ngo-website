import React, { useRef, useEffect } from 'react';
import aboutUsPic from '../../assets/aboutus-pic1.jpg';
import './SecretaryMessageSection.css';

const SecretaryMessageSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

        <div className="secretary-content">
          <div className="secretary-image-container animate-fade-in delay-200">
            <img 
              src={aboutUsPic} 
              alt="Secretary" 
              className="secretary-image"
              loading="lazy"
            />
            <div className="secretary-info">
              <h3>Kuldeep Kumar Arora</h3>
              <p>Secretary, IIRD</p>
            </div>
          </div>
          
          <div className="message-content animate-fade-in delay-300">
            <p>
              Dear Friends,
            </p>
            <p>
              It gives me immense pleasure to welcome you to the official website of the Indian Institute of Rural Development (IIRD). For over two decades, IIRD has been dedicated to empowering rural communities across Rajasthan and beyond through sustainable development initiatives.
            </p>
            <p>
              Our journey began with a simple yet powerful vision – to bridge the gap between rural potential and urban opportunities. Today, I am proud to say that IIRD has grown into a multifaceted organization that addresses various aspects of rural development, from livelihood enhancement and skill development to health, education, and environmental sustainability.
            </p>
            <p>
              The success of IIRD is rooted in our core philosophy of participatory development. We believe that true progress comes when communities are actively involved in shaping their own future. Our approach has always been to work alongside the communities, understanding their unique needs, leveraging their strengths, and addressing their challenges through collaborative efforts.
            </p>
            <p>
              Over the years, we have been fortunate to partner with various government bodies, international organizations, and corporate entities who share our commitment to rural development. These partnerships have enabled us to expand our reach and deepen our impact, touching the lives of thousands of individuals and families in rural areas.
            </p>
            <p>
              As we look to the future, IIRD remains committed to innovating and adapting to the evolving needs of rural communities. We are continuously exploring new approaches, technologies, and partnerships that can enhance our effectiveness and sustainability.
            </p>
            <p>
              I invite you to explore our website to learn more about our programs, initiatives, and impact stories. Should you be interested in supporting our work or collaborating with us, please do not hesitate to reach out.
            </p>
            <p>
              Together, let us continue to build vibrant, self-reliant rural communities that contribute to a more inclusive and sustainable India.
            </p>
            <div className="message-closing">
              <p>Warm regards,</p>
              <p><strong>Kuldeep Kumar Arora</strong></p>
              <p>Secretary, Indian Institute of Rural Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretaryMessageSection; 