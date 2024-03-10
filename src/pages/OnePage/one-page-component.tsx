import { Header } from 'src/components/header';
import { Hero } from 'src/components/hero';
import { Users } from 'src/components/users';
import { Signup } from 'src/components/signup';
export const OnePageComponent = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Users />
        <Signup />
      </main>
    </>
  );
};
