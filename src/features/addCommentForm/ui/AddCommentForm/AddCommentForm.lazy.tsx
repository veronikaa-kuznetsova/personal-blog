import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

// @ts-ignore
export const AddCommentFormLazy = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));
