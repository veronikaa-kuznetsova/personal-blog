import { FC, lazy } from 'react';
import { LoginFormProps } from '../LoginForm/LoginForm';

// @ts-ignore
export const LoginFormLazy = lazy<FC<LoginFormProps>>(() => import('./LoginForm'));
