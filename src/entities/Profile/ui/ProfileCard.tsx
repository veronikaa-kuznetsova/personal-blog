import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../model/types/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCurrency,
    onChangeCountry,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
  } = props;
  const { t } = useTranslation('profile');
  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('error_loading_profile')}
          text={t('try_reloading_page')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} alt="" />
          </div>
        )}
        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t('first_name')}
          onChange={onChangeFirstName}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t('last_name')}
          onChange={onChangeLastName}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.age}
          placeholder={t('age')}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t('city')}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t('username')}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          className={cls.input}
          value={data?.avatar}
          placeholder={t('avatar')}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
