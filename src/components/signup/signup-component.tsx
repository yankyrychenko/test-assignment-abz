import { FC } from 'react';
import { SectionsIds } from 'src/constants/section-ids';
import { Form } from './_components/form';
import { SuccessfullyRegistered } from './_components/successfully-registered';
import { ISignupComponent } from './types';
import css from './signup.module.scss';

export const SignupComponent: FC<ISignupComponent> = ({
  isSuccessfullyRegistered,
}) => (
  <section id={SectionsIds.SignUp} className={css.section}>
    <div className={css.container}>
      <h2 className={css.title}>
        {isSuccessfullyRegistered
          ? 'User successfully registered'
          : 'Working with POST request'}
      </h2>
      {isSuccessfullyRegistered ? <SuccessfullyRegistered /> : <Form />}
    </div>
  </section>
);
