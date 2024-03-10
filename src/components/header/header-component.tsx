import { FC } from 'react';
import Logo from 'src/assets/logo.svg';
import { Button } from 'src/components/button';
import { IHeaderComponentProps } from './types';
import css from './header.module.scss';

export const HeaderComponent: FC<IHeaderComponentProps> = ({
  onScrollToUsers,
  onScrollToSignUp,
}) => (
  <header className={css.header}>
    <div className={css.container}>
      <a href="/" aria-label="logo">
        <Logo />
      </a>
      <nav>
        <ul className={css.nav_list}>
          <li className={css.nav_item}>
            <Button onClick={onScrollToUsers}>Users</Button>
          </li>
          <li className={css.nav_item}>
            <Button onClick={onScrollToSignUp}>Sign up</Button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
