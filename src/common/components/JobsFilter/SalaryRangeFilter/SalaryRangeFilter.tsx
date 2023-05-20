import { FunctionComponent } from 'react';
import { NumberInput } from '@mantine/core';

import styles from './SalaryRangeFilter.module.scss';

export const SalaryRangeFilter: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Оклад</label>
      <NumberInput
        min={0}
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
        min={0} // TODO: from value
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
};