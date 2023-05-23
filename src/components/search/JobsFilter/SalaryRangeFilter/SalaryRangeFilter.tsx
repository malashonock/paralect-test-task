import { FunctionComponent, memo } from 'react';

import { SalaryFilterState } from 'store/types';
import { NumberInput } from 'components/common';

import styles from './SalaryRangeFilter.module.scss';

interface SalaryRangeFilterProps {
  value: SalaryFilterState;
  onChange: (salaryRange: SalaryFilterState) => void;
}

export const SalaryRangeFilter: FunctionComponent<SalaryRangeFilterProps> = memo(({ value, onChange }) => {
  const handleChangeFrom = (from: number | ''): void => {
    onChange({
      ...value,
      salaryFrom: String(from),
    });
  };

  const handleChangeTo = (to: number | ''): void => {
    onChange({
      ...value,
      salaryTo: String(to),
    });
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Оклад</label>
      <NumberInput
        value={Number(value.salaryFrom) || ''}
        onChange={handleChangeFrom}
        min={0}
        max={Number(value.salaryTo) || Number.MAX_SAFE_INTEGER}
        placeholder="От"
        data-elem="salary-from-input"
      />
      <NumberInput
        value={Number(value.salaryTo) || ''}
        onChange={handleChangeTo}
        min={Number(value.salaryFrom) || 0}
        placeholder="До"
        data-elem="salary-to-input"
      />
    </div>
  );
});

SalaryRangeFilter.displayName = 'SalaryRangeFilter';