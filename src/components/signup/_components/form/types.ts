import { ChangeEvent, ChangeEventHandler } from 'react';
import { FormikErrors } from 'formik';
import { IPosition } from 'src/service/api/positions/types';

export interface IFormData {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  photo: File | null;
}

export interface IFormComponentProps {
  isSubmitting: boolean;
  positions: IPosition[];
  values: IFormData;
  errors: FormikErrors<IFormData>;
  onPositionChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPhotoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: () => void;
}
