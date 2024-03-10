import { FC } from 'react';
import { clsx } from 'clsx';
import { IButtonProps } from './types';
import css from './button.module.scss';

export const ButtonComponent: FC<IButtonProps> = ({
  type = 'button',
  disabled = false,
  onClick,
  className,
  children,
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={clsx(css.button, className)}
  >
    {children}
  </button>
);
