import { ChangeEvent, useEffect } from 'react';
import { FormFields } from './constants';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import {
  getPositionsItemsSelector,
  getPositionsThunk,
} from 'src/store/positions';
import { useForm } from './use-form';
import { FormComponent } from './form-component';

export const FormContainer = () => {
  const dispatch = useAppDispatch();

  const positions = useAppSelector(getPositionsItemsSelector);

  const {
    isSubmitting,
    values,
    errors,
    setFieldValue,
    handleChange,
    handleSubmit,
  } = useForm();

  const handlePositionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(FormFields.Position, parseInt(e.currentTarget.value));
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) {
      return;
    }

    setFieldValue(FormFields.Photo, e.currentTarget.files[0]);
  };

  useEffect(() => {
    dispatch(getPositionsThunk());
  }, [dispatch]);

  return (
    <FormComponent
      isSubmitting={isSubmitting}
      positions={positions}
      values={values}
      errors={errors}
      onPositionChange={handlePositionChange}
      onPhotoChange={handlePhotoChange}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
