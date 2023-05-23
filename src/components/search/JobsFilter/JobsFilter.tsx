import { Dispatch, FormEvent, FunctionComponent, useCallback, useState } from 'react';
import cn from 'classnames';

import { ResetFiltersButton } from './ResetFiltersButton';
import { IndustryFilter } from './IndustryFilter';
import { SalaryRangeFilter } from './SalaryRangeFilter';
import { JobFiltersState, SalaryRange, SearchAction, SearchActionType, initialJobFiltersState } from 'reducers/search';
import { useIsDirty, useIsReset } from './hooks';

import styles from './JobsFilter.module.scss';

interface JobsFilterProps {
  state: JobFiltersState;
  dispatch: Dispatch<SearchAction>;
  className?: string;
}

export const JobsFilter: FunctionComponent<JobsFilterProps> = ({ state, dispatch, className }) => {
  const [industryId, setIndustryId] = useState(initialJobFiltersState.industryId);
  const [salaryRange, setSalaryRange] = useState(initialJobFiltersState.salaryRange);
  
  const isDirty = useIsDirty({ industryId, salaryRange }, state);
  const isReset = useIsReset({ industryId, salaryRange }, initialJobFiltersState);

  const handleResetFilters = useCallback(() => {
    setIndustryId(initialJobFiltersState.industryId);
    setSalaryRange(initialJobFiltersState.salaryRange);
  }, []);

  const handleIndustryChange = useCallback((industryId: string) => {
    setIndustryId(industryId);
  }, []);

  const handleSalaryRangeChange = useCallback((salaryRange: SalaryRange) => {
    setSalaryRange(salaryRange);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    dispatch({
      type: SearchActionType.SetJobFilters,
      payload: {
        industryId,
        salaryRange,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className={cn(className, styles.wrapper)}>
      <div className={styles.header}>
        <h2 className={styles.title}>Фильтры</h2>
        <ResetFiltersButton onClick={handleResetFilters} disabled={!isReset} />
      </div>
      <div className={styles.body}>
        <IndustryFilter value={industryId} onChange={handleIndustryChange} />
        <SalaryRangeFilter value={salaryRange} onChange={handleSalaryRangeChange} />
        <button
          type="submit"
          className={styles.applyBtn}
          disabled={!isDirty}
          data-elem="search-button"
        >
          Применить
        </button>
      </div>
    </form>
  );
};