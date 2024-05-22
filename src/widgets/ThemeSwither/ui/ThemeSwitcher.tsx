import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import React from "react";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icon/theme-dark.svg";
import LightIcon from "shared/assets/icon/theme-light.svg";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitherProps) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
    </Button>
  );
};