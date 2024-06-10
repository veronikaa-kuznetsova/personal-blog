import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {t('main_page')}
      <Input
        placeholder=""
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default MainPage;
