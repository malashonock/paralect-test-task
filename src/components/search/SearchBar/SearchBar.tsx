import { Dispatch, FunctionComponent, useRef } from 'react';
import { Input } from '@mantine/core';

import { MagnifierIcon } from './MagnifierIcon';
import { SearchAction, SearchActionType } from 'reducers/search';

import styles from './SearchBar.module.scss';

interface SearchBarProps {
  dispatch: Dispatch<SearchAction>
}

export const SearchBar: FunctionComponent<SearchBarProps> = ({ dispatch }) => {
  const inputRef = useRef<HTMLInputElement>();

  const handleSubmit = (): void => {
    dispatch({
      type: SearchActionType.SetJobQuery,
      payload: {
        jobQuery: inputRef.current.value,
      },
    });
  };

  return (
    <div className={styles.wrapper}>
      <Input
        ref={inputRef}
        classNames={{
          input: styles.input,
        }}
        placeholder="Введите название вакансии"
        icon={<MagnifierIcon />}
      />
      <button className={styles.submitBtn} onClick={handleSubmit}>Поиск</button>
    </div>
  );
};