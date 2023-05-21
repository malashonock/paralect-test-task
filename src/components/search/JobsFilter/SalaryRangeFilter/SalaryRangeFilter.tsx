import { FunctionComponent, memo } from 'react';
import { NumberInput } from '@mantine/core';

import { SalaryRange } from 'reducers/search';

import styles from './SalaryRangeFilter.module.scss';

interface SalaryRangeFilterProps {
  value: SalaryRange;
  onChange: (salaryRange: SalaryRange) => void;
}

export const SalaryRangeFilter: FunctionComponent<SalaryRangeFilterProps> = memo(({ value, onChange }) => {
  const handleChangeFrom = (from: number | ''): void => {
    onChange({
      ...value,
      from: String(from),
    });
  };

  const handleChangeTo = (to: number | ''): void => {
    onChange({
      ...value,
      to: String(to),
    });
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Оклад</label>
      <NumberInput
        value={Number(value.from) || ''}
        onChange={handleChangeFrom}
        min={0}
        max={Number(value.to) || Number.MAX_SAFE_INTEGER}
        placeholder="От"
        classNames={{
          input: styles.input,
          control: styles.control,
          controlUp: styles.controlUp,
          controlDown: styles.controlDown,
          rightSection: styles.controls,
        }}
      />
      <NumberInput
        value={Number(value.to) || ''}
        onChange={handleChangeTo}
        min={Number(value.from) || 0}
        placeholder="До"
        classNames={{
          input: styles.input,
          control: styles.control,
          controlUp: styles.controlUp,
          controlDown: styles.controlDown,
          rightSection: styles.controls,
        }}
      />
    </div>
  );
});

SalaryRangeFilter.displayName = 'SalaryRangeFilter';