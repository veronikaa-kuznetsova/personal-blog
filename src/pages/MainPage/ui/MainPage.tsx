import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {t('main_page')}
    </div>
  );
};

export default MainPage;
