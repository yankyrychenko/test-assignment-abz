import { FC } from 'react';
import { FormFields } from './constants';
import { Input } from 'src/components/input';
import { Radio } from 'src/components/radio';
import { InputFile } from 'src/components/input-file';
import { Button } from 'src/components/button';
import { IFormComponentProps } from './types';
import css from './form.module.scss';

export const FormComponent: FC<IFormComponentProps> = ({
  isSubmitting,
  positions,
  values,
  errors,
  onPositionChange,
  onPhotoChange,
  onChange,
  onSubmit,
}) => (
  <form className={css.form} onSubmit={onSubmit}>
    <div className={css.input_wrapper}>
      <Input
        placeholder="Name"
        id={FormFields.Name}
        value={values[FormFields.Name]}
        error={errors[FormFields.Name]}
        onChange={onChange}
        className={css.input}
      />
      <Input
        placeholder="Email"
        id={FormFields.Email}
        value={values[FormFields.Email]}
        error={errors[FormFields.Email]}
        onChange={onChange}
        className={css.input}
      />
      <Input
        placeholder="Phone"
        id={FormFields.Phone}
        value={values[FormFields.Phone]}
        error={errors[FormFields.Phone]}
        helperText={'+38 (XXX) XXX - XX - XX'}
        onChange={onChange}
        className={css.input}
      />
    </div>
    <p className={css.positions_title}>Select your position</p>
    <ul className={css.positions_list}>
      {positions.map((position) => (
        <li key={position.id} className={css.positions_item}>
          <Radio
            id={position.id.toString()}
            name={FormFields.Position}
            value={position.id}
            label={position.name}
            onChange={onPositionChange}
          />
        </li>
      ))}
    </ul>
    <InputFile
      type="file"
      value={values[FormFields.Photo]}
      error={errors[FormFields.Photo]}
      onChange={onPhotoChange}
      className={css.input_photo}
    />
    <Button type="submit" disabled={isSubmitting} className={css.submit_button}>
      Sign up
    </Button>
  </form>
);
