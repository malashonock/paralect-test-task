import { FunctionComponent, useMemo } from 'react';
import { Select, SelectItem } from '@mantine/core';

import styles from './IndustryFilter.module.scss';
import { ShevronIcon } from '../ShevronIcon';
import { useIndustries } from 'data/hooks';
import { Industry } from 'data/model';

export const IndustryFilter: FunctionComponent = () => {
  const { industries } = useIndustries();

  const options: SelectItem[] = useMemo(() => {
    return industries?.map((industry: Industry): SelectItem => ({
      value: industry.key.toString(),
      label: industry.title,
    })) || [
      { value: '', label: '(Нет данных)', disabled: true },
    ];
  }, [industries]);

  return (
    <Select
      label="Отрасль"
      placeholder="Выберите отрасль"
      data={options}
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