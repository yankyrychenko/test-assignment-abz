import { FC } from 'react';
import { clsx } from 'clsx';
import { IRadioProps } from './types';
import css from './radio.module.scss';

export const RadioComponent: FC<IRadioProps> = ({
  id,
  name,
  value,
  label,
  onChange,
  className,
}) => (
  <div className={clsx(css.wrapper, className)}>
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={css.input}
    />
    <label htmlFor={id} className={css.label}>
      {label}
    </label>
  </div>
);
