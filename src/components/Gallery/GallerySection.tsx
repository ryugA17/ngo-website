import React, { useRef, useEffect, useState } from 'react';
import './GallerySection.css';

// Import all images
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import image5 from '../../assets/5.jpg';
import image6 from '../../assets/6.jpg';
import workImage1 from '../../assets/work 2.jpg';
import workImage2 from '../../assets/work2.jpg';
import workImage3 from '../../assets/work 3.jpg';
import banner1 from '../../assets/banner-1.jpg';
import banner2 from '../../assets/banner-2.jpg';
import aboutUsPic from '../../assets/aboutus-pic1.jpg';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  description: string;
}

const GallerySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleImages, setVisibleImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Gallery images data
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: image1,
      alt: 'Community Engagement',
      category: 'community',
      description: 'Community engagement initiative in rural area'
    },
    {
      id: 2,
      src: image2,
      alt: 'Skill Development',
      category: 'education',
      description: 'Skill development training for local youth'
    },
    {
      id: 3,
      src: image3,
      alt: 'Women Empowerment',
      category: 'women',
      description: 'Women empowerment program in progress'
    },
    {
      id: 4,
      src: image4,
      alt: 'Rural Development',
      category: 'development',
      description: 'Rural development project implementation'
    },
    {
      id: 5,
      src: image5,
      alt: 'Healthcare Initiative',
      category: 'healthcare',
      description: 'Healthcare services being provided to rural communities'
    },
    {
      id: 6,
      src: image6,
      alt: 'Education Program',
      category: 'education',
      description: 'Educational program for children in rural areas'
    },
    {
      id: 7,
      src: workImage1,
      alt: 'Agricultural Project',
      category: 'agriculture',
      description: 'Agricultural project to improve farming techniques'
    },
    {
      id: 8,
      src: workImage2,
      alt: 'Infrastructure Development',
      category: 'development',
      description: 'Infrastructure development in rural community'
    },
    {
      id: 9,
      src: workImage3,
      alt: 'Water Conservation',
      category: 'environment',
      description: 'Water conservation project implementation'
    },
    {
      id: 10,
      src: banner1,
      alt: 'Community Meeting',
      category: 'community',
      description: 'Community meeting discussing local initiatives'
    },
    {
      id: 11,
      src: banner2,
      alt: 'Field Visit',
      category: 'development',
      description: 'Field visit to assess project progress'
    },
    {
      id: 12,
      src: aboutUsPic,
      alt: 'Team Activity',
      category: 'team',
      description: 'IIRD team conducting community outreach'
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'community', label: 'Community' },
    { id: 'education', label: 'Education' },
    { id: 'women', label: 'Women Empowerment' },
    { id: 'development', label: 'Development' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'environment', label: 'Environment' },
    { id: 'team', label: 'Team' }
  ];

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

  // Filter images based on selected category
  useEffect(() => {
    if (activeFilter === 'all') {
      setVisibleImages(galleryImages);
    } else {
      const filtered = galleryImages.filter(image => image.category === activeFilter);
      setVisibleImages(filtered);
    }
  }, [activeFilter]);

  // Open lightbox with selected image
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Navigate to next image in lightbox
  const goToNextImage = () => {
    if (!selectedImage) return;
    
    const currentIndex = visibleImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % visibleImages.length;
    setSelectedImage(visibleImages[nextIndex]);
  };

  // Navigate to previous image in lightbox
  const goToPrevImage = () => {
    if (!selectedImage) return;
    
    const currentIndex = visibleImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
    setSelectedImage(visibleImages[prevIndex]);
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        goToNextImage();
      } else if (e.key === 'ArrowLeft') {
        goToPrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, selectedImage]);

  return (
    <section className="gallery-section" ref={sectionRef} id="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title animate-fade-in">Gallery</h2>
          <div className="section-underline"></div>
          <h3 className="gallery-subtitle animate-fade-in delay-100">Our Impact in Pictures</h3>
        </div>

        <div className="gallery-filters animate-fade-in delay-200">
          <ul className="filter-list">
            {categories.map(category => (
              <li key={category.id}>
                <button
                  className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery-grid animate-fade-in delay-300">
          {visibleImages.map(image => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <div className="gallery-item-inner">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h4 className="gallery-image-title">{image.alt}</h4>
                    <p className="gallery-image-category">{categories.find(cat => cat.id === image.category)?.label}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleImages.length === 0 && (
          <div className="no-images-message animate-fade-in">
            <p>No images found in this category. Please select a different filter.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage && (
        <div className="lightbox">
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-nav prev" onClick={goToPrevImage}>‹</button>
            <div className="lightbox-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="lightbox-image"
              />
              <div className="lightbox-caption">
                <h4>{selectedImage.alt}</h4>
                <p>{selectedImage.description}</p>
              </div>
            </div>
            <button className="lightbox-nav next" onClick={goToNextImage}>›</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection; 