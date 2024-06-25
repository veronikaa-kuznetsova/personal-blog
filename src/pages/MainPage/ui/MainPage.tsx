import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import {HStack} from "shared/ui/Stack";
import {ListBox} from "shared/ui/ListBox/ListBox";
import {Page} from "widgets/Page/Page";

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <Page>
      {t('main_page')}
      <HStack>
        <ListBox
          defaultValue={'Выберите значение'}
          onChange={(value: string) => {}}
          value={undefined}
          items={[
            {value: '1', content: '123'},
            {value: '2', content: '456', disabled: true},
            {value: '3', content: '789'},
            {value: '4', content: '147'}
          ]}
        />
      </HStack>
    </Page>
  );
};

export default MainPage;
