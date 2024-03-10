import { FC } from 'react';
import { clsx } from 'clsx';
import { IInputProps } from './types';
import css from './input.module.scss';

export const InputComponent: FC<IInputProps> = ({
  id,
  value,
  error,
  placeholder,
  helperText,
  onChange,
  className,
}) => (
  <div className={className}>
    <div className={css.input_wrapper}>
      <input
        id={id}
        value={value}
        className={clsx(css.input, { [css.has_error]: error })}
        placeholder={placeholder}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={clsx(css.label, { [css.has_error]: error })}
      >
        {placeholder}
      </label>
    </div>
    {helperText && !error && (
      <span className={css.helper_text}>{helperText}</span>
    )}
    {error && <span className={css.error}>{error}</span>}
  </div>
);
