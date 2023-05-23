import { ChangeEvent, Dispatch, FormEvent, FunctionComponent, useRef, useState } from 'react';
import { Input } from '@mantine/core';

import { MagnifierIcon } from './MagnifierIcon';
import { JobQueryState, SearchAction, SearchActionType, initialJobQueryState } from 'reducers/search';

import styles from './SearchBar.module.scss';
import { useIsDirty } from './hooks';

interface SearchBarProps {
  state: JobQueryState,
  dispatch: Dispatch<SearchAction>
}

export const SearchBar: FunctionComponent<SearchBarProps> = ({ state, dispatch }) => {
  const [jobQuery, setJobQuery] = useState(initialJobQueryState.jobQuery);

  const isDirty = useIsDirty({ jobQuery }, state);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setJobQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    dispatch({
      type: SearchActionType.SetJobQuery,
      payload: {
        jobQuery,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <Input
        value={jobQuery}
        onChange={handleQueryChange}
        classNames={{
          input: styles.input,
        }}
        placeholder="Введите название вакансии"
        icon={<MagnifierIcon />}
      />
      <button type="submit" className={styles.submitBtn} disabled={!isDirty}>Поиск</button>
    </form>
  );
};