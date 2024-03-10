import { SectionsIds } from 'src/constants/section-ids';
import { scrollToSection } from 'src/utils/scroll-to-section';
import { HeroComponent } from './hero-component';

export const HeroContainer = () => {
  const handleScrollToSignUp = () => {
    scrollToSection(SectionsIds.SignUp);
  };

  return <HeroComponent onScrollToSignUp={handleScrollToSignUp} />;
};
