import { HeaderComponent } from './header-component';
import { scrollToSection } from '../../utils/scroll-to-section';
import { SectionsIds } from '../../constants/section-ids';

export const HeaderContainer = () => {
  const handleScrollToUsers = () => {
    scrollToSection(SectionsIds.UsersSection);
  };

  const handleScrollToSignUp = () => {
    scrollToSection(SectionsIds.SignUp);
  };

  return (
    <HeaderComponent
      onScrollToUsers={handleScrollToUsers}
      onScrollToSignUp={handleScrollToSignUp}
    />
  );
};
