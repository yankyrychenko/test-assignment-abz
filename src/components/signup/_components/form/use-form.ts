import { useFormik } from 'formik';
import * as yup from 'yup';
import { FormFields } from './constants';
import { useAppDispatch } from 'src/store/hooks';
import { postUserThunk } from 'src/store/users';
import { IFormData } from './types';

export const useForm = () => {
  const dispatch = useAppDispatch();

  const initialValues = {
    [FormFields.Name]: '',
    [FormFields.Email]: '',
    [FormFields.Phone]: '',
    [FormFields.Position]: 0,
    [FormFields.Photo]: null,
  };

  const phoneRegExp = /^\+3809/;

  const validationSchema = yup.object().shape({
    [FormFields.Name]: yup
      .string()
      .required('The name field is required.')
      .min(2, 'The name must be at least 2 characters.')
      .max(60, 'The name must be 60 characters.'),
    [FormFields.Email]: yup
      .string()
      .required('Email is required')
      .email('The email must be a valid email address.'),
    [FormFields.Phone]: yup
      .string()
      .matches(phoneRegExp, 'The phone must be a valid phone number')
      .required('The phone field is required.'),
    [FormFields.Position]: yup
      .number()
      .required('The position field is required.'),
    [FormFields.Photo]: yup.string().required('The photo field is required.'),
  });

  const {
    isSubmitting,
    values,
    errors,
    setFieldValue,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik<IFormData>({
    initialValues,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();

        for (const key in values) {
          // @ts-ignore
          formData.append(key, values[key]);
        }

        await dispatch(postUserThunk(formData));

        resetForm();
      } catch (error) {
        throw new Error('Sign Up failed');
      }
    },
  });

  return {
    isSubmitting,
    values,
    errors,
    setFieldValue,
    handleChange,
    handleSubmit,
  };
};
