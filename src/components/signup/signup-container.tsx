import { FC } from 'react';
import { useAppSelector } from 'src/store/hooks';
import { getIsSuccessfullyRegisteredSelector } from 'src/store/users';
import { SignupComponent } from './signup-component';

export const SignupContainer: FC = () => {
  const isSuccessfullyRegistered = useAppSelector(
    getIsSuccessfullyRegisteredSelector
  );

  return (
    <SignupComponent isSuccessfullyRegistered={isSuccessfullyRegistered} />
  );
};
