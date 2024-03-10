import { FC } from 'react';
import PhotoCover from 'src/assets/photo-cover.svg';
import { ICardProps } from './types';
import css from './card.module.scss';

export const CardComponent: FC<ICardProps> = ({
  id,
  photo,
  name,
  position,
  email,
  phone,
}) => (
  <li key={id} className={css.item}>
    {photo ? (
      <img src={photo} alt={name} className={css.photo} />
    ) : (
      <div className={css.photo}>
        <PhotoCover />
      </div>
    )}
    <p className={css.name}>{name}</p>
    <p className={css.position}>{position}</p>
    <p>{email}</p>
    <p>{phone}</p>
  </li>
);
