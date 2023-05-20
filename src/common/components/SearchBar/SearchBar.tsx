import { FunctionComponent } from 'react';
import { Button, Input } from '@mantine/core';

import { MagnifierIcon } from './MagnifierIcon';

import styles from './SearchBar.module.scss';

export const SearchBar: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Input
        classNames={{
          input: styles.input,
        }}
        placeholder="Введите название вакансии"
        icon={<MagnifierIcon />}
        radius="md"
      />
      <button className={styles.submitBtn}>Поиск</button>
    </div>
  );
};