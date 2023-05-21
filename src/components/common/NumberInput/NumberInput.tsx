import { ComponentProps, FunctionComponent } from 'react';
import { NumberInput as NumberInputBase } from '@mantine/core';
import cn from 'classnames';

import styles from './NumberInput.module.scss';

type NumberInputProps = ComponentProps<typeof NumberInputBase>;

export const NumberInput: FunctionComponent<NumberInputProps> = (props) => {
  return (
    <NumberInputBase
        {...props}
        classNames={{
          ...props.classNames,
          input: cn(styles.input, props.classNames?.input),
          control: cn(styles.control, props.classNames?.control),
          controlUp: cn(styles.controlUp, props.classNames?.controlUp),
          controlDown: cn(styles.controlDown, props.classNames?.controlDown),
          rightSection: cn(styles.controls, props.classNames?.rightSection),
        }}
      />
  );
};