import { FC } from 'react';
import { clsx } from 'clsx';
import { IInputFile } from './types';
import css from './input-file.module.scss';

export const InputFileComponent: FC<IInputFile> = ({
  value,
  error,
  onChange,
  className,
}) => {
  const fileName = value?.name;

  return (
    <div>
      <label className={clsx(css.label, className)}>
        <input type="file" onChange={onChange} className={css.input} />
        <span
          className={clsx(css.upload_button, {
            [css.has_error]: error,
          })}
        >
          Upload
        </span>
        <span
          className={clsx(css.file_name, {
            [css.with_file]: fileName,
            [css.without_file]: !fileName,
            [css.has_error]: error,
          })}
        >
          {value ? fileName : 'Upload your photo'}
        </span>
      </label>
      {error && <span className={css.error}>{error}</span>}
    </div>
  );
};
