import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('about_the_site')}
    </div>
  );
};

export default AboutPage;
