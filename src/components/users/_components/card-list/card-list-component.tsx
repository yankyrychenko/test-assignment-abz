import { FC } from 'react';
import { Card } from './_components/card';
import { ICardListProps } from './types';
import css from './card-list.module.scss';

export const CardListComponent: FC<ICardListProps> = ({ users }) => (
  <ul className={css.list}>
    {users.map((user) => (
      <Card
        key={user.id}
        id={user.id}
        photo={user.photo}
        name={user.name}
        position={user.position}
        email={user.email}
        phone={user.phone}
      />
    ))}
  </ul>
);
