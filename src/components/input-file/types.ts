import { InputHTMLAttributes } from 'react';

// @ts-ignore
export interface IInputFile extends InputHTMLAttributes<HTMLInputElement> {
  value: File | null;
  error?: string;
  fileName?: string;
}
