import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icon/about-20-20.svg';
import MainIcon from 'shared/assets/icon/main-20-20.svg';
import ProfileIcon from 'shared/assets/icon/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icon/article-20-20.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'navbar_main',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'navbar_about',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'navbar_profile',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    text: 'navbar_articles',
    authOnly: true,
  },
];
