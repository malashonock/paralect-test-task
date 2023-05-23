import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { Input } from '@mantine/core';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { MagnifierIcon } from './MagnifierIcon';
import { useIsDirty } from './hooks';
import { selectJobQuery, submitJobQuery } from 'store';

import styles from './SearchBar.module.scss';

interface SearchBarProps {
  className?: string;
}

export const SearchBar: FunctionComponent<SearchBarProps> = ({ className }) => {
  const submittedJobQueryState = useSelector(selectJobQuery);
  const dispatch = useDispatch();

  const [jobQuery, setJobQuery] = useState(submittedJobQueryState.jobQuery);

  const isDirty = useIsDirty({ jobQuery }, submittedJobQueryState);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setJobQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(submitJobQuery({ 
      jobQuery: jobQuery || undefined,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={cn(className, styles.wrapper)}>
      <Input
        value={jobQuery}
        onChange={handleQueryChange}
        classNames={{
          input: styles.input,
        }}
        placeholder="Введите название вакансии"
        icon={<MagnifierIcon />}
        data-elem="search-input"
      />
      <button
        type="submit"
        className={styles.submitBtn}
        disabled={!isDirty}
        data-elem="search-button"
      >
        Поиск
      </button>
    </form>
  );
};