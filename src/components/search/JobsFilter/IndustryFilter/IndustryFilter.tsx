import { FunctionComponent } from 'react';
import { Select } from '@mantine/core';

import styles from './IndustryFilter.module.scss';
import { ShevronIcon } from '../ShevronIcon';

export const IndustryFilter: FunctionComponent = () => {
  return (
    <Select
      label="Отрасль"
      placeholder="Выберите отрасль"
      data={[
        { value: '1', label: 'IT' },
        { value: '2', label: 'Финансы' },
      ]}
      rightSection={<ShevronIcon />}
      styles={{
        rightSection: {
          pointerEvents: 'none'
        }
      }}
      classNames={{
        label: styles.label,
        input: styles.input,
      }}
    />
  );
};