import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import image5 from '../../assets/5.jpg';
import image6 from '../../assets/6.jpg';

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  readMoreLink: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'economic-development',
    title: 'Economic Development and Poverty Alleviation',
    description: 'IIRD understands that achieving economic development goes beyond the pursuit of material gains; it means achieving the necessary means to be productive...',
    image: image1,
    readMoreLink: '/projects/economic-development'
  },
  {
    id: 'education-child-development',
    title: 'Education and Child Development',
    description: 'Education and child development is committed to supporting our educator in providing a safe nurturing and educational environmental that promotes children...',
    image: image2,
    readMoreLink: '/projects/education'
  },
  {
    id: 'health-sanitation',
    title: 'Health and Sanitation',
    description: 'IIRD has identified Health and Sanitation as a serious area to be addressed in order to improve living standards of rural people in India..',
    image: image3,
    readMoreLink: '/projects/health'
  },
  {
    id: 'women-empowerment',
    title: 'Women Empowerment',
    description: 'Empowering women through education, skill development, and creating sustainable livelihood opportunities to ensure gender equality and social justice.',
    image: image4,
    readMoreLink: '/projects/women-empowerment'
  },
  {
    id: 'sustainable-agriculture',
    title: 'Sustainable Agriculture',
    description: 'Promoting eco-friendly farming practices, organic cultivation, and water conservation techniques to ensure food security and environmental sustainability.',
    image: image5,
    readMoreLink: '/projects/agriculture'
  },
  {
    id: 'skill-development',
    title: 'Skill Development',
    description: 'Providing vocational training and skill enhancement programs to rural youth, creating employment opportunities and fostering entrepreneurship.',
    image: image6,
    readMoreLink: '/projects/skill-development'
  }
]; 