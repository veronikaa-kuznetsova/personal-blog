import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icon/main-20-20.svg';
import AboutIcon from 'shared/assets/icon/about-20-20.svg';
import ProfileIcon from 'shared/assets/icon/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icon/article-20-20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'main_page',
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'about_the_site',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
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
      );
    }

    return sidebarItemsList;
  },
);
