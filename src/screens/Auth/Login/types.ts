import type {FieldValues} from 'react-hook-form';

export interface FormValues extends FieldValues {
  phone: string;
  password: string;
}
