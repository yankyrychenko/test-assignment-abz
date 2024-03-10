import { FC } from 'react';
import { Button } from 'src/components/button';
import { IHeroComponentProps } from './types';
import css from './hero.module.scss';

export const HeroComponent: FC<IHeroComponentProps> = ({
  onScrollToSignUp,
}) => (
  <section className={css.section}>
    <div className={css.container}>
      <div className={css.content_wrapper}>
        <h1 className={css.title}>Test assignment for front-end developer</h1>
        <p className={css.subtitle}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button onClick={onScrollToSignUp} className={css.button}>
          Sign up
        </Button>
      </div>
    </div>
  </section>
);
