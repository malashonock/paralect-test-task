import { ComponentProps, FunctionComponent } from 'react';
import { Select as SelectBase } from '@mantine/core';
import cn from 'classnames';

import { ShevronIcon } from './ShevronIcon';

import styles from './Select.module.scss';

type SelectProps = ComponentProps<typeof SelectBase>;

export const Select: FunctionComponent<SelectProps> = (props) => {
  return (
    <SelectBase
      rightSection={<ShevronIcon />}
      {...props}
      styles={{
        ...props.styles,
        rightSection: {
          pointerEvents: 'none'
        }
      }}
      classNames={{
        ...props.classNames,
        label: cn(styles.label, props.classNames?.label),
        input: cn(styles.input, props.classNames?.input),
      }}
    />
  );
};