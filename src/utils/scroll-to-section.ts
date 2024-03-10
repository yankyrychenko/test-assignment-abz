import { SectionsIds } from '../constants/section-ids';

export const scrollToSection = (sectionId: SectionsIds) => {
  const element = document.getElementById(sectionId);

  if (!element) {
    return;
  }

  element.scrollIntoView({ block: 'start', behavior: 'smooth' });
};
