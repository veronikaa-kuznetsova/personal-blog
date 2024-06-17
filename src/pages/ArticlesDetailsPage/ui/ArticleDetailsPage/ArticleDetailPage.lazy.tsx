import { lazy } from 'react';

export const ArticleDetailPageLazy = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticleDetailPage')), 1500);
}));
