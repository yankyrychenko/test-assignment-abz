import { FC } from 'react';
import { SectionsIds } from 'src/constants/section-ids';
import { CardList } from './_components/card-list';
import { Button } from 'src/components/button';
import { Loader } from 'src/components/loader';
import { IUsersComponentProps } from './types';
import css from './users.module.scss';

export const UsersComponent: FC<IUsersComponentProps> = ({
  isLoading,
  isLastPage,
  users,
  onShowMore,
}) => (
  <section id={SectionsIds.UsersSection} className={css.section}>
    <div className={css.container}>
      <h2 className={css.title}>Working with GET request</h2>
      <CardList users={users} />
      {isLoading && <Loader />}
      {!isLastPage && (
        <Button
          disabled={isLoading}
          onClick={onShowMore}
          className={css.button}
        >
          Show more
        </Button>
      )}
    </div>
  </section>
);
